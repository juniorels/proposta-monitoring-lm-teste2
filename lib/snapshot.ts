import type { ProcessedData, OcorrenciasData, TransportadoraStats, PrioridadeStats } from './nsc-types'

export type { DashboardSnapshot }

interface DashboardSnapshot {
  // Dados completos para exibir KPIs e gráficos
  rows: Array<{
    transp: string
    total: number
    vis: number
    totalPend: number
  }>
  prioridades: Array<{
    prioridade: string
    total: number
    visitados: number
    pendentes: number
    naoPassei: number
  }>
  tot: {
    total: number
    vis: number
    novos: number
    totalPend: number
  } | null
  ocorrencias: {
    operacionais: number
    comerciais: number
  }
  refDate: string
  selectedHub: string
}

// Codifica para Base64 URL-safe
function encodeBase64(str: string): string {
  if (typeof window === 'undefined') return ''
  const utf8 = new TextEncoder().encode(str)
  let binary = ''
  utf8.forEach(byte => binary += String.fromCharCode(byte))
  return btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}

// Decodifica de Base64 URL-safe
function decodeBase64(str: string): string {
  if (typeof window === 'undefined') return ''
  try {
    let base64 = str.replace(/-/g, '+').replace(/_/g, '/')
    while (base64.length % 4) base64 += '='
    const binary = atob(base64)
    const bytes = new Uint8Array(binary.length)
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i)
    }
    return new TextDecoder().decode(bytes)
  } catch {
    return ''
  }
}

export function createSnapshot(
  processedData: ProcessedData | null,
  ocorrencias: OcorrenciasData,
  refDate: string,
  selectedHub: string
): string {
  // Incluir dados simplificados das transportadoras e prioridades para os gráficos
  const rows = processedData?.rows?.map(r => ({
    transp: r.transp,
    total: r.total,
    vis: r.vis,
    totalPend: r.totalPend
  })) || []
  
  const prioridades = processedData?.prioridades?.map(p => ({
    prioridade: p.prioridade,
    total: p.total,
    visitados: p.visitados,
    pendentes: p.pendentes,
    naoPassei: p.naoPassei
  })) || []

  const snapshot: DashboardSnapshot = {
    rows,
    prioridades,
    tot: processedData?.tot ? {
      total: processedData.tot.total,
      vis: processedData.tot.vis,
      novos: processedData.tot.novos,
      totalPend: processedData.tot.totalPend
    } : null,
    ocorrencias: {
      operacionais: ocorrencias.operacionais,
      comerciais: ocorrencias.comerciais
    },
    refDate,
    selectedHub
  }
  
  const json = JSON.stringify(snapshot)
  return encodeBase64(json)
}

export function loadSnapshot(encoded: string): DashboardSnapshot | null {
  try {
    const json = decodeBase64(encoded)
    if (!json) return null
    return JSON.parse(json) as DashboardSnapshot
  } catch {
    return null
  }
}

export function generateShareableUrl(snapshot: string): string {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  return `${baseUrl}/view?data=${snapshot}`
}
