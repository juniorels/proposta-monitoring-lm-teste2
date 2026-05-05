'use client'

import { useMemo } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Download, Wrench, Store } from 'lucide-react'
import type { OcorrenciasRoutes, OcorrenciaDetail } from '@/lib/nsc-types'
import { cn } from '@/lib/utils'

interface OcorrenciasModalProps {
  isOpen: boolean
  onClose: () => void
  type: 'operacional' | 'comercial'
  ocorrenciasRoutes: OcorrenciasRoutes
}

export function OcorrenciasModal({
  isOpen,
  onClose,
  type,
  ocorrenciasRoutes,
}: OcorrenciasModalProps) {
  const isOperacional = type === 'operacional'
  
  const allData = useMemo(() => {
    const result: OcorrenciaDetail[] = []
    Object.values(ocorrenciasRoutes).forEach(items => {
      result.push(...items)
    })
    return result.sort((a, b) => a.transportadora.localeCompare(b.transportadora))
  }, [ocorrenciasRoutes])

  const transportadorasSummary = useMemo(() => {
    const summary: Record<string, number> = {}
    allData.forEach(item => {
      summary[item.transportadora] = (summary[item.transportadora] || 0) + 1
    })
    return Object.entries(summary)
      .sort((a, b) => b[1] - a[1])
      .map(([transp, count]) => ({ transp, count }))
  }, [allData])

  const handleExport = () => {
    const headers = ['#', 'Transportadora', 'Rota', 'Motivo', 'Parada', 'ID Parada']
    const rows = allData.map((r, i) => [
      i + 1,
      r.transportadora,
      r.rota || '',
      r.motivo || '',
      r.parada || '',
      r.idParada || '',
    ])

    const filename = `ocorrencias_${type}_${new Date().toISOString().split('T')[0]}.csv`

    const csv = [headers, ...rows]
      .map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(','))
      .join('\n')
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = filename
    a.click()
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[85vh] w-full max-w-4xl overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {isOperacional ? (
              <Wrench className="h-5 w-5 text-orange" />
            ) : (
              <Store className="h-5 w-5 text-purple" />
            )}
            <span>
              Ocorrências {isOperacional ? 'Operacionais' : 'Comerciais'}
            </span>
          </DialogTitle>
          <p className="text-xs text-muted-foreground">
            {allData.length} ocorrência(s) total
          </p>
        </DialogHeader>

        {/* Summary badges */}
        <div className="flex flex-wrap gap-2 py-2 border-b">
          {transportadorasSummary.map(({ transp, count }) => (
            <span
              key={transp}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium',
                isOperacional
                  ? 'bg-orange/10 text-orange'
                  : 'bg-purple/10 text-purple'
              )}
            >
              {transp}
              <span className={cn(
                'rounded-full px-1.5 py-0.5 text-[10px] font-bold',
                isOperacional ? 'bg-orange text-white' : 'bg-purple text-white'
              )}>
                {count}
              </span>
            </span>
          ))}
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto">
          {allData.length === 0 ? (
            <div className="py-8 text-center text-sm text-muted-foreground">
              Nenhuma ocorrência registrada.
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-10">#</TableHead>
                  <TableHead>Transportadora</TableHead>
                  <TableHead>Rota</TableHead>
                  <TableHead>Motivo</TableHead>
                  <TableHead>Parada</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allData.map((r, i) => (
                  <TableRow key={i}>
                    <TableCell className="text-muted-foreground">{i + 1}</TableCell>
                    <TableCell className="font-medium">{r.transportadora}</TableCell>
                    <TableCell>{r.rota || '—'}</TableCell>
                    <TableCell>
                      <MotivoTag motivo={r.motivo} isOperacional={isOperacional} />
                    </TableCell>
                    <TableCell className="text-muted-foreground">{r.parada || '—'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>

        <div className="flex justify-end border-t pt-3">
          <Button 
            onClick={handleExport} 
            className={cn(
              isOperacional ? 'bg-orange hover:bg-orange/90' : 'bg-purple hover:bg-purple/90'
            )}
          >
            <Download className="mr-1.5 h-4 w-4" />
            Exportar planilha
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function MotivoTag({ motivo, isOperacional }: { motivo: string; isOperacional: boolean }) {
  return (
    <span
      className={cn(
        'inline-block rounded px-2 py-0.5 text-[10px] font-medium whitespace-nowrap',
        isOperacional
          ? 'bg-orange/10 text-orange'
          : 'bg-purple/10 text-purple'
      )}
    >
      {motivo}
    </span>
  )
}
