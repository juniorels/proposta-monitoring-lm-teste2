'use client'

import type { TransportadoraStats } from '@/lib/nsc-types'
import { pct } from '@/lib/nsc-processor'
import { cn } from '@/lib/utils'

const COLORS = [
  '#f59e0b', '#ef4444', '#3b82f6', '#8b5cf6', '#10b981', 
  '#f97316', '#ec4899', '#06b6d4', '#84cc16'
]

interface RankingCardProps {
  rows: TransportadoraStats[]
  onOpenModal: (transp: string, tab: 'naop' | 'pend') => void
}

export function RankingCard({ rows, onOpenModal }: RankingCardProps) {
  if (rows.length === 0) {
    return (
      <div className="rounded-xl border border-border bg-card p-4">
        <h3 className="text-sm font-semibold text-foreground">Ranking de Transportadoras</h3>
        <p className="mb-4 text-xs text-muted-foreground">Ordenado por quantidade total de NSC</p>
        <div className="py-8 text-center text-sm text-muted-foreground">
          Faca o upload das duas planilhas para gerar o relatório.
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <h3 className="text-sm font-semibold text-foreground">Ranking de Transportadoras</h3>
      <p className="mb-4 text-xs text-muted-foreground">Ordenado por quantidade total de NSC</p>
      
      <div className="space-y-2.5">
        {rows.map((r, i) => {
          const color = COLORS[i % COLORS.length]
          const pendentesRestantes = Math.max(0, r.totalPend - r.novos) // Pendentes que NÃO são "não passei"
          const wV = pct(r.vis, r.total)
          const wN = pct(r.novos, r.total)
          const wP = pct(pendentesRestantes, r.total)
          const pctV = pct(r.vis, r.total)

          return (
            <div
              key={r.transp}
              className="animate-fade-up rounded-lg border border-border p-3 transition-shadow hover:shadow-md"
              style={{ 
                animationDelay: `${i * 0.04}s`,
                borderLeftWidth: '3px',
                borderLeftColor: color 
              }}
            >
              <div className="mb-2 flex flex-wrap items-center gap-2.5">
                <div className="w-5 flex-shrink-0 text-sm font-bold text-muted-foreground">
                  {i + 1}
                </div>
                <div className="min-w-[100px] flex-1 text-sm font-semibold text-foreground">
                  {r.transp}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="nsc">{r.ini} NSC</Badge>
                  <Badge variant="visit">{r.vis} Visitados</Badge>
                  {r.novos > 0 && (
                    <Badge 
                      variant="naop" 
                      clickable 
                      onClick={() => onOpenModal(r.transp, 'naop')}
                    >
                      {r.novos} Não Passei
                    </Badge>
                  )}
                  <Badge 
                    variant="pend" 
                    clickable 
                    onClick={() => onOpenModal(r.transp, 'pend')}
                  >
                    {pendentesRestantes} Pendentes
                  </Badge>
                </div>
              </div>
              
              <div className="mb-2 flex h-1.5 gap-0.5 overflow-hidden rounded">
                <div className="h-full rounded-sm bg-green" style={{ width: `${wV}%` }} />
                <div className="h-full rounded-sm bg-yellow" style={{ width: `${wN}%` }} />
                <div className="h-full rounded-sm bg-red" style={{ width: `${wP}%` }} />
              </div>
              
              <div className="flex flex-wrap gap-4">
                <MetaItem label="NSC Total" value={r.total} />
                <MetaItem label="Visitados" value={r.vis} />
                <MetaItem label="Não Passei" value={r.novos} />
                <MetaItem label="Pendentes" value={pendentesRestantes} />
                <MetaItem 
                  label="% Visita" 
                  value={`${pctV}%`} 
                  valueColor={pctV >= 60 ? 'text-green' : 'text-red'} 
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

interface BadgeProps {
  variant: 'nsc' | 'visit' | 'naop' | 'pend'
  children: React.ReactNode
  clickable?: boolean
  onClick?: () => void
}

function Badge({ variant, children, clickable, onClick }: BadgeProps) {
  const variantClasses = {
    nsc: 'bg-red-100 text-red-600',
    visit: 'bg-green-100 text-green-600',
    naop: 'bg-amber-100 text-amber-600',
    pend: 'bg-orange-100 text-orange-600',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold',
        variantClasses[variant],
        clickable && 'cursor-pointer transition-opacity hover:opacity-80 active:scale-[0.98]'
      )}
      onClick={clickable ? onClick : undefined}
      title={clickable ? 'Ver detalhes' : undefined}
    >
      {children}
    </span>
  )
}

function MetaItem({ 
  label, 
  value, 
  valueColor 
}: { 
  label: string
  value: string | number
  valueColor?: string 
}) {
  return (
    <span className="text-xs text-muted-foreground">
      {label}: <b className={cn('font-semibold text-foreground', valueColor)}>{value}</b>
    </span>
  )
}
