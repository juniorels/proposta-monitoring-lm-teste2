'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { loadSnapshot, type DashboardSnapshot } from '@/lib/snapshot'
import { KPICard } from '@/components/nsc/kpi-card'
import { pct } from '@/lib/nsc-processor'
import { TransportadoraBarChart, PrioridadePieChart, VisitaPercentageChart } from '@/components/nsc/interactive-charts'
import type { TransportadoraStats, PrioridadeStats } from '@/lib/nsc-types'

function ViewContent() {
  const searchParams = useSearchParams()
  const [snapshot, setSnapshot] = useState<DashboardSnapshot | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const data = searchParams.get('data')
    if (data) {
      const loaded = loadSnapshot(data)
      if (loaded) {
        setSnapshot(loaded)
      } else {
        setError('Não foi possível carregar os dados do snapshot.')
      }
    } else {
      setError('Nenhum dado encontrado na URL.')
    }
  }, [searchParams])

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-5">
        <div className="text-center">
          <p className="text-sm text-red-500">{error}</p>
          <a href="/" className="mt-4 inline-block text-xs text-primary underline">
            Voltar ao Dashboard
          </a>
        </div>
      </div>
    )
  }

  if (!snapshot || !snapshot.tot) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="text-sm text-muted-foreground">Carregando dados...</p>
        </div>
      </div>
    )
  }

  const tot = snapshot.tot
  const pV = pct(tot.vis, tot.total)
  
  // Reconstruir dados para os gráficos
  const rows: TransportadoraStats[] = snapshot.rows?.map(r => ({
    transp: r.transp,
    ini: r.total,
    vis: r.vis,
    pendL: r.totalPend,
    novos: 0,
    totalPend: r.totalPend,
    total: r.total
  })) || []
  
  const prioridades: PrioridadeStats[] = snapshot.prioridades || []

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
          {snapshot.selectedHub && snapshot.selectedHub !== 'todos' && (
            <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
              Hub: {snapshot.selectedHub}
            </span>
          )}
          
          <span className="text-xs text-muted-foreground">
            Referência: <span className="font-bold text-yellow">{snapshot.refDate}</span>
          </span>
          
          <span className="rounded-md bg-yellow/20 px-2 py-1 text-xs font-medium text-yellow">
            Modo Visualização
          </span>
        </div>
      </header>

      {/* KPIs - Primeira linha */}
      <div className="mb-3.5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <KPICard type="total" value={tot.total} />
        <KPICard type="visit" value={tot.vis} />
        <KPICard type="naop" value={tot.novos} />
        <KPICard type="pend" value={tot.totalPend} />
        <KPICard type="pct" value={`${pV}%`} />
        <KPICard type="sem" value={`${100 - pV}%`} />
      </div>

      {/* KPIs - Ocorrências */}
      <div className="mb-3.5 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-2">
        <KPICard type="ocorr_op" value={snapshot.ocorrencias.operacionais} />
        <KPICard type="ocorr_com" value={snapshot.ocorrencias.comerciais} />
      </div>

      {/* Charts Interativos */}
      {rows.length > 0 && (
        <div className="mb-3.5 grid grid-cols-1 gap-3.5 lg:grid-cols-2">
          <TransportadoraBarChart
            title="Visitados vs Pendentes por Transportadora"
            rows={rows}
          />
          <VisitaPercentageChart
            title="Taxa de Visita por Transportadora"
            rows={rows}
          />
        </div>
      )}
      
      {/* Gráfico de Prioridade */}
      {prioridades.length > 0 && (
        <div className="mb-3.5">
          <PrioridadePieChart prioridades={prioridades} />
        </div>
      )}

      {/* Footer */}
      <footer className="pt-3 text-center text-xs text-muted-foreground">
        Dashboard NSC · Mercado Livre · Ref: {snapshot.refDate}
      </footer>
    </div>
  )
}

function LoadingFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        <p className="text-sm text-muted-foreground">Carregando dados...</p>
      </div>
    </div>
  )
}

export default function ViewPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ViewContent />
    </Suspense>
  )
}
