'use client'

import { useMemo } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Download, AlertTriangle, CircleAlert } from 'lucide-react'
import type { NaoPassouRoutes, PendentesRoutes, RouteDetail } from '@/lib/nsc-types'
import { cn } from '@/lib/utils'

interface DetailModalProps {
  isOpen: boolean
  onClose: () => void
  transp: string
  activeTab: 'naop' | 'pend'
  onTabChange: (tab: 'naop' | 'pend') => void
  naoPassouRoutes: NaoPassouRoutes
  pendentesRoutes: PendentesRoutes
}

export function DetailModal({
  isOpen,
  onClose,
  transp,
  activeTab,
  onTabChange,
  naoPassouRoutes,
  pendentesRoutes,
}: DetailModalProps) {
  const naoPassouData = useMemo(() => {
    return (naoPassouRoutes[transp] || [])
      .slice()
      .sort((a, b) => (a.rota || '').localeCompare(b.rota || ''))
  }, [naoPassouRoutes, transp])

  const pendentesData = useMemo(() => {
    return (pendentesRoutes[transp] || [])
      .slice()
      .sort((a, b) => (a.rota || '').localeCompare(b.rota || ''))
  }, [pendentesRoutes, transp])

  const handleExport = () => {
    let headers: string[]
    let rows: (string | number)[][]
    let filename: string

    if (activeTab === 'naop') {
      headers = ['#', 'Rota', 'Parada', 'Origem']
      rows = naoPassouData.map((r, i) => [
        i + 1,
        r.rota || '',
        r.parada || '',
        r.origem === 'novo' ? 'Novo NSC' : 'Na Lista',
      ])
      filename = `nao_passei_${transp.replace(/\s+/g, '_')}.csv`
    } else {
      headers = ['#', 'Rota', 'ID Parada']
      rows = pendentesData.map((r, i) => [i + 1, r.rota || '', r.id || ''])
      filename = `pendentes_${transp.replace(/\s+/g, '_')}.csv`
    }

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
      <DialogContent className="max-h-[85vh] w-full max-w-2xl overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>{transp}</DialogTitle>
          <p className="text-xs text-muted-foreground">
            {activeTab === 'naop'
              ? `${naoPassouData.length} ocorrência(s)`
              : `${pendentesData.length} pendente(s)`}
          </p>
        </DialogHeader>

        <Tabs
          value={activeTab}
          onValueChange={(v) => onTabChange(v as 'naop' | 'pend')}
          className="flex flex-col flex-1 overflow-hidden"
        >
          <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
            <TabsTrigger
              value="naop"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-yellow data-[state=active]:bg-transparent"
            >
              <AlertTriangle className="mr-1.5 h-3.5 w-3.5" />
              Não Passei ({naoPassouData.length})
            </TabsTrigger>
            <TabsTrigger
              value="pend"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-red data-[state=active]:bg-transparent"
            >
              <CircleAlert className="mr-1.5 h-3.5 w-3.5" />
              Pendentes ({pendentesData.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="naop" className="flex-1 overflow-auto mt-0">
            <NaoPassouTable data={naoPassouData} />
          </TabsContent>

          <TabsContent value="pend" className="flex-1 overflow-auto mt-0">
            <PendentesTable data={pendentesData} />
          </TabsContent>
        </Tabs>

        <div className="flex justify-end border-t pt-3">
          <Button onClick={handleExport} className="bg-green hover:bg-green/90">
            <Download className="mr-1.5 h-4 w-4" />
            Exportar planilha
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function NaoPassouTable({ data }: { data: RouteDetail[] }) {
  if (data.length === 0) {
    return (
      <div className="py-8 text-center text-sm text-muted-foreground">
        Nenhuma ocorrência.
      </div>
    )
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-10">#</TableHead>
          <TableHead>Rota</TableHead>
          <TableHead>Parada</TableHead>
          <TableHead>Origem</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((r, i) => (
          <TableRow key={i}>
            <TableCell className="text-muted-foreground">{i + 1}</TableCell>
            <TableCell className="font-medium">{r.rota || '—'}</TableCell>
            <TableCell className="text-muted-foreground">{r.parada || '—'}</TableCell>
            <TableCell>
              <OrigemTag origem={r.origem} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

function PendentesTable({ data }: { data: RouteDetail[] }) {
  if (data.length === 0) {
    return (
      <div className="py-8 text-center text-sm text-muted-foreground">
        Nenhum pendente.
      </div>
    )
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-10">#</TableHead>
          <TableHead>Rota</TableHead>
          <TableHead>ID Parada</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((r, i) => (
          <TableRow key={i}>
            <TableCell className="text-muted-foreground">{i + 1}</TableCell>
            <TableCell className="font-medium">{r.rota || '—'}</TableCell>
            <TableCell className="text-muted-foreground">{r.id || '—'}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

function OrigemTag({ origem }: { origem?: 'novo' | 'lista' }) {
  return (
    <span
      className={cn(
        'inline-block rounded px-2 py-0.5 text-[10px] font-semibold',
        origem === 'novo'
          ? 'bg-amber-100 text-amber-600'
          : 'bg-red-100 text-red-600'
      )}
    >
      {origem === 'novo' ? 'Novo NSC' : 'Na Lista'}
    </span>
  )
}
