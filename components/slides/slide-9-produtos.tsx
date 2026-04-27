import { Package, Clock, Users, Target, BarChart3, FileText, Settings, AlertTriangle } from "lucide-react"

export default function Slide9Produtos() {
  const produtos = [
    {
      nome: "Dashboard LM End-to-End",
      periodicidade: "Tempo real (atualização diária)",
      audiencia: "Toda a CT + Lideranças",
      impacto: "Visibilidade consolidada",
      icon: BarChart3,
      color: "#3483FA"
    },
    {
      nome: "Scorecard MLP",
      periodicidade: "Quinzenal",
      audiencia: "SRM + MLPs + Lideranças",
      impacto: "Governança e accountability",
      icon: Target,
      color: "#00A650"
    },
    {
      nome: "Relatório de Risco LM",
      periodicidade: "Semanal",
      audiencia: "CT + Roteirização + SVC",
      impacto: "Antecipar riscos da próxima semana",
      icon: AlertTriangle,
      color: "#FF9800"
    },
    {
      nome: "Análise de Custo por MLP",
      periodicidade: "Mensal",
      audiencia: "Sr Mgrs",
      impacto: "Input para renegociação",
      icon: FileText,
      color: "#E91E63"
    },
    {
      nome: "Feedback Loop Roteirização",
      periodicidade: "Quinzenal",
      audiencia: "Roteirização",
      impacto: "Melhoria contínua de rotas",
      icon: Settings,
      color: "#9C27B0"
    },
    {
      nome: "Report do POC (MLB/MLM/MLA)",
      periodicidade: "Durante POC (4 semanas)",
      audiencia: "Governance (Will + Natalia)",
      impacto: "Decisão de escalar ou pausar",
      icon: Package,
      color: "#607D8B"
    }
  ]

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="px-6 sm:px-8 lg:px-12 pt-4 sm:pt-5 lg:pt-8 pb-2 lg:pb-4">
        <div className="flex items-center gap-2 text-[#3483FA] text-[10px] sm:text-xs lg:text-sm font-medium mb-2 lg:mb-3">
          <Package className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>Produtos da Área</span>
        </div>
        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-[#1A1A2E] mb-1 lg:mb-2">
          O que a área entrega — produtos concretos, não só reuniões
        </h2>
        <p className="text-[#666666] text-xs sm:text-sm lg:text-base">
          Times estratégicos entregam produtos. Estes são os nossos.
        </p>
      </div>

      {/* Main Content - Table */}
      <div className="flex-1 px-6 sm:px-8 lg:px-12 py-2 lg:py-4 min-h-0">
        <div className="bg-[#F5F5F5] rounded-lg lg:rounded-xl overflow-hidden h-full flex flex-col">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#1A1A2E] text-white text-[10px] sm:text-xs lg:text-sm font-medium shrink-0">
            <div className="col-span-4 px-2 sm:px-3 lg:px-4 py-2 lg:py-3">PRODUTO</div>
            <div className="col-span-3 px-2 sm:px-3 lg:px-4 py-2 lg:py-3 flex items-center gap-1 lg:gap-2">
              <Clock className="w-3 h-3 lg:w-4 lg:h-4" /> PERIODICIDADE
            </div>
            <div className="col-span-3 px-2 sm:px-3 lg:px-4 py-2 lg:py-3 flex items-center gap-1 lg:gap-2">
              <Users className="w-3 h-3 lg:w-4 lg:h-4" /> AUDIÊNCIA
            </div>
            <div className="col-span-2 px-2 sm:px-3 lg:px-4 py-2 lg:py-3 flex items-center gap-1 lg:gap-2">
              <Target className="w-3 h-3 lg:w-4 lg:h-4" /> IMPACTO
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-[#E0E0E0] flex-1 overflow-auto">
            {produtos.map((produto, index) => (
              <div key={index} className="grid grid-cols-12 text-[10px] sm:text-xs lg:text-sm hover:bg-white transition-colors">
                <div className="col-span-4 px-2 sm:px-3 lg:px-4 py-2 sm:py-2.5 lg:py-3 flex items-center gap-2 lg:gap-3">
                  <div
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${produto.color}15` }}
                  >
                    <produto.icon className="w-3 h-3 lg:w-4 lg:h-4" style={{ color: produto.color }} />
                  </div>
                  <span className="font-medium text-[#333333]">{produto.nome}</span>
                </div>
                <div className="col-span-3 px-2 sm:px-3 lg:px-4 py-2 sm:py-2.5 lg:py-3 flex items-center">
                  <span className="text-[#666666]">{produto.periodicidade}</span>
                </div>
                <div className="col-span-3 px-2 sm:px-3 lg:px-4 py-2 sm:py-2.5 lg:py-3 flex items-center">
                  <span className="text-[#666666]">{produto.audiencia}</span>
                </div>
                <div className="col-span-2 px-2 sm:px-3 lg:px-4 py-2 sm:py-2.5 lg:py-3 flex items-center">
                  <span
                    className="text-[8px] sm:text-[10px] lg:text-xs font-medium px-1.5 lg:px-2 py-0.5 lg:py-1 rounded-full"
                    style={{
                      backgroundColor: `${produto.color}15`,
                      color: produto.color
                    }}
                  >
                    {produto.impacto}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 sm:px-8 lg:px-12 py-2 lg:py-4 bg-[#F5F5F5] border-t border-[#E0E0E0] shrink-0">
        <div className="flex items-center gap-2 lg:gap-3">
          <Package className="w-3 h-3 lg:w-4 lg:h-4 text-[#3483FA]" />
          <p className="text-[#666666] text-[10px] sm:text-xs lg:text-sm">
            Estes produtos substituem as rotinas operacionais atuais. Têm{" "}
            <span className="font-medium text-[#333333]">audiência definida</span>,{" "}
            <span className="font-medium text-[#333333]">frequência definida</span> e{" "}
            <span className="font-medium text-[#333333]">dono definido</span>.
          </p>
        </div>
      </div>
    </div>
  )
}
