'use client'

import { useState } from 'react'
import { AlertTriangle } from 'lucide-react'
import type { NaoPassouRoutes, RouteDetail } from '@/lib/nsc-types'

interface LossTreeProps {
  naoPassouRoutes: NaoPassouRoutes
  totalNaoPassou: number
}

export function LossTree({ naoPassouRoutes, totalNaoPassou }: LossTreeProps) {
  const [expandedTransps, setExpandedTransps] = useState<Set<string>>(new Set())
  const [expandedClusters, setExpandedClusters] = useState<Set<string>>(new Set())

  // Ordenar transportadoras por quantidade de ocorrências (maior primeiro)
  const sortedTransps = Object.entries(naoPassouRoutes)
    .map(([transp, routes]) => {
      // Agrupar rotas por cluster
      const routesByCluster: Record<string, RouteDetail[]> = {}
      routes.forEach(route => {
        const parts = route.rota?.split('_') || []
        const cluster = parts.length >= 2 ? parts[1] : 'Outros'
        if (!routesByCluster[cluster]) routesByCluster[cluster] = []
        routesByCluster[cluster].push(route)
      })
      return { transp, routes, count: routes.length, clusters: routesByCluster }
    })
    .sort((a, b) => b.count - a.count)

  const toggleTransp = (transp: string) => {
    const newExpanded = new Set(expandedTransps)
    if (newExpanded.has(transp)) {
      newExpanded.delete(transp)
    } else {
      newExpanded.add(transp)
    }
    setExpandedTransps(newExpanded)
  }

  const toggleCluster = (key: string) => {
    const newExpanded = new Set(expandedClusters)
    if (newExpanded.has(key)) {
      newExpanded.delete(key)
    } else {
      newExpanded.add(key)
    }
    setExpandedClusters(newExpanded)
  }

  if (totalNaoPassou === 0) {
    return (
      <div className="rounded-xl border border-border bg-card p-4">
        <h3 className="mb-1 text-sm font-semibold text-foreground flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-yellow" />
          Árvore de Perda - Não Passei pelo Endereço
        </h3>
        <div className="mt-4 flex h-24 items-center justify-center text-sm text-muted-foreground">
          Nenhuma ocorrência de &quot;Não Passei pelo Endereço&quot;
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-border bg-card p-4 overflow-x-auto">
      <h3 className="mb-4 text-sm font-semibold text-foreground flex items-center gap-2">
        <AlertTriangle className="h-4 w-4 text-yellow" />
        Árvore de Perda - Não Passei pelo Endereço
      </h3>

      {/* Mind Map Container */}
      <div className="flex items-start gap-0 min-w-max">
        {/* Nó Central */}
        <div className="flex flex-col items-center">
          <div className="rounded-xl bg-yellow px-4 py-3 text-center shadow-lg">
            <div className="text-xs font-medium text-black/70">Total</div>
            <div className="text-2xl font-bold text-black">{totalNaoPassou}</div>
            <div className="text-[10px] text-black/60">Não Passei</div>
          </div>
        </div>

        {/* Linha conectora principal */}
        <div className="flex items-center h-full self-center">
          <div className="w-8 h-0.5 bg-yellow" />
        </div>

        {/* Transportadoras */}
        <div className="flex flex-col gap-2">
          {sortedTransps.map(({ transp, count, clusters }, transpIdx) => {
            const isExpanded = expandedTransps.has(transp)
            const percentage = totalNaoPassou > 0 ? ((count / totalNaoPassou) * 100).toFixed(0) : 0
            const sortedClusters = Object.entries(clusters).sort((a, b) => b[1].length - a[1].length)

            return (
              <div key={transp} className="flex items-start gap-0">
                {/* Linha vertical + horizontal */}
                <div className="flex items-center">
                  <div 
                    className="w-4 border-l-2 border-b-2 border-yellow/50 rounded-bl-lg"
                    style={{ height: transpIdx === 0 ? '12px' : '24px' }}
                  />
                </div>

                {/* Nó da Transportadora */}
                <button
                  onClick={() => toggleTransp(transp)}
                  className={`flex items-center gap-2 rounded-lg border-2 px-3 py-2 transition-all hover:shadow-md ${
                    isExpanded 
                      ? 'border-orange bg-orange/10' 
                      : 'border-orange/50 bg-card hover:border-orange'
                  }`}
                >
                  <div className="h-3 w-3 rounded-full bg-orange" />
                  <span className="text-xs font-medium text-foreground whitespace-nowrap">
                    {transp.length > 15 ? transp.slice(0, 15) + '...' : transp}
                  </span>
                  <span className="rounded-full bg-orange/20 px-2 py-0.5 text-xs font-bold text-orange">
                    {count}
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    ({percentage}%)
                  </span>
                </button>

                {/* Clusters expandidos */}
                {isExpanded && sortedClusters.length > 0 && (
                  <>
                    <div className="w-4 h-0.5 bg-orange/50 self-center" />
                    
                    <div className="flex flex-col gap-1">
                      {sortedClusters.map(([cluster, clusterRoutes], clusterIdx) => {
                        const clusterKey = `${transp}-${cluster}`
                        const isClusterExpanded = expandedClusters.has(clusterKey)
                        const clusterPct = count > 0 ? ((clusterRoutes.length / count) * 100).toFixed(0) : 0

                        return (
                          <div key={cluster} className="flex items-start gap-0">
                            {/* Linha do cluster */}
                            <div className="flex items-center">
                              <div 
                                className="w-3 border-l-2 border-b-2 border-orange/30 rounded-bl-md"
                                style={{ height: clusterIdx === 0 ? '8px' : '16px' }}
                              />
                            </div>

                            {/* Nó do Cluster */}
                            <button
                              onClick={() => toggleCluster(clusterKey)}
                              className={`flex items-center gap-1.5 rounded-md border px-2 py-1 transition-all ${
                                isClusterExpanded 
                                  ? 'border-blue bg-blue/10' 
                                  : 'border-blue/50 bg-card hover:border-blue'
                              }`}
                            >
                              <div className="h-2 w-2 rounded-full bg-blue" />
                              <span className="text-[11px] font-medium text-foreground">{cluster}</span>
                              <span className="rounded bg-blue/20 px-1.5 py-0.5 text-[10px] font-bold text-blue">
                                {clusterRoutes.length}
                              </span>
                              <span className="text-[9px] text-muted-foreground">
                                ({clusterPct}%)
                              </span>
                            </button>

                            {/* Rotas expandidas */}
                            {isClusterExpanded && (
                              <>
                                <div className="w-3 h-0.5 bg-blue/30 self-center" />
                                
                                <div className="flex flex-wrap gap-1 max-w-xs">
                                  {clusterRoutes.map((route, idx) => (
                                    <span 
                                      key={idx}
                                      className="rounded bg-muted px-1.5 py-0.5 text-[9px] text-muted-foreground border border-border"
                                    >
                                      {route.rota}
                                    </span>
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Legenda */}
      <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-border pt-3">
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full bg-yellow" />
          <span className="text-[10px] text-muted-foreground">Total</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full bg-orange" />
          <span className="text-[10px] text-muted-foreground">Transportadora</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full bg-blue" />
          <span className="text-[10px] text-muted-foreground">Cluster</span>
        </div>
        <span className="text-[10px] text-muted-foreground ml-auto">
          Clique para expandir/recolher
        </span>
      </div>
    </div>
  )
}
