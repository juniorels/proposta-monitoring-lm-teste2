'use client'

import { useRef } from 'react'
import { cn } from '@/lib/utils'
import { FileSpreadsheet, Truck } from 'lucide-react'

interface UploadCardProps {
  type: 'nsc' | 'visitas'
  isLoaded: boolean
  fileName: string | null
  onFileSelect: (file: File) => void
}

export function UploadCard({ type, isLoaded, fileName, onFileSelect }: UploadCardProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const config = {
    nsc: {
      icon: FileSpreadsheet,
      title: 'Planilha de NSC do dia',
      subtitle: 'Lista de pontos NSC do dia',
    },
    visitas: {
      icon: Truck,
      title: 'Relatório de Coletas (Visitas do dia)',
      subtitle: 'Ocorrências registradas no dia',
    },
  }

  const { icon: Icon, title, subtitle } = config[type]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      onFileSelect(file)
    }
  }

  return (
    <div
      className={cn(
        'relative flex items-center gap-3 rounded-lg border-2 border-dashed bg-card p-3 transition-colors cursor-pointer hover:border-blue',
        isLoaded && 'border-solid border-green'
      )}
      onClick={() => inputRef.current?.click()}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".csv"
        onChange={handleChange}
        className="sr-only"
      />
      
      <div className="text-muted-foreground">
        <Icon className="h-6 w-6" />
      </div>
      
      <div className="flex flex-col">
        <span className="text-xs font-semibold text-foreground">{title}</span>
        {isLoaded && fileName ? (
          <span className="text-xs font-medium text-green">{fileName}</span>
        ) : (
          <span className="text-xs text-muted-foreground">{subtitle}</span>
        )}
      </div>
    </div>
  )
}
