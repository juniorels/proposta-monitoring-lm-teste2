'use client'

import { useState, useMemo } from 'react'
import { X, Download, ChevronDown, ChevronRight } from 'lucide-react'
import type { PrioridadeStats, PrioridadeDetail } from '@/lib/nsc-types'

interface PrioridadeModalProps {
  isOpen: boolean
  onClose: () => void
  prioridade: PrioridadeStats | null
}

export function PrioridadeModal({ isOpen, onClose, prioridade }: PrioridadeModalProps) {
  const [expandedClusters, setExpandedClusters] = useState<Set<string>>(new Set())
  const [filterStatus, setFilterStatus] = useState<'todos' | 'visitado' | 'pendente' | 'naoPassei'>('todos')

  // Agrupar detalhes por cluster
  const clusterGroups = useMemo(() => {
    if (!prioridade) return {}
    
    const groups: Record<string, PrioridadeDetail[]> = {}
    
    prioridade.detalhes
      .filter(d => filterStatus === 'todos' || d.status === filterStatus)
      .forEach(detalhe => {
        if (!groups[detalhe.cluster]) {
          groups[detalhe.cluster] = []
        }
        groups[detalhe.cluster].push(detalhe)
      })
    
    // Ordenar clusters por quantidade
    return Object.fromEntries(
      Object.entries(groups).sort((a, b) => b[1].length - a[1].length)
    )
  }, [prioridade, filterStatus])

  const toggleCluster = (cluster: string) => {
    setExpandedClusters(prev => {
      const newSet = new Set(prev)
      if (newSet.has(cluster)) {
        newSet.delete(cluster)
      } else {
        newSet.add(cluster)
      }
      return newSet
    })
  }

  const expandAll = () => {
    setExpandedClusters(new Set(Object.keys(clusterGroups)))
  }

  const collapseAll = () => {
    setExpandedClusters(new Set())
  }

  const exportCSV = () => {
    if (!prioridade) return
    
    const filteredDetails = prioridade.detalhes.filter(
      d => filterStatus === 'todos' || d.status === filterStatus
    )
    
    const headers = ['Cluster', 'Rota', 'ID', 'Transportadora', 'Status']
    const rows = filteredDetails.map(d => [
      d.cluster,
      d.rota,
      d.id,
      d.transportadora,
      d.status === 'visitado' ? 'Visitado' : d.status === 'naoPassei' ? 'Não Passei' : 'Pendente'
    ])
    
    const csv = [headers, ...rows].map(r => r.join(';')).join('\n')
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `prioridade_${prioridade.prioridade.replace(/\s+/g, '_')}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  if (!isOpen || !prioridade) return null

  const statusColors = {
    visitado: 'bg-green/20 text-green',
    pendente: 'bg-red/20 text-red',
    naoPassei: 'bg-yellow/20 text-yellow'
  }

  const statusLabels = {
    visitado: 'Visitado',
    pendente: 'Pendente',
    naoPassei: 'Não Passei'
  }

  const totalFiltered = Object.values(clusterGroups).reduce((sum, arr) => sum + arr.length, 0)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-xl border border-border bg-card shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border bg-muted/30 px-5 py-4">
          <div>
            <h2 className="text-lg font-bold text-foreground">{prioridade.prioridade}</h2>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {totalFiltered} NSCs agrupados por cluster
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-muted-foreground hover:bg-muted"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-3 border-b border-border p-4">
          <div className="rounded-lg bg-muted/50 p-3 text-center">
            <div className="text-xl font-bold text-foreground">{prioridade.total}</div>
            <div className="text-[10px] text-muted-foreground">Total</div>
          </div>
          <div className="rounded-lg bg-green/10 p-3 text-center">
            <div className="text-xl font-bold text-green">{prioridade.visitados}</div>
            <div className="text-[10px] text-muted-foreground">Visitados</div>
          </div>
          <div className="rounded-lg bg-yellow/10 p-3 text-center">
            <div className="text-xl font-bold text-yellow">{prioridade.naoPassei}</div>
            <div className="text-[10px] text-muted-foreground">Não Passei</div>
          </div>
          <div className="rounded-lg bg-red/10 p-3 text-center">
            <div className="text-xl font-bold text-red">{prioridade.pendentes}</div>
            <div className="text-[10px] text-muted-foreground">Pendentes</div>
          </div>
        </div>

        {/* Filters & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-4">
          <div className="flex flex-wrap gap-2">
            {(['todos', 'visitado', 'pendente', 'naoPassei'] as const).map(status => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  filterStatus === status
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {status === 'todos' ? 'Todos' : statusLabels[status]}
              </button>
            ))}
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={expandAll}
              className="rounded-md bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted/80"
            >
              Expandir Todos
            </button>
            <button
              onClick={collapseAll}
              className="rounded-md bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted/80"
            >
              Recolher Todos
            </button>
            <button
              onClick={exportCSV}
              className="flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90"
            >
              <Download className="h-3.5 w-3.5" />
              Exportar CSV
            </button>
          </div>
        </div>

        {/* Cluster List */}
        <div className="max-h-[50vh] overflow-y-auto p-4">
          {Object.keys(clusterGroups).length === 0 ? (
            <div className="py-8 text-center text-sm text-muted-foreground">
              Nenhum registro encontrado com o filtro selecionado.
            </div>
          ) : (
            <div className="space-y-2">
              {Object.entries(clusterGroups).map(([cluster, detalhes]) => {
                const isExpanded = expandedClusters.has(cluster)
                const visitados = detalhes.filter(d => d.status === 'visitado').length
                const pendentes = detalhes.filter(d => d.status === 'pendente').length
                const naoPassei = detalhes.filter(d => d.status === 'naoPassei').length

                return (
                  <div key={cluster} className="rounded-lg border border-border overflow-hidden">
                    {/* Cluster Header */}
                    <button
                      onClick={() => toggleCluster(cluster)}
                      className="flex w-full items-center justify-between bg-muted/30 px-4 py-3 text-left hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {isExpanded ? (
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        )}
                        <span className="font-semibold text-foreground">{cluster}</span>
                        <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary">
                          {detalhes.length}
                        </span>
                      </div>
                      <div className="flex gap-2 text-xs">
                        {visitados > 0 && (
                          <span className="rounded bg-green/20 px-2 py-0.5 text-green">{visitados} vis</span>
                        )}
                        {naoPassei > 0 && (
                          <span className="rounded bg-yellow/20 px-2 py-0.5 text-yellow">{naoPassei} np</span>
                        )}
                        {pendentes > 0 && (
                          <span className="rounded bg-red/20 px-2 py-0.5 text-red">{pendentes} pend</span>
                        )}
                      </div>
                    </button>

                    {/* Cluster Details */}
                    {isExpanded && (
                      <div className="border-t border-border">
                        <table className="w-full text-xs">
                          <thead className="bg-muted/20">
                            <tr>
                              <th className="px-4 py-2 text-left font-medium text-muted-foreground">Rota</th>
                              <th className="px-4 py-2 text-left font-medium text-muted-foreground">ID</th>
                              <th className="px-4 py-2 text-left font-medium text-muted-foreground">Transportadora</th>
                              <th className="px-4 py-2 text-left font-medium text-muted-foreground">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border">
                            {detalhes.map((d, i) => (
                              <tr key={`${d.id}-${i}`} className="hover:bg-muted/20">
                                <td className="px-4 py-2 font-medium text-foreground">{d.rota || '-'}</td>
                                <td className="px-4 py-2 text-muted-foreground">{d.id}</td>
                                <td className="px-4 py-2 text-muted-foreground">{d.transportadora || '-'}</td>
                                <td className="px-4 py-2">
                                  <span className={`rounded px-2 py-0.5 text-[10px] font-medium ${statusColors[d.status]}`}>
                                    {statusLabels[d.status]}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
