import { ArrowRight, Lightbulb, AlertCircle, LineChart, Shield, Eye, Flame, Database, Users } from "lucide-react"

export default function Slide3Oportunidade() {
  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Yellow accent on left */}
      <div className="absolute left-0 top-0 w-1 lg:w-2 h-full bg-[#FFE600]" />

      {/* Header */}
      <div className="px-6 sm:px-8 lg:px-12 pl-8 sm:pl-10 lg:pl-16 pt-4 sm:pt-6 lg:pt-10 pb-2 lg:pb-4">
        <div className="flex items-center gap-2 text-[#3483FA] text-[10px] sm:text-xs lg:text-sm font-medium mb-2 lg:mb-3">
          <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>A Oportunidade</span>
        </div>
        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-[#1A1A2E] mb-1 lg:mb-2">
          A delegação cria um espaço estratégico que não existia antes
        </h2>
        <p className="text-[#666666] text-xs sm:text-sm lg:text-base xl:text-lg">
          Quando o operacional vai para o MLP, a CTM pode olhar para o que realmente importa
        </p>
      </div>

      {/* Main Content - Before/After */}
      <div className="flex-1 px-6 sm:px-8 lg:px-12 pl-8 sm:pl-10 lg:pl-16 py-2 lg:py-6 min-h-0">
        <div className="grid grid-cols-2 gap-4 lg:gap-8 h-full">
          {/* ANTES */}
          <div className="bg-[#F8F8F8] rounded-lg lg:rounded-xl p-3 sm:p-4 lg:p-6 border border-[#E0E0E0]">
            <div className="flex items-center gap-2 lg:gap-3 mb-3 lg:mb-6">
              <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-[#FF5252]/10 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#FF5252]" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base lg:text-xl font-bold text-[#333333]">ANTES</h3>
                <p className="text-[8px] sm:text-[10px] lg:text-sm text-[#666666]">CTM hoje</p>
              </div>
            </div>

            <div className="space-y-2 lg:space-y-4">
              {[
                { icon: AlertCircle, text: "Monitoramento reativo" },
                { icon: Users, text: "Push direto para drivers/MLPs" },
                { icon: Eye, text: "Foco no dia a dia" },
                { icon: LineChart, text: "Sem tempo para análise" },
                { icon: Flame, text: "Apaga incêndio" },
                { icon: Database, text: "Dados fragmentados" },
                { icon: Shield, text: "Sem interface estruturada com Roteirização" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 lg:gap-3 text-[#666666]">
                  <item.icon className="w-3 h-3 lg:w-4 lg:h-4 text-[#999999] shrink-0" />
                  <span className="text-[10px] sm:text-xs lg:text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DEPOIS */}
          <div className="bg-[#E8F5E9] rounded-lg lg:rounded-xl p-3 sm:p-4 lg:p-6 border-2 border-[#00A650]">
            <div className="flex items-center gap-2 lg:gap-3 mb-3 lg:mb-6">
              <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-[#00A650]/10 rounded-lg flex items-center justify-center">
                <LineChart className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#00A650]" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base lg:text-xl font-bold text-[#333333]">DEPOIS</h3>
                <p className="text-[8px] sm:text-[10px] lg:text-sm text-[#666666]">CTM proposta</p>
              </div>
            </div>

            <div className="space-y-2 lg:space-y-4">
              {[
                { icon: Shield, text: "Inteligência e governança" },
                { icon: LineChart, text: "Decisões baseadas em dados" },
                { icon: Eye, text: "Visão semanal, mensal, preditiva" },
                { icon: Database, text: "Análise de padrões e tendências" },
                { icon: Flame, text: "Previne o incêndio" },
                { icon: Database, text: "Visão end-to-end consolidada" },
                { icon: Users, text: "Interação formal com Roteirização, SVC, IT e SRM" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 lg:gap-3 text-[#333333]">
                  <item.icon className="w-3 h-3 lg:w-4 lg:h-4 text-[#00A650] shrink-0" />
                  <span className="text-[10px] sm:text-xs lg:text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Result */}
      <div className="px-6 sm:px-8 lg:px-12 pl-8 sm:pl-10 lg:pl-16 py-2 sm:py-3 lg:py-5 bg-[#FFE600] shrink-0">
        <div className="flex items-center gap-2 lg:gap-4">
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#1A1A2E]" />
          <div>
            <p className="text-[#1A1A2E] font-bold text-xs sm:text-sm lg:text-lg">RESULTADO</p>
            <p className="text-[#333333] text-[10px] sm:text-xs lg:text-base">
              A CTM deixa de ser <span className="line-through opacity-60">Centro Operacional</span> e passa a ser{" "}
              <span className="font-bold">Torre de Inteligência da Última Milha</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
