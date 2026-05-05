export interface NSCRow {
  ID: string
  Transportadora: string
  Rota: string
  [key: string]: string
}

export interface VisitaRow {
  'ID de Parada': string
  'Motivo': string
  'Transportadora': string
  'Nome da Rota': string
  'ID do Rota': string
  'Parada': string
  'Data da rota': string
  'Data de coleta': string
  [key: string]: string
}

export interface TransportadoraStats {
  transp: string
  ini: number
  vis: number
  pendL: number
  novos: number
  totalPend: number
  total: number
}

export interface PrioridadeDetail {
  id: string
  rota: string
  cluster: string
  transportadora: string
  status: 'visitado' | 'pendente' | 'naoPassei'
}

export interface PrioridadeStats {
  prioridade: string
  total: number
  visitados: number
  pendentes: number
  naoPassei: number
  detalhes: PrioridadeDetail[]
}

export interface RouteDetail {
  rota: string
  parada?: string
  id?: string
  origem?: 'novo' | 'lista'
}

export interface ProcessedData {
  rows: TransportadoraStats[]
  prioridades: PrioridadeStats[]
  tot: {
    ini: number
    vis: number
    pendL: number
    novos: number
    totalPend: number
    total: number
  }
}

export interface NaoPassouRoutes {
  [transp: string]: RouteDetail[]
}

export interface PendentesRoutes {
  [transp: string]: RouteDetail[]
}

export interface OcorrenciaDetail {
  rota: string
  transportadora: string
  motivo: string
  parada?: string
  idParada?: string
}

export interface OcorrenciasRoutes {
  [transp: string]: OcorrenciaDetail[]
}

export interface OcorrenciasData {
  operacionais: number
  comerciais: number
  operacionaisRoutes: OcorrenciasRoutes
  comerciaisRoutes: OcorrenciasRoutes
}
