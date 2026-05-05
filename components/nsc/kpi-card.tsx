import { cn } from '@/lib/utils'
import { Package, CheckCircle, AlertTriangle, CircleAlert, BarChart3, XCircle, Wrench, Store } from 'lucide-react'

interface KPICardProps {
  type: 'total' | 'visit' | 'naop' | 'pend' | 'pct' | 'sem' | 'ocorr_op' | 'ocorr_com'
  value: string | number
  onClick?: () => void
}

const kpiConfig = {
  total: {
    icon: Package,
    label: 'Total NSC',
    subtitle: 'Pontos da semana',
    valueClass: 'text-foreground',
  },
  visit: {
    icon: CheckCircle,
    label: 'Visitados',
    subtitle: 'Coletas concretizadas',
    valueClass: 'text-green',
  },
  naop: {
    icon: AlertTriangle,
    label: 'Não Passei',
    subtitle: 'Coletas em falta',
    valueClass: 'text-yellow',
  },
  pend: {
    icon: CircleAlert,
    label: 'Pendentes',
    subtitle: 'Pontos ainda abertos',
    valueClass: 'text-red',
  },
  pct: {
    icon: BarChart3,
    label: '% Visita',
    subtitle: 'Taxa de visita',
    valueClass: 'text-green',
    smallValue: true,
  },
  sem: {
    icon: XCircle,
    label: '% Sem Visita',
    subtitle: 'Taxa de falta',
    valueClass: 'text-red',
    smallValue: true,
  },
  ocorr_op: {
    icon: Wrench,
    label: 'Ocorr. Operacional',
    subtitle: 'Veículo/Motorista',
    valueClass: 'text-orange',
  },
  ocorr_com: {
    icon: Store,
    label: 'Ocorr. Comercial',
    subtitle: 'Vendedor/Local',
    valueClass: 'text-purple',
  },
}

export function KPICard({ type, value, onClick }: KPICardProps) {
  const config = kpiConfig[type]
  const Icon = config.icon
  const isClickable = !!onClick

  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-lg border border-border bg-card p-3.5",
        isClickable && "cursor-pointer transition-all hover:border-primary/50 hover:shadow-md"
      )}
      onClick={onClick}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={isClickable ? (e) => e.key === 'Enter' && onClick() : undefined}
    >
      <div className="absolute top-2.5 right-3 text-muted-foreground/40">
        <Icon className="h-4 w-4" />
      </div>
      
      <div className="mb-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        {config.label}
      </div>
      
      <div className={cn(
        'font-bold leading-none',
        config.valueClass,
        'smallValue' in config && config.smallValue ? 'text-xl' : 'text-2xl'
      )}>
        {value}
      </div>
      
      <div className="mt-1 text-[10px] text-muted-foreground">
        {config.subtitle}
      </div>

      {isClickable && (
        <div className="mt-2 text-[9px] text-muted-foreground/70">
          Clique para ver detalhes
        </div>
      )}
    </div>
  )
}
