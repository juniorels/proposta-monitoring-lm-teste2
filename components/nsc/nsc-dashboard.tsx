'use client'

import { useState, useCallback, useEffect } from 'react'
import Papa from 'papaparse'
import { saveData, loadData } from '@/lib/storage'
import { createSnapshot, loadSnapshot, generateShareableUrl } from '@/lib/snapshot'
import { Share2, Check, Copy } from 'lucide-react'
import type { 
  NSCRow, 
  VisitaRow, 
  ProcessedData, 
  NaoPassouRoutes, 
  PendentesRoutes,
  OcorrenciasData,
  PrioridadeStats
} from '@/lib/nsc-types'
import { processData, detectDate, pct, extractHubs, filterByHub, filterVisitasByDepot } from '@/lib/nsc-processor'

import { UploadCard } from './upload-card'
import { KPICard } from './kpi-card'
import { RankingCard } from './ranking-card'
import { DetailModal } from './detail-modal'
import { OcorrenciasModal } from './ocorrencias-modal'
import { TransportadoraBarChart, PrioridadePieChart, VisitaPercentageChart } from './interactive-charts'
import { PrioridadeModal } from './prioridade-modal'
import { LossTree } from './loss-tree'

export function NSCDashboard() {
  const [nscData, setNscData] = useState<NSCRow[] | null>(null)
  const [visitasData, setVisitasData] = useState<VisitaRow[] | null>(null)
  const [nscFileName, setNscFileName] = useState<string | null>(null)
  const [visitasFileName, setVisitasFileName] = useState<string | null>(null)
  
  const [processedData, setProcessedData] = useState<ProcessedData | null>(null)
  const [naoPassouRoutes, setNaoPassouRoutes] = useState<NaoPassouRoutes>({})
  const [pendentesRoutes, setPendentesRoutes] = useState<PendentesRoutes>({})
  const [ocorrencias, setOcorrencias] = useState<OcorrenciasData>({ 
    operacionais: 0, 
    comerciais: 0, 
    operacionaisRoutes: {}, 
    comerciaisRoutes: {} 
  })
  const [refDate, setRefDate] = useState<string>('—')
  
  const [availableHubs, setAvailableHubs] = useState<string[]>([])
  const [selectedHub, setSelectedHub] = useState<string>('todos')

  const [modalOpen, setModalOpen] = useState(false)
  const [modalTransp, setModalTransp] = useState('')
  const [modalTab, setModalTab] = useState<'naop' | 'pend'>('naop')
  
  const [ocorrenciasModalOpen, setOcorrenciasModalOpen] = useState(false)
  const [ocorrenciasModalType, setOcorrenciasModalType] = useState<'operacional' | 'comercial'>('operacional')
  
  const [prioridadeModalOpen, setPrioridadeModalOpen] = useState(false)
  const [selectedPrioridade, setSelectedPrioridade] = useState<PrioridadeStats | null>(null)
  
  const [isLoading, setIsLoading] = useState(true)
  const [isViewOnly, setIsViewOnly] = useState(false)
  const [shareUrl, setShareUrl] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const parseCSV = <T,>(file: File): Promise<T[]> => {
    return new Promise((resolve) => {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => resolve(result.data as T[]),
      })
    })
  }

  // Carregar dados do snapshot (URL) ou IndexedDB ao iniciar
  useEffect(() => {
    const load = async () => {
      try {
        // Primeiro, verificar se há um snapshot na URL
        const urlParams = new URLSearchParams(window.location.search)
        const snapshotParam = urlParams.get('snapshot')
        
        if (snapshotParam) {
          const snapshot = loadSnapshot(snapshotParam)
          if (snapshot && snapshot.tot) {
            // Reconstruir processedData completo a partir do snapshot
            const rows = snapshot.rows?.map(r => ({
              transp: r.transp,
              ini: r.total,
              vis: r.vis,
              pendL: r.totalPend,
              novos: 0,
              totalPend: r.totalPend,
              total: r.total
            })) || []
            
            const prioridades = snapshot.prioridades || []
            
            setProcessedData({
              rows,
              prioridades,
              tot: snapshot.tot
            })
            setOcorrencias({
              operacionais: snapshot.ocorrencias.operacionais,
              comerciais: snapshot.ocorrencias.comerciais,
              operacionaisRoutes: {},
              comerciaisRoutes: {}
            })
            setRefDate(snapshot.refDate)
            setSelectedHub(snapshot.selectedHub)
            setIsViewOnly(true)
            setIsLoading(false)
            return
          }
        }
        
        // Se não há snapshot, carregar do IndexedDB
        const saved = await loadData()
        
        if (saved?.nscData && saved?.visitasData) {
          const nsc = saved.nscData as NSCRow[]
          const visitas = saved.visitasData as VisitaRow[]
          const hub = saved.selectedHub || 'todos'
          
          setNscData(nsc)
          setVisitasData(visitas)
          setNscFileName(saved.nscFileName)
          setVisitasFileName(saved.visitasFileName)
          setSelectedHub(hub)
          
          // Processar os dados carregados
          const hubs = extractHubs(nsc)
          if (hubs.length > 0) {
            setAvailableHubs(hubs)
          }
          
          const filteredNsc = filterByHub(nsc, hub)
          const filteredVisitas = filterVisitasByDepot(visitas, hub)
          
          const { data, naoPassouRoutes: naop, pendentesRoutes: pend, ocorrencias: ocorr } = processData(filteredNsc, filteredVisitas)
          setProcessedData(data)
          setNaoPassouRoutes(naop)
          setPendentesRoutes(pend)
          setOcorrencias(ocorr)
          setRefDate(detectDate(filteredVisitas))
        }
      } catch (error) {
        console.error('Erro ao carregar dados:', error)
      } finally {
        setIsLoading(false)
      }
    }
    
    load()
  }, [])

  const tryProcess = useCallback((nsc: NSCRow[] | null, visitas: VisitaRow[] | null, hub: string = 'todos') => {
    if (!nsc || !visitas) return
    
    // Extrair hubs disponíveis (apenas uma vez, do arquivo completo)
    const hubs = extractHubs(nsc)
    if (hubs.length > 0) {
      setAvailableHubs(hubs)
    }
    
    // Filtrar NSC pelo hub selecionado
    const filteredNsc = filterByHub(nsc, hub)
    
    // Filtrar visitas pelo Depósito (coluna do arquivo de visitas)
    // O hub selecionado corresponde ao nome do depósito no arquivo de visitas
    const filteredVisitas = filterVisitasByDepot(visitas, hub)
    
    const { data, naoPassouRoutes: naop, pendentesRoutes: pend, ocorrencias: ocorr } = processData(filteredNsc, filteredVisitas)
    setProcessedData(data)
    setNaoPassouRoutes(naop)
    setPendentesRoutes(pend)
    setOcorrencias(ocorr)
    setRefDate(detectDate(filteredVisitas))
  }, [])

  const handleNscFile = async (file: File) => {
    const data = await parseCSV<NSCRow>(file)
    setNscData(data)
    setNscFileName(file.name)
    setSelectedHub('todos')
    
    // Salvar no IndexedDB
    await saveData({
      nscData: data,
      visitasData: visitasData,
      nscFileName: file.name,
      visitasFileName: visitasFileName,
      selectedHub: 'todos'
    })
    
    tryProcess(data, visitasData, 'todos')
  }

  const handleVisitasFile = async (file: File) => {
    const data = await parseCSV<VisitaRow>(file)
    setVisitasData(data)
    setVisitasFileName(file.name)
    
    // Salvar no IndexedDB
    await saveData({
      nscData: nscData,
      visitasData: data,
      nscFileName: nscFileName,
      visitasFileName: file.name,
      selectedHub: selectedHub
    })
    
    tryProcess(nscData, data, selectedHub)
  }

  const handleHubChange = async (hub: string) => {
    setSelectedHub(hub)
    
    // Salvar no IndexedDB
    await saveData({
      nscData: nscData,
      visitasData: visitasData,
      nscFileName: nscFileName,
      visitasFileName: visitasFileName,
      selectedHub: hub
    })
    
    tryProcess(nscData, visitasData, hub)
  }

  const openModal = (transp: string, tab: 'naop' | 'pend') => {
    setModalTransp(transp)
    setModalTab(tab)
    setModalOpen(true)
  }

  const openOcorrenciasModal = (type: 'operacional' | 'comercial') => {
    setOcorrenciasModalType(type)
    setOcorrenciasModalOpen(true)
  }

  const openPrioridadeModal = (prioridade: PrioridadeStats) => {
    setSelectedPrioridade(prioridade)
    setPrioridadeModalOpen(true)
  }

  const handleShare = () => {
    if (!processedData) return
    
    const snapshot = createSnapshot(processedData, ocorrencias, refDate, selectedHub)
    const url = generateShareableUrl(snapshot)
    setShareUrl(url)
  }

  const handleCopyUrl = async () => {
    if (!shareUrl) return
    
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Erro ao copiar:', err)
    }
  }

  const tot = processedData?.tot
  const pV = tot ? pct(tot.vis, tot.total) : 0

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="text-sm text-muted-foreground">Carregando dados...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-5">
      {/* Header */}
      <header className="mb-3.5 flex flex-col gap-3 rounded-xl border border-border bg-card px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-base font-bold text-foreground">Dashboard NSC Diário</h1>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Mercado Livre · First Mile
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          {/* Seletor de Hub */}
          {availableHubs.length > 0 && (
            <div className="flex items-center gap-2">
              <label htmlFor="hub-select" className="text-xs text-muted-foreground">
                Hub:
              </label>
              <select
                id="hub-select"
                value={selectedHub}
                onChange={(e) => handleHubChange(e.target.value)}
                className="rounded-md border border-border bg-background px-2.5 py-1.5 text-xs font-medium text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="todos">Todos os Hubs</option>
                {availableHubs.map(hub => (
                  <option key={hub} value={hub}>{hub}</option>
                ))}
              </select>
            </div>
          )}
          
          <span className="text-xs text-muted-foreground">
            Referência: <span className="font-bold text-yellow">{refDate}</span>
          </span>
          
          {/* Botão de Compartilhar */}
          {processedData && !isViewOnly && (
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Share2 className="h-3.5 w-3.5" />
              Compartilhar
            </button>
          )}
          
          {isViewOnly && (
            <span className="rounded-md bg-yellow/20 px-2 py-1 text-xs font-medium text-yellow">
              Modo Visualização
            </span>
          )}
        </div>
      </header>
      
      {/* Modal de Compartilhamento */}
      {shareUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="mx-4 w-full max-w-md rounded-xl border border-border bg-card p-5">
            <h3 className="mb-3 text-sm font-bold text-foreground">Link de Compartilhamento</h3>
            <p className="mb-3 text-xs text-muted-foreground">
              Qualquer pessoa com este link poderá visualizar o dashboard com os dados atuais.
            </p>
            <div className="mb-4 flex gap-2">
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-xs text-foreground"
              />
              <button
                onClick={handleCopyUrl}
                className="flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? 'Copiado!' : 'Copiar'}
              </button>
            </div>
            <button
              onClick={() => setShareUrl(null)}
              className="w-full rounded-md border border-border px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-muted"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Upload Row - oculto no modo visualização */}
      {!isViewOnly && (
        <div className="mb-3.5 grid grid-cols-1 gap-3 md:grid-cols-2">
          <UploadCard
            type="nsc"
            isLoaded={!!nscData}
            fileName={nscFileName}
            onFileSelect={handleNscFile}
          />
          <UploadCard
            type="visitas"
            isLoaded={!!visitasData}
            fileName={visitasFileName}
            onFileSelect={handleVisitasFile}
          />
        </div>
      )}

      {/* KPIs - Primeira linha */}
      <div className="mb-3.5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <KPICard type="total" value={tot?.total ?? '—'} />
        <KPICard type="visit" value={tot?.vis ?? '—'} />
        <KPICard type="naop" value={tot?.novos ?? '—'} />
        <KPICard type="pend" value={tot?.totalPend ?? '—'} />
        <KPICard type="pct" value={tot ? `${pV}%` : '—'} />
        <KPICard type="sem" value={tot ? `${100 - pV}%` : '—'} />
      </div>

      {/* KPIs - Ocorrências */}
      <div className="mb-3.5 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-2">
        <KPICard 
          type="ocorr_op" 
          value={ocorrencias.operacionais} 
          onClick={() => openOcorrenciasModal('operacional')}
        />
        <KPICard 
          type="ocorr_com" 
          value={ocorrencias.comerciais} 
          onClick={() => openOcorrenciasModal('comercial')}
        />
      </div>

      {/* Charts Interativos */}
      <div className="mb-3.5 grid grid-cols-1 gap-3.5 lg:grid-cols-2">
        <TransportadoraBarChart
          title="Visitados vs Pendentes por Transportadora"
          rows={processedData?.rows ?? []}
        />
        <VisitaPercentageChart
          title="Taxa de Visita por Transportadora"
          rows={processedData?.rows ?? []}
        />
      </div>
      
      {/* Gráfico de Prioridade */}
      <div className="mb-3.5">
        <PrioridadePieChart 
          prioridades={processedData?.prioridades ?? []} 
          onPrioridadeClick={openPrioridadeModal}
        />
      </div>

      {/* Árvore de Perda - Não Passei pelo Endereço */}
      <div className="mb-3.5">
        <LossTree 
          naoPassouRoutes={naoPassouRoutes}
          totalNaoPassou={tot?.novos ?? 0}
        />
      </div>

      {/* Ranking */}
      <RankingCard
        rows={processedData?.rows ?? []}
        onOpenModal={openModal}
      />

      {/* Footer */}
      <footer className="pt-3 text-center text-xs text-muted-foreground">
        Dashboard NSC · Mercado Livre GRU II · Ref: {refDate}
      </footer>

      {/* Modal de Detalhes */}
      <DetailModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        transp={modalTransp}
        activeTab={modalTab}
        onTabChange={setModalTab}
        naoPassouRoutes={naoPassouRoutes}
        pendentesRoutes={pendentesRoutes}
      />

      {/* Modal de Ocorrências */}
      <OcorrenciasModal
        isOpen={ocorrenciasModalOpen}
        onClose={() => setOcorrenciasModalOpen(false)}
        type={ocorrenciasModalType}
        ocorrenciasRoutes={
          ocorrenciasModalType === 'operacional' 
            ? ocorrencias.operacionaisRoutes 
            : ocorrencias.comerciaisRoutes
        }
      />

      {/* Modal de Prioridade */}
      <PrioridadeModal
        isOpen={prioridadeModalOpen}
        onClose={() => setPrioridadeModalOpen(false)}
        prioridade={selectedPrioridade}
      />
    </div>
  )
}
