'use client'

import { useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import type { TransportadoraStats, PrioridadeStats } from '@/lib/nsc-types'
import { pct } from '@/lib/nsc-processor'

const COLORS = {
  visitados: '#22c55e',
  naoPassei: '#eab308',
  pendentes: '#ef4444',
}

const PRIORITY_COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f97316', '#06b6d4', '#84cc16']

interface TransportadoraChartProps {
  rows: TransportadoraStats[]
  title: string
}

export function TransportadoraBarChart({ rows, title }: TransportadoraChartProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const data = rows.slice(0, 10).map(r => ({
    name: r.transp.length > 12 ? r.transp.slice(0, 12) + '...' : r.transp,
    fullName: r.transp,
    Visitados: r.vis,
    'Não Passei': r.novos,
    Pendentes: r.pendL,
    total: r.total,
    pctVisita: pct(r.vis, r.total),
  }))

  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <h3 className="mb-1 text-sm font-semibold text-foreground">{title}</h3>
      <p className="mb-4 text-xs text-muted-foreground">Top 10 transportadoras por volume</p>
      
      {rows.length === 0 ? (
        <div className="flex h-64 items-center justify-center text-sm text-muted-foreground">
          Aguardando dados...
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
            onMouseMove={(state) => {
              if (state?.activeTooltipIndex !== undefined) {
                setActiveIndex(state.activeTooltipIndex)
              }
            }}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis type="number" tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} />
            <YAxis 
              dataKey="name" 
              type="category" 
              tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
              width={75}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                fontSize: '12px',
              }}
              labelStyle={{ fontWeight: 'bold', marginBottom: '4px' }}
              formatter={(value: number, name: string) => [value, name]}
              labelFormatter={(_, payload) => payload[0]?.payload?.fullName || ''}
            />
            <Legend 
              wrapperStyle={{ fontSize: '11px' }}
              iconType="square"
            />
            <Bar 
              dataKey="Visitados" 
              stackId="a" 
              fill={COLORS.visitados}
              radius={[0, 0, 0, 0]}
            />
            <Bar 
              dataKey="Não Passei" 
              stackId="a" 
              fill={COLORS.naoPassei}
            />
            <Bar 
              dataKey="Pendentes" 
              stackId="a" 
              fill={COLORS.pendentes}
              radius={[0, 4, 4, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}

interface PrioridadeChartProps {
  prioridades: PrioridadeStats[]
  onPrioridadeClick?: (prioridade: PrioridadeStats) => void
}

export function PrioridadePieChart({ prioridades, onPrioridadeClick }: PrioridadeChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <h3 className="mb-1 text-sm font-semibold text-foreground">Distribuição por Prioridade</h3>
      <p className="mb-4 text-xs text-muted-foreground">Clique para ver detalhes por cluster</p>
      
      {prioridades.length === 0 ? (
        <div className="flex h-32 items-center justify-center text-sm text-muted-foreground">
          Aguardando dados...
        </div>
      ) : (
        <div className="flex flex-wrap gap-2">
          {prioridades.map((p, index) => (
            <button
              key={p.prioridade}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 transition-all ${
                hoveredIndex === index 
                  ? 'border-primary bg-primary/5 shadow-md' 
                  : 'border-border bg-card hover:bg-muted/50 hover:shadow-sm'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => onPrioridadeClick?.(p)}
            >
              <div 
                className="h-3 w-3 rounded-full" 
                style={{ backgroundColor: PRIORITY_COLORS[index % PRIORITY_COLORS.length] }}
              />
              <span className="text-xs font-medium text-foreground">{p.prioridade}</span>
              <span className="text-xs text-muted-foreground">({p.total})</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function VisitaPercentageChart({ rows }: TransportadoraChartProps) {
  const data = rows.slice(0, 10).map(r => ({
    name: r.transp.length > 12 ? r.transp.slice(0, 12) + '...' : r.transp,
    fullName: r.transp,
    '% Visita': pct(r.vis, r.total),
    '% Sem Visita': 100 - pct(r.vis, r.total),
    visitados: r.vis,
    semVisita: r.total - r.vis,
  }))

  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <h3 className="mb-1 text-sm font-semibold text-foreground">Taxa de Visita por Transportadora</h3>
      <p className="mb-4 text-xs text-muted-foreground">Percentual de visitas realizadas</p>
      
      {rows.length === 0 ? (
        <div className="flex h-64 items-center justify-center text-sm text-muted-foreground">
          Aguardando dados...
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              type="number" 
              domain={[0, 100]}
              tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
              tickFormatter={(value) => `${value}%`}
            />
            <YAxis 
              dataKey="name" 
              type="category" 
              tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
              width={75}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                fontSize: '12px',
              }}
              formatter={(value: number) => [`${value}%`, '']}
              labelFormatter={(_, payload) => payload[0]?.payload?.fullName || ''}
            />
            <Legend 
              wrapperStyle={{ fontSize: '11px' }}
              iconType="square"
            />
            <Bar 
              dataKey="% Visita" 
              stackId="a" 
              fill={COLORS.visitados}
              radius={[0, 0, 0, 0]}
            />
            <Bar 
              dataKey="% Sem Visita" 
              stackId="a" 
              fill={COLORS.pendentes}
              radius={[0, 4, 4, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}
