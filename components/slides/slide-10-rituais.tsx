import { Calendar, Users, Target, Clock, Repeat, AlertTriangle, BarChart3 } from "lucide-react"

export default function Slide10Rituais() {
  const rituais = [
    {
      ritual: "Daily LM (15min)",
      frequencia: "Diário",
      participantes: "CTM interna",
      objetivo: "Alinhamento e prioridades do dia",
      icon: Clock,
      color: "#3483FA",
      bgColor: "#E3F2FD"
    },
    {
      ritual: "Review Semanal de Risco LM",
      frequencia: "Semanal",
      participantes: "CTM + SVC + NODOs",
      objetivo: "Top riscos da semana + ação",
      icon: AlertTriangle,
      color: "#FF9800",
      bgColor: "#FFF8E1"
    },
    {
      ritual: "Feedback Loop Roteirização",
      frequencia: "Quinzenal",
      participantes: "CTM + Roteirização",
      objetivo: "Desvios de rota → ajustes de parâmetro",
      icon: Repeat,
      color: "#9C27B0",
      bgColor: "#F3E5F5"
    },
    {
      ritual: "Scorecard MLP Review",
      frequencia: "Quinzenal",
      participantes: "CTM + SRM + MLPs focais por país",
      objetivo: "Performance + plano de ação",
      icon: Target,
      color: "#00A650",
      bgColor: "#E8F5E9"
    },
    {
      ritual: "Business Review LM",
      frequencia: "Mensal",
      participantes: "Todos os stakeholders",
      objetivo: "Visão consolidada + decisões estratégicas",
      icon: BarChart3,
      color: "#E91E63",
      bgColor: "#FCE4EC"
    },
    {
      ritual: "POC Review",
      frequencia: "Semanal (4 sem.)",
      participantes: "Governance completo",
      objetivo: "Acompanhar dados e decidir pausa/escala",
      icon: Calendar,
      color: "#607D8B",
      bgColor: "#ECEFF1"
    }
  ]

  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="px-6 sm:px-8 lg:px-12 pt-4 sm:pt-5 lg:pt-8 pb-2 lg:pb-4">
        <div className="flex items-center gap-2 text-[#3483FA] text-[10px] sm:text-xs lg:text-sm font-medium mb-2 lg:mb-3">
          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>Rituais e Cadência</span>
        </div>
        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-[#1A1A2E] mb-1 lg:mb-2">
          Rituais que mantêm a área conectada aos stakeholders
        </h2>
        <p className="text-[#666666] text-xs sm:text-sm lg:text-base xl:text-lg">
          Sem rituais, a inteligência fica no dashboard. Com rituais, ela vira decisão.
        </p>
      </div>

      {/* Main Content - Cards Grid */}
      <div className="flex-1 px-6 sm:px-8 lg:px-12 py-2 lg:py-4 min-h-0">
        <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 h-full">
          {rituais.map((item, index) => (
            <div
              key={index}
              className="rounded-lg lg:rounded-xl p-2.5 sm:p-3 lg:p-5 flex flex-col"
              style={{ backgroundColor: item.bgColor }}
            >
              <div className="flex items-start justify-between mb-2 lg:mb-3">
                <div
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: item.color }}
                >
                  <item.icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
                </div>
                <span
                  className="text-[8px] sm:text-[10px] lg:text-xs font-bold px-1.5 lg:px-2 py-0.5 lg:py-1 rounded-full"
                  style={{ backgroundColor: item.color, color: 'white' }}
                >
                  {item.frequencia}
                </span>
              </div>

              <h3 className="font-bold text-[#1A1A2E] text-[10px] sm:text-xs lg:text-sm mb-2 lg:mb-3">{item.ritual}</h3>

              <div className="space-y-1 lg:space-y-2 flex-1">
                <div className="flex items-start gap-1.5 lg:gap-2">
                  <Users className="w-3 h-3 lg:w-4 lg:h-4 text-[#666666] mt-0.5 shrink-0" />
                  <span className="text-[8px] sm:text-[10px] lg:text-xs text-[#666666]">{item.participantes}</span>
                </div>
                <div className="flex items-start gap-1.5 lg:gap-2">
                  <Target className="w-3 h-3 lg:w-4 lg:h-4 mt-0.5 shrink-0" style={{ color: item.color }} />
                  <span className="text-[8px] sm:text-[10px] lg:text-xs font-medium text-[#333333]">{item.objetivo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 sm:px-8 lg:px-12 py-2 lg:py-4 bg-[#1A1A2E] shrink-0">
        <div className="flex flex-wrap items-center gap-3 lg:gap-6">
          <div className="flex items-center gap-1.5 lg:gap-2">
            <Clock className="w-3 h-3 lg:w-4 lg:h-4 text-[#3483FA]" />
            <p className="text-white/80 text-[10px] sm:text-xs lg:text-sm">
              O <span className="text-[#3483FA] font-medium">Daily de 15min</span> é o único ritual operacional.
            </p>
          </div>
          <div className="flex items-center gap-1.5 lg:gap-2">
            <BarChart3 className="w-3 h-3 lg:w-4 lg:h-4 text-[#FFE600]" />
            <p className="text-white/80 text-[10px] sm:text-xs lg:text-sm">
              Todos os outros são de <span className="text-[#FFE600] font-medium">inteligência e decisão</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
