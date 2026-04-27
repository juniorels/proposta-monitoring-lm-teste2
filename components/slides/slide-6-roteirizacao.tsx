import { Settings, ArrowLeftRight, Calendar, Target, AlertTriangle, TrendingUp, CheckCircle } from "lucide-react"

export default function Slide6Roteirizacao() {
  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden">
      {/* Blue accent line at top */}
      <div className="h-0.5 lg:h-1 bg-[#3483FA] shrink-0" />

      {/* Header */}
      <div className="px-6 sm:px-8 lg:px-10 pt-3 sm:pt-4 lg:pt-6 pb-2 lg:pb-3 shrink-0">
        <div className="flex items-center gap-2 text-[#3483FA] text-[10px] sm:text-xs lg:text-sm font-medium mb-1 lg:mb-2">
          <Settings className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>Interface com Roteirização — Detalhe</span>
        </div>
        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-[#1A1A2E] mb-1 lg:mb-2">
          A interface com Roteirização é a principal alavanca
        </h2>
        <p className="text-[#666666] text-xs sm:text-sm lg:text-base">
          Quem monitora a execução tem os dados que quem roteiriza precisa para melhorar
        </p>
      </div>

      {/* Main Content - Flow Diagram */}
      <div className="flex-1 px-6 sm:px-8 lg:px-10 py-2 lg:py-4 min-h-0">
        <div className="flex gap-3 lg:gap-6 h-full">
          {/* Left Column - Roteirização */}
          <div className="flex-1 bg-[#F5F5F5] rounded-lg lg:rounded-xl p-2.5 sm:p-3 lg:p-4">
            <div className="flex items-center gap-2 lg:gap-3 mb-2 lg:mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-[#1A1A2E] rounded-lg flex items-center justify-center">
                <Settings className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm lg:text-base font-bold text-[#1A1A2E]">ROTEIRIZAÇÃO</h3>
                <p className="text-[8px] sm:text-[10px] lg:text-xs text-[#666666]">Planejamento</p>
              </div>
            </div>

            <div className="space-y-1.5 lg:space-y-2">
              <div className="bg-white rounded-lg p-2 lg:p-3 border border-[#E0E0E0]">
                <p className="text-[10px] sm:text-xs lg:text-sm text-[#333333] font-medium">Gera rotas, parâmetros, tempos médios</p>
              </div>
              <div className="bg-white rounded-lg p-2 lg:p-3 border border-[#E0E0E0]">
                <p className="text-[10px] sm:text-xs lg:text-sm text-[#333333] font-medium">Ajusta algoritmos e restrições</p>
              </div>
              <div className="bg-white rounded-lg p-2 lg:p-3 border border-[#E0E0E0]">
                <p className="text-[10px] sm:text-xs lg:text-sm text-[#333333] font-medium">Recebe alertas de risco antecipado</p>
              </div>
            </div>
          </div>

          {/* Center - Arrows */}
          <div className="flex flex-col justify-center items-center w-10 lg:w-16">
            <div className="flex flex-col items-center">
              <ArrowLeftRight className="w-5 h-5 lg:w-7 lg:h-7 text-[#3483FA]" />
              <span className="text-[8px] sm:text-[10px] lg:text-xs text-[#3483FA] font-medium mt-1">Feedback</span>
            </div>
          </div>

          {/* Right Column - Área LM CTM */}
          <div className="flex-1 bg-[#E3F2FD] rounded-lg lg:rounded-xl p-2.5 sm:p-3 lg:p-4 border-2 border-[#3483FA]">
            <div className="flex items-center gap-2 lg:gap-3 mb-2 lg:mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-[#3483FA] rounded-lg flex items-center justify-center">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm lg:text-base font-bold text-[#1A1A2E]">ÁREA CTM LM</h3>
                <p className="text-[8px] sm:text-[10px] lg:text-xs text-[#666666]">Execução & Análise</p>
              </div>
            </div>

            <div className="space-y-1.5 lg:space-y-2">
              <div className="bg-white rounded-lg p-2 lg:p-3 border border-[#3483FA]">
                <p className="text-[10px] sm:text-xs lg:text-sm text-[#333333] font-medium">
                  Reporta: <span className="text-[#3483FA]">% desvio real vs planejado</span> por corredor/SVC
                </p>
              </div>
              <div className="bg-white rounded-lg p-2 lg:p-3 border border-[#3483FA]">
                <p className="text-[10px] sm:text-xs lg:text-sm text-[#333333] font-medium">
                  Reporta: rotas com maior <span className="text-[#3483FA]">índice de alertas sistêmicos</span>
                </p>
              </div>
              <div className="bg-white rounded-lg p-2 lg:p-3 border border-[#3483FA]">
                <p className="text-[10px] sm:text-xs lg:text-sm text-[#333333] font-medium">
                  Sinaliza: <span className="text-[#3483FA]">padrões de falha</span> correlacionados ao design de rota
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ritual Section */}
      <div className="px-6 sm:px-8 lg:px-10 py-2 lg:py-4 shrink-0">
        <div className="grid grid-cols-2 gap-3 lg:gap-6">
          {/* Ritual Proposto */}
          <div className="bg-[#FFF8E1] rounded-lg lg:rounded-xl p-2.5 sm:p-3 lg:p-4 border border-[#FFE600]">
            <div className="flex items-center gap-1.5 lg:gap-2 mb-2 lg:mb-3">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#FF9800]" />
              <h4 className="font-bold text-[#1A1A2E] text-[10px] sm:text-xs lg:text-base">RITUAL PROPOSTO</h4>
            </div>
            <ul className="space-y-1 lg:space-y-2 text-[10px] sm:text-xs lg:text-sm text-[#333333]">
              <li className="flex items-start gap-1.5 lg:gap-2">
                <span className="text-[#FF9800]">•</span>
                <span>Reunião quinzenal: CTM LM + Roteirização</span>
              </li>
              <li className="flex items-start gap-1.5 lg:gap-2">
                <span className="text-[#FF9800]">•</span>
                <span>Pauta: top 5 desvios de rota com causa raiz</span>
              </li>
              <li className="flex items-start gap-1.5 lg:gap-2">
                <span className="text-[#FF9800]">•</span>
                <span>Entrega: ajuste de parâmetros ou flag de investigação</span>
              </li>
            </ul>
          </div>

          {/* Impacto Esperado */}
          <div className="bg-[#E8F5E9] rounded-lg lg:rounded-xl p-2.5 sm:p-3 lg:p-4 border border-[#00A650]">
            <div className="flex items-center gap-1.5 lg:gap-2 mb-2 lg:mb-3">
              <Target className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#00A650]" />
              <h4 className="font-bold text-[#1A1A2E] text-[10px] sm:text-xs lg:text-base">IMPACTO ESPERADO</h4>
            </div>
            <p className="text-[10px] sm:text-xs lg:text-sm text-[#333333]">
              <span className="font-medium">Redução de rotas cronicamente problemáticas</span> via feedback loop entre execução e planejamento.
            </p>
            <div className="mt-2 lg:mt-3 flex items-center gap-1.5 lg:gap-2 text-[10px] sm:text-xs lg:text-sm text-[#00A650]">
              <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4" />
              <span className="font-medium">Hoje esse feedback loop não existe formalmente</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 sm:px-8 lg:px-10 py-2 lg:py-3 bg-[#1A1A2E] shrink-0">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-3 h-3 lg:w-4 lg:h-4 text-[#FFE600]" />
          <p className="text-white/80 text-[10px] sm:text-xs lg:text-sm">
            A área proposta cria essa ponte pela primeira vez entre execução e planejamento.
          </p>
        </div>
      </div>
    </div>
  )
}
