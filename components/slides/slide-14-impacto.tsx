import { TrendingUp, Users, Settings, Target, DollarSign, AlertTriangle, BarChart3 } from "lucide-react"

export default function Slide14Impacto() {
  const alavancas = [
    {
      alavanca: "Delegação operacional aos MLPs (via POC)",
      estimativa: "Liberação de HC da CT para funções estratégicas",
      comoMedir: "Headcount antes vs depois",
      icon: Users,
      color: "#3483FA"
    },
    {
      alavanca: "Feedback loop com Roteirização",
      estimativa: "Redução de rotas cronicamente problemáticas",
      comoMedir: "% rotas com alerta sistêmico recorrente",
      icon: Settings,
      color: "#FF9800"
    },
    {
      alavanca: "Scorecard + governança ativa de MLPs",
      estimativa: "Redução na taxa de insucesso",
      comoMedir: "Taxa de insucesso por MLP",
      icon: Target,
      color: "#00A650"
    },
    {
      alavanca: "Alocação de volume baseada em dados",
      estimativa: "Redução no custo médio/entrega",
      comoMedir: "Custo por entrega por MLP",
      icon: DollarSign,
      color: "#E91E63"
    },
    {
      alavanca: "Antecipação de crises de MLPs",
      estimativa: "Redução de custo emergencial",
      comoMedir: "Eventos de ruptura por mês",
      icon: AlertTriangle,
      color: "#9C27B0"
    }
  ]

  return (
    <div className="w-full h-full bg-[#FFE600] flex flex-col relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-5 lg:top-10 right-5 lg:right-10 w-20 lg:w-40 h-20 lg:h-40 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 lg:bottom-20 left-5 lg:left-10 w-16 lg:w-32 h-16 lg:h-32 bg-white/10 rounded-full blur-2xl" />

      {/* Header */}
      <div className="px-6 sm:px-8 lg:px-12 pt-4 sm:pt-5 lg:pt-8 pb-2 lg:pb-4 relative z-10">
        <div className="flex items-center gap-2 text-[#1A1A2E]/70 text-[10px] sm:text-xs lg:text-sm font-medium mb-2 lg:mb-3">
          <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>Impacto Esperado</span>
        </div>
        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-[#1A1A2E] mb-1 lg:mb-2">
          Por que investir nessa área? Porque o retorno é mensurável
        </h2>
        <p className="text-[#333333] text-xs sm:text-sm lg:text-base xl:text-lg">
          Cada frente de atuação tem uma alavanca de redução de custo ou ganho de DS
        </p>
      </div>

      {/* Main Content - Impact Table */}
      <div className="flex-1 px-6 sm:px-8 lg:px-12 py-2 lg:py-4 relative z-10 min-h-0">
        <div className="bg-white rounded-lg lg:rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#1A1A2E] text-white text-[10px] sm:text-xs lg:text-sm font-medium shrink-0">
            <div className="col-span-5 px-2 sm:px-3 lg:px-4 py-2 lg:py-3">ALAVANCA</div>
            <div className="col-span-4 px-2 sm:px-3 lg:px-4 py-2 lg:py-3">ESTIMATIVA</div>
            <div className="col-span-3 px-2 sm:px-3 lg:px-4 py-2 lg:py-3 flex items-center gap-1 lg:gap-2">
              <BarChart3 className="w-3 h-3 lg:w-4 lg:h-4" /> COMO MEDIR
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-[#E0E0E0] flex-1 overflow-auto">
            {alavancas.map((item, index) => (
              <div key={index} className="grid grid-cols-12 text-[10px] sm:text-xs lg:text-sm hover:bg-[#F5F5F5] transition-colors">
                <div className="col-span-5 px-2 sm:px-3 lg:px-4 py-2 sm:py-2.5 lg:py-4 flex items-center gap-2 lg:gap-3">
                  <div
                    className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" style={{ color: item.color }} />
                  </div>
                  <span className="font-medium text-[#333333]">{item.alavanca}</span>
                </div>
                <div className="col-span-4 px-2 sm:px-3 lg:px-4 py-2 sm:py-2.5 lg:py-4 flex items-center">
                  <span
                    className="text-[8px] sm:text-[10px] lg:text-sm font-semibold px-1.5 sm:px-2 lg:px-3 py-0.5 sm:py-1 lg:py-1.5 rounded-lg"
                    style={{
                      backgroundColor: `${item.color}15`,
                      color: item.color
                    }}
                  >
                    {item.estimativa}
                  </span>
                </div>
                <div className="col-span-3 px-2 sm:px-3 lg:px-4 py-2 sm:py-2.5 lg:py-4 flex items-center">
                  <span className="text-[#666666]">{item.comoMedir}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 sm:px-8 lg:px-12 py-2 lg:py-4 bg-[#1A1A2E] relative z-10 shrink-0">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-3 h-3 lg:w-4 lg:h-4 text-[#FFE600]" />
          <p className="text-white/80 text-[10px] sm:text-xs lg:text-sm">
            O <span className="text-[#FFE600] font-medium">baseline para medir impacto</span> deve ser capturado AGORA, antes de escalar o modelo. O POC cria essa oportunidade.
          </p>
        </div>
      </div>
    </div>
  )
}
