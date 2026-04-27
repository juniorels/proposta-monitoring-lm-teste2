import { Search, Settings, BarChart2, Target, Layout, LineChart, AlertTriangle, Users, DollarSign, MapPin } from "lucide-react"

export default function Slide5Frentes() {
  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="px-6 sm:px-8 lg:px-12 pt-4 sm:pt-6 lg:pt-10 pb-2 lg:pb-4">
        <div className="flex items-center gap-2 text-[#3483FA] text-[10px] sm:text-xs lg:text-sm font-medium mb-2 lg:mb-3">
          <Layout className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>O que a Área Faz</span>
        </div>
        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-[#1A1A2E] mb-1 lg:mb-2">
          As 4 frentes de atuação da área
        </h2>
        <p className="text-[#666666] text-xs sm:text-sm lg:text-base xl:text-lg">
          Cada frente gera um produto concreto para o negócio
        </p>
      </div>

      {/* Main Content - 2x2 Grid */}
      <div className="flex-1 px-6 sm:px-8 lg:px-12 py-2 lg:py-6 min-h-0">
        <div className="grid grid-cols-2 gap-3 lg:gap-6 h-full">
          {/* Card 1 - Inteligência de Dados */}
          <div className="bg-[#E3F2FD] rounded-lg lg:rounded-xl p-3 sm:p-4 lg:p-6 border-l-4 border-[#3483FA]">
            <div className="flex items-center gap-2 lg:gap-3 mb-2 lg:mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-[#3483FA] rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-base">
                1
              </div>
              <div className="flex items-center gap-1.5 lg:gap-2">
                <Search className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#3483FA]" />
                <h3 className="text-[10px] sm:text-xs lg:text-lg font-bold text-[#1A1A2E]">INTELIGÊNCIA DE DADOS LM</h3>
              </div>
            </div>
            <ul className="space-y-1 lg:space-y-2 text-[10px] sm:text-xs lg:text-sm text-[#333333]">
              <li className="flex items-start gap-1.5 lg:gap-2">
                <LineChart className="w-3 h-3 lg:w-4 lg:h-4 text-[#3483FA] mt-0.5 shrink-0" />
                <span>Dashboard end-to-end</span>
              </li>
              <li className="flex items-start gap-1.5 lg:gap-2">
                <BarChart2 className="w-3 h-3 lg:w-4 lg:h-4 text-[#3483FA] mt-0.5 shrink-0" />
                <span>Análise de padrões de falha e custo</span>
              </li>
              <li className="flex items-start gap-1.5 lg:gap-2">
                <Users className="w-3 h-3 lg:w-4 lg:h-4 text-[#3483FA] mt-0.5 shrink-0" />
                <span>Visão consolidada por SVC, MLP, região</span>
              </li>
              <li className="flex items-start gap-1.5 lg:gap-2">
                <Target className="w-3 h-3 lg:w-4 lg:h-4 text-[#3483FA] mt-0.5 shrink-0" />
                <span>KPIs semanais/mensais</span>
              </li>
            </ul>
          </div>

          {/* Card 2 - Interface com Roteirização */}
          <div className="bg-[#FFF3E0] rounded-lg lg:rounded-xl p-3 sm:p-4 lg:p-6 border-l-4 border-[#FF9800]">
            <div className="flex items-center gap-2 lg:gap-3 mb-2 lg:mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-[#FF9800] rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-base">
                2
              </div>
              <div className="flex items-center gap-1.5 lg:gap-2">
                <Settings className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#FF9800]" />
                <h3 className="text-[10px] sm:text-xs lg:text-lg font-bold text-[#1A1A2E]">INTERFACE COM ROTEIRIZAÇÃO</h3>
              </div>
            </div>
            <ul className="space-y-1 lg:space-y-2 text-[10px] sm:text-xs lg:text-sm text-[#333333]">
              <li className="flex items-start gap-1.5 lg:gap-2">
                <LineChart className="w-3 h-3 lg:w-4 lg:h-4 text-[#FF9800] mt-0.5 shrink-0" />
                <span>Feedback de performance das rotas geradas</span>
              </li>
              <li className="flex items-start gap-1.5 lg:gap-2">
                <Target className="w-3 h-3 lg:w-4 lg:h-4 text-[#FF9800] mt-0.5 shrink-0" />
                <span>Inputs para otimização de roteiros (Abertura do ORH).</span>
              </li>
              <li className="flex items-start gap-1.5 lg:gap-2">
                <AlertTriangle className="w-3 h-3 lg:w-4 lg:h-4 text-[#FF9800] mt-0.5 shrink-0" />
                <span>Alertas de desvio sistêmico de rota</span>
              </li>
            </ul>
          </div>

          {/* Card 3 - Governança de MLPs */}
          <div className="bg-[#E8F5E9] rounded-lg lg:rounded-xl p-3 sm:p-4 lg:p-6 border-l-4 border-[#00A650]">
            <div className="flex items-center gap-2 lg:gap-3 mb-2 lg:mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-[#00A650] rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-base">
                3
              </div>
              <div className="flex items-center gap-1.5 lg:gap-2">
                <BarChart2 className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#00A650]" />
                <h3 className="text-[10px] sm:text-xs lg:text-lg font-bold text-[#1A1A2E]">GOVERNANÇA DE MLPs</h3>
              </div>
            </div>
            <ul className="space-y-1 lg:space-y-2 text-[10px] sm:text-xs lg:text-sm text-[#333333]">
              <li className="flex items-start gap-1.5 lg:gap-2">
                <BarChart2 className="w-3 h-3 lg:w-4 lg:h-4 text-[#00A650] mt-0.5 shrink-0" />
                <span>Scorecard por MLP</span>
              </li>
              <li className="flex items-start gap-1.5 lg:gap-2">
                <Target className="w-3 h-3 lg:w-4 lg:h-4 text-[#00A650] mt-0.5 shrink-0" />
                <span>Acompanhamento de tarefas críticas delegadas vs retidas</span>
              </li>
              <li className="flex items-start gap-1.5 lg:gap-2">
                <LineChart className="w-3 h-3 lg:w-4 lg:h-4 text-[#00A650] mt-0.5 shrink-0" />
                <span>Planos de melhoria</span>
              </li>
              <li className="flex items-start gap-1.5 lg:gap-2">
                <Users className="w-3 h-3 lg:w-4 lg:h-4 text-[#00A650] mt-0.5 shrink-0" />
                <span>Penalização/premiação</span>
              </li>
            </ul>
          </div>

          {/* Card 4 - Decisões Estratégicas */}
          <div className="bg-[#FCE4EC] rounded-lg lg:rounded-xl p-3 sm:p-4 lg:p-6 border-l-4 border-[#E91E63]">
            <div className="flex items-center gap-2 lg:gap-3 mb-2 lg:mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-[#E91E63] rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-base">
                4
              </div>
              <div className="flex items-center gap-1.5 lg:gap-2">
                <Target className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#E91E63]" />
                <h3 className="text-[10px] sm:text-xs lg:text-lg font-bold text-[#1A1A2E]">DECISÕES ESTRATÉGICAS</h3>
              </div>
            </div>
            <ul className="space-y-1 lg:space-y-2 text-[10px] sm:text-xs lg:text-sm text-[#333333]">
              <li className="flex items-start gap-1.5 lg:gap-2">
                <MapPin className="w-3 h-3 lg:w-4 lg:h-4 text-[#E91E63] mt-0.5 shrink-0" />
                <span>Alocação de volume por MLP/região</span>
              </li>
              <li className="flex items-start gap-1.5 lg:gap-2">
                <DollarSign className="w-3 h-3 lg:w-4 lg:h-4 text-[#E91E63] mt-0.5 shrink-0" />
                <span>Subsídios para renegociação contratual</span>
              </li>
              <li className="flex items-start gap-1.5 lg:gap-2">
                <Users className="w-3 h-3 lg:w-4 lg:h-4 text-[#E91E63] mt-0.5 shrink-0" />
                <span>Expansão/retração de parceiros</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 sm:px-8 lg:px-12 py-2 lg:py-4 bg-[#F5F5F5] border-t border-[#E0E0E0] shrink-0">
        <div className="flex items-center gap-2">
          <Settings className="w-3 h-3 lg:w-4 lg:h-4 text-[#FF9800]" />
          <p className="text-[#666666] text-[10px] sm:text-xs lg:text-sm">
            <span className="font-medium text-[#333333]">Destaque:</span> A Frente 2 (Interface com Roteirização) é o diferencial — pela primeira vez haverá um canal formal entre o resultado na rua e quem desenhou a rota.
          </p>
        </div>
      </div>
    </div>
  )
}
