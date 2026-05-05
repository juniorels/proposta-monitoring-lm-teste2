import type { 
  NSCRow, 
  VisitaRow, 
  ProcessedData, 
  NaoPassouRoutes, 
  PendentesRoutes,
  OcorrenciasData,
  OcorrenciasRoutes,
  OcorrenciaDetail,
  PrioridadeStats,
  PrioridadeDetail
} from './nsc-types'

const MOTIVOS_OK = [
  'Coleta Parcial',
  'O vendedor não os tem preparados',
  'O local estava fechado',
  'O vendedor não tem o código de autorização',
  'Não estão na agência',
  'Não há pacotes para coletar',
]

// Função para normalizar texto (remove acentos, lowercase, trim)
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}

// Função para verificar se o motivo corresponde a algum da lista
function matchesMotivo(motivo: string, lista: string[]): boolean {
  const normalizedMotivo = normalizeText(motivo)
  return lista.some(item => normalizeText(item) === normalizedMotivo || normalizedMotivo.includes(normalizeText(item)))
}

// Função para verificar se é "não passei pelo endereço"
function isNaoPassei(motivo: string): boolean {
  const normalized = normalizeText(motivo)
  return normalized.includes('nao passei') || normalized.includes('não passei')
}

// Ocorrências Operacionais - problemas do motorista/veículo
const MOTIVOS_OPERACIONAIS = [
  'Não passei pelo endereço',
  'nao passei pelo endereco',
  'Veículo cheio',
  'veiculo cheio',
  'Carga frágil',
  'carga fragil',
  'Não posso continuar dirigindo',
  'nao posso continuar dirigindo',
  'Tive um problema mecânico',
  'tive um problema mecanico',
]

// Ocorrências Comerciais - problemas do vendedor/local
const MOTIVOS_COMERCIAIS = [
  'O local estava fechado',
  'local estava fechado',
  'Não estão na agência',
  'nao estao na agencia',
  'O vendedor não os tem preparados',
  'vendedor nao os tem preparados',
  'O vendedor não tem o código de autorização',
  'vendedor nao tem o codigo',
]

function getField(row: Record<string, string>, ...keys: string[]): string {
  for (const k of keys) {
    if (row[k] != null && String(row[k]).trim() !== '') {
      return String(row[k]).trim()
    }
  }
  return ''
}

// Extrai o cluster do formato "BRXSP10_CO2_596" -> "CO2"
// ou de um campo específico de cluster se existir
function extractCluster(row: Record<string, string>): string {
  // Primeiro, tentar pegar de um campo específico de cluster
  const clusterField = getField(row, 'Cluster', 'CLUSTER', 'cluster', 'Região', 'REGIÃO', 'regiao')
  if (clusterField) return clusterField
  
  // Se não encontrar, tentar extrair da Rota no formato "BRXSP10_CO2_596"
  const rota = getField(row, 'Rota', 'ROTA', 'rota', 'ID')
  if (rota && rota.includes('_')) {
    const parts = rota.split('_')
    // O cluster geralmente é a segunda parte (ex: BRXSP10_CO2_596 -> CO2)
    if (parts.length >= 2) {
      return parts[1]
    }
  }
  
  return 'Sem Cluster'
}

export function processData(
  nsc: NSCRow[], 
  visitas: VisitaRow[]
): { 
  data: ProcessedData
  naoPassouRoutes: NaoPassouRoutes
  pendentesRoutes: PendentesRoutes
  ocorrencias: OcorrenciasData
} {
  const idsVisitados = new Set<string>()
  const idsNaoPassou = new Set<string>()
  
  // Primeiro, criar set com IDs da lista NSC do dia
  const idsOrig = new Set(nsc.map(r => getField(r, 'ID')))
  
  // Contadores e detalhes de ocorrências (apenas para IDs da lista NSC)
  let ocorrenciasOperacionais = 0
  let ocorrenciasComerciais = 0
  const operacionaisRoutes: OcorrenciasRoutes = {}
  const comerciaisRoutes: OcorrenciasRoutes = {}
  
  // Set para evitar contar o mesmo ID mais de uma vez por tipo de ocorrência
  const idsOperacionais = new Set<string>()
  const idsComerciais = new Set<string>()
  
  visitas.forEach(row => {
    const m = getField(row, 'Motivo')
    const id = getField(row, 'ID de Parada')
    const transp = getField(row, 'Transportadora')
    const rota = getField(row, 'Nome da Rota') || getField(row, 'ID do Rota')
    const parada = getField(row, 'Parada')
    
    if (!id) return
    if (isNaoPassei(m)) {
      idsNaoPassou.add(id)
    } else if (!m || MOTIVOS_OK.includes(m)) {
      idsVisitados.add(id)
    }
    
    // Registrar detalhes das ocorrências APENAS para IDs que estão na lista NSC
    // E apenas uma vez por ID (evita duplicatas)
    if (idsOrig.has(id) && matchesMotivo(m, MOTIVOS_OPERACIONAIS) && !idsOperacionais.has(id)) {
      idsOperacionais.add(id)
      ocorrenciasOperacionais++
      if (!operacionaisRoutes[transp]) operacionaisRoutes[transp] = []
      operacionaisRoutes[transp].push({
        rota,
        transportadora: transp,
        motivo: m,
        parada,
        idParada: id
      })
    }
    if (idsOrig.has(id) && matchesMotivo(m, MOTIVOS_COMERCIAIS) && !idsComerciais.has(id)) {
      idsComerciais.add(id)
      ocorrenciasComerciais++
      if (!comerciaisRoutes[transp]) comerciaisRoutes[transp] = []
      comerciaisRoutes[transp].push({
        rota,
        transportadora: transp,
        motivo: m,
        parada,
        idParada: id
      })
    }
  })
  const tm: Record<string, { ini: number; vis: number; pendL: number; novos: number }> = {}
  const pendDetails: PendentesRoutes = {}
  
  // Estatísticas por prioridade
  const pm: Record<string, { total: number; visitados: number; pendentes: number; naoPassei: number; detalhes: PrioridadeDetail[] }> = {}

  nsc.forEach(r => {
    const id = getField(r, 'ID')
    const t = getField(r, 'Transportadora')
    const rota = getField(r, 'Rota')
    const cluster = extractCluster(r)
    const prioridade = getField(r, 'Prioridade', 'PRIORIDADE', 'prioridade') || 'Sem Prioridade'
    
    if (!tm[t]) tm[t] = { ini: 0, vis: 0, pendL: 0, novos: 0 }
    tm[t].ini++
    
    // Inicializar prioridade
    if (!pm[prioridade]) pm[prioridade] = { total: 0, visitados: 0, pendentes: 0, naoPassei: 0, detalhes: [] }
    pm[prioridade].total++
    
    let status: 'visitado' | 'pendente' | 'naoPassei' = 'pendente'
    
    if (idsVisitados.has(id) && !idsNaoPassou.has(id)) {
      tm[t].vis++
      pm[prioridade].visitados++
      status = 'visitado'
    } else if (idsNaoPassou.has(id)) {
      tm[t].pendL++
      tm[t].novos++ // Contar "não passei" por transportadora
      pm[prioridade].naoPassei++
      status = 'naoPassei'
      if (!pendDetails[t]) pendDetails[t] = []
      pendDetails[t].push({ rota, id })
    } else {
      tm[t].pendL++
      pm[prioridade].pendentes++
      status = 'pendente'
      if (!pendDetails[t]) pendDetails[t] = []
      pendDetails[t].push({ rota, id })
    }
    
    // Adicionar detalhe
    pm[prioridade].detalhes.push({
      id,
      rota,
      cluster,
      transportadora: t,
      status
    })
  })

  const routeDetails: NaoPassouRoutes = {}
  const novosMap = new Map<string, string>()
  
  visitas.forEach(row => {
    const m = getField(row, 'Motivo')
    const id = getField(row, 'ID de Parada')
    const t = getField(row, 'Transportadora')
    
    if (isNaoPassei(m)) {
      const rota = getField(row, 'Nome da Rota') || getField(row, 'ID do Rota')
      const parada = getField(row, 'Parada')
      
      if (!routeDetails[t]) routeDetails[t] = []
      
      if (!idsOrig.has(id)) {
        novosMap.set(id, t)
        routeDetails[t].push({ rota, parada, origem: 'novo' })
      } else {
        routeDetails[t].push({ rota, parada, origem: 'lista' })
      }
    }
  })
  
  // Novos fora da lista NSC (não contamos mais aqui, pois agora contamos apenas os da lista)

  const rows = Object.entries(tm).map(([t, d]) => ({
    transp: t,
    ini: d.ini,
    vis: d.vis,
    pendL: d.ini - d.vis, // Pendentes = Total - Visitados
    novos: d.novos, // Quantidade de "não passei" por transportadora
    totalPend: d.ini - d.vis, // Pendentes = Total - Visitados
    total: d.ini,
  })).sort((a, b) => b.total - a.total)

  const tot = rows.reduce(
    (a, r) => ({
      ini: a.ini + r.ini,
      vis: a.vis + r.vis,
      pendL: a.pendL + r.pendL,
      novos: a.novos + r.novos, // Soma dos "não passei" de todas as transportadoras
      totalPend: a.totalPend + r.totalPend,
      total: a.total + r.total,
    }),
    { ini: 0, vis: 0, pendL: 0, novos: 0, totalPend: 0, total: 0 }
  )

  // Converter prioridades para array
  const prioridades: PrioridadeStats[] = Object.entries(pm)
    .map(([prioridade, stats]) => ({
      prioridade,
      total: stats.total,
      visitados: stats.visitados,
      pendentes: stats.pendentes,
      naoPassei: stats.naoPassei,
      detalhes: stats.detalhes
    }))
    .sort((a, b) => b.total - a.total)

  return { 
    data: { rows, prioridades, tot }, 
    naoPassouRoutes: routeDetails, 
    pendentesRoutes: pendDetails,
    ocorrencias: {
      operacionais: ocorrenciasOperacionais,
      comerciais: ocorrenciasComerciais,
      operacionaisRoutes,
      comerciaisRoutes
    }
  }
}

export function detectDate(visitas: VisitaRow[]): string {
  for (const row of visitas) {
    const d = getField(row, 'Data da rota', 'Data de coleta')
    if (d) {
      // Verifica se está no formato YYYY-MM-DD
      if (d.includes('-')) {
        const p = d.split('-')
        if (p.length === 3 && p[0].length === 4) {
          return `${p[2]}/${p[1]}/${p[0]}`
        }
      }
      // Verifica se está no formato DD/MM/YYYY ou similar
      if (d.includes('/')) {
        const p = d.split('/')
        if (p.length === 3) {
          // Se o primeiro elemento tem 4 dígitos, está no formato YYYY/MM/DD
          if (p[0].length === 4) {
            return `${p[2]}/${p[1]}/${p[0]}`
          }
          // Já está no formato DD/MM/YYYY
          return d
        }
      }
      return d
    }
  }
  return new Date().toLocaleDateString('pt-BR')
}

export function extractHubs(nsc: NSCRow[]): string[] {
  const hubs = new Set<string>()
  nsc.forEach(row => {
    const hub = getField(row, 'Hub', 'HUB', 'Centro de Distribuição', 'CD', 'Filial')
    if (hub) hubs.add(hub)
  })
  return Array.from(hubs).sort()
}

export function filterByHub(nsc: NSCRow[], hub: string | null): NSCRow[] {
  if (!hub || hub === 'todos') return nsc
  return nsc.filter(row => {
    const rowHub = getField(row, 'Hub', 'HUB', 'Centro de Distribuição', 'CD', 'Filial')
    return rowHub === hub
  })
}

export function filterVisitasByNscIds(visitas: VisitaRow[], nscIds: Set<string>): VisitaRow[] {
  if (nscIds.size === 0) return visitas
  return visitas.filter(row => {
    const id = getField(row, 'ID de Parada')
    return nscIds.has(id)
  })
}

// Mapeamento entre nomes de Hub (arquivo NSC) e Depósito (arquivo Visitas)
const HUB_DEPOT_MAP: Record<string, string[]> = {
  'GRU II': ['Guarulhos II', 'GRU II', 'GRUII', 'Guarulhos 2', 'GRU2', 'BRXSP10'],
  'GRU I': ['Guarulhos I', 'GRU I', 'GRUI', 'Guarulhos 1', 'GRU1', 'BRXSP01'],
  'GRU': ['Guarulhos', 'GRU'],
  'Cravinhos': ['Cravinhos', 'BRXSP11'],
  'Campinas': ['Campinas', 'BRXSP02'],
  'Curitiba': ['Curitiba', 'BRXPR01'],
  'Porto Alegre': ['Porto Alegre', 'BRXRS01'],
  'Belo Horizonte': ['Belo Horizonte', 'BRXMG01'],
  'Recife': ['Recife', 'BRXPE01'],
  'Salvador': ['Salvador', 'BRXBA01'],
  'Fortaleza': ['Fortaleza', 'BRXCE01'],
  'Brasília': ['Brasília', 'Brasilia', 'BRXDF01'],
  'Rio de Janeiro': ['Rio de Janeiro', 'BRXRJ01'],
  'Florianópolis': ['Florianópolis', 'Florianopolis', 'BRXSC01'],
}

export function filterVisitasByDepot(visitas: VisitaRow[], hubName: string | null): VisitaRow[] {
  if (!hubName || hubName === 'todos') return visitas
  
  // Pegar variações possíveis do nome do hub
  const hubVariations = HUB_DEPOT_MAP[hubName] || [hubName]
  
  const filtered = visitas.filter(row => {
    const depot = getField(row, 'Depósito', 'Deposito', 'ID del Depósito', 'ID do Nodo')
    if (!depot) return false
    
    // Verificar se o depósito corresponde a alguma variação do hub
    const depotLower = depot.toLowerCase()
    return hubVariations.some(variation => 
      depotLower === variation.toLowerCase() ||
      depotLower.includes(variation.toLowerCase()) ||
      variation.toLowerCase().includes(depotLower)
    )
  })
  
  return filtered
}

export function pct(a: number, b: number): number {
  return b === 0 ? 0 : Math.round((a / b) * 100)
}
