import { Users, UserCircle, BarChart3, Target, Settings } from "lucide-react"

export default function Slide11Estrutura() {
  const regions = ["SPI/SUL", "NONECO/RIMES", "SPC"]
  
  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-6 sm:px-8 lg:px-12 pt-3 sm:pt-4 lg:pt-6 pb-1 lg:pb-2">
        <div className="flex items-center gap-2 text-[#3483FA] text-[10px] sm:text-xs lg:text-sm font-medium mb-1 lg:mb-2">
          <Users className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>Estrutura Proposta da Área</span>
        </div>
        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-[#1A1A2E] mb-1">
          Uma área enxuta com perfil analítico — não operacional
        </h2>
        <p className="text-[#666666] text-xs sm:text-sm lg:text-base">
          Estrutura mínima viável.
        </p>
      </div>

      {/* Main Content - Org Chart */}
      <div className="flex-1 px-4 sm:px-6 lg:px-10 py-1 lg:py-2 flex flex-col items-center justify-center min-h-0">
        {/* Head */}
        <div className="bg-[#1A1A2E] rounded-lg p-2 sm:p-2.5 lg:p-3 w-44 sm:w-52 lg:w-64">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9 bg-[#FFE600] rounded-full flex items-center justify-center">
              <UserCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#1A1A2E]" />
            </div>
            <div>
              <h3 className="font-bold text-white text-[9px] sm:text-[10px] lg:text-sm">Head / Referência Estratégica</h3>
              <p className="text-[#FFE600] text-[9px] sm:text-[10px] lg:text-xs">CTM LM</p>
            </div>
          </div>
        </div>

        {/* Connector Lines */}
        <svg width="100%" height="20" className="shrink-0 max-w-[500px]" viewBox="0 0 500 20" preserveAspectRatio="xMidYMid meet">
          <line x1="250" y1="0" x2="250" y2="8" stroke="#D0D0D0" strokeWidth="2" />
          <line x1="83" y1="8" x2="417" y2="8" stroke="#D0D0D0" strokeWidth="2" />
          <line x1="83" y1="8" x2="83" y2="20" stroke="#D0D0D0" strokeWidth="2" />
          <line x1="250" y1="8" x2="250" y2="20" stroke="#D0D0D0" strokeWidth="2" />
          <line x1="417" y1="8" x2="417" y2="20" stroke="#D0D0D0" strokeWidth="2" />
        </svg>

        {/* Three branches */}
        <div className="flex gap-2 sm:gap-3 lg:gap-4 items-start">
          {/* Branch 1 - Analytics & BI */}
          <div className="flex flex-col items-center">
            <div className="bg-[#E3F2FD] rounded-lg p-1.5 sm:p-2 lg:p-3 w-24 sm:w-32 lg:w-40 border-2 border-[#3483FA] h-[72px] sm:h-[88px] lg:h-[110px]">
              <div className="flex items-center gap-1 lg:gap-1.5 mb-1 lg:mb-2">
                <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-[#3483FA] rounded flex items-center justify-center shrink-0">
                  <BarChart3 className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white" />
                </div>
                <h4 className="font-bold text-[#1A1A2E] text-[7px] sm:text-[9px] lg:text-xs">Analytics & BI</h4>
              </div>
              <ul className="space-y-0 text-[6px] sm:text-[8px] lg:text-[10px] text-[#333333]">
                <li>• Dashboards</li>
                <li>• KPIs/métricas</li>
                <li>• Relatório risco</li>
                <li>• Análise custo</li>
              </ul>
            </div>
            {/* Region sub-boxes */}
            <div className="flex gap-0.5 sm:gap-1 mt-1 lg:mt-2">
              {regions.map((region) => (
                <div key={region} className="bg-[#3483FA]/10 border border-[#3483FA]/30 rounded px-1 sm:px-1.5 lg:px-2 py-0.5 lg:py-1 h-5 sm:h-6 lg:h-7 flex items-center">
                  <span className="text-[5px] sm:text-[7px] lg:text-[9px] font-medium text-[#3483FA]">{region}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Branch 2 - Governança MLP */}
          <div className="flex flex-col items-center">
            <div className="bg-[#E8F5E9] rounded-lg p-1.5 sm:p-2 lg:p-3 w-24 sm:w-32 lg:w-40 border-2 border-[#00A650] h-[72px] sm:h-[88px] lg:h-[110px]">
              <div className="flex items-center gap-1 lg:gap-1.5 mb-1 lg:mb-2">
                <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-[#00A650] rounded flex items-center justify-center shrink-0">
                  <Target className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white" />
                </div>
                <h4 className="font-bold text-[#1A1A2E] text-[7px] sm:text-[9px] lg:text-xs">Governança MLP</h4>
              </div>
              <ul className="space-y-0 text-[6px] sm:text-[8px] lg:text-[10px] text-[#333333]">
                <li>• Scorecard MLP</li>
                <li>• Tarefas críticas</li>
                <li>• Planos de melhoria</li>
              </ul>
            </div>
            {/* Region sub-boxes */}
            <div className="flex gap-0.5 sm:gap-1 mt-1 lg:mt-2">
              {regions.map((region) => (
                <div key={region} className="bg-[#00A650]/10 border border-[#00A650]/30 rounded px-1 sm:px-1.5 lg:px-2 py-0.5 lg:py-1 h-5 sm:h-6 lg:h-7 flex items-center">
                  <span className="text-[5px] sm:text-[7px] lg:text-[9px] font-medium text-[#00A650]">{region}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Branch 3 - Interface Roteirização */}
          <div className="flex flex-col items-center">
            <div className="bg-[#FFF3E0] rounded-lg p-1.5 sm:p-2 lg:p-3 w-24 sm:w-32 lg:w-40 border-2 border-[#FF9800] h-[72px] sm:h-[88px] lg:h-[110px]">
              <div className="flex items-center gap-1 lg:gap-1.5 mb-1 lg:mb-2">
                <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-[#FF9800] rounded flex items-center justify-center shrink-0">
                  <Settings className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white" />
                </div>
                <h4 className="font-bold text-[#1A1A2E] text-[7px] sm:text-[9px] lg:text-xs">Interface Roteirização</h4>
              </div>
              <ul className="space-y-0 text-[6px] sm:text-[8px] lg:text-[10px] text-[#333333]">
                <li>• Feedback loop</li>
                <li>• Análise de desvio</li>
                <li>• Input p/ algoritmo</li>
              </ul>
            </div>
            {/* Region sub-boxes */}
            <div className="flex gap-0.5 sm:gap-1 mt-1 lg:mt-2">
              {regions.map((region) => (
                <div key={region} className="bg-[#FF9800]/10 border border-[#FF9800]/30 rounded px-1 sm:px-1.5 lg:px-2 py-0.5 lg:py-1 h-5 sm:h-6 lg:h-7 flex items-center">
                  <span className="text-[5px] sm:text-[7px] lg:text-[9px] font-medium text-[#FF9800]">{region}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Profiles Section */}
        <div className="mt-2 lg:mt-4 bg-[#F5F5F5] rounded-lg p-2 sm:p-2.5 lg:p-3 w-full max-w-xl">
          <h4 className="font-bold text-[#1A1A2E] text-[9px] sm:text-[10px] lg:text-xs mb-1 lg:mb-2">PERFIS-CHAVE:</h4>
          <div className="grid grid-cols-3 gap-1.5 lg:gap-3 text-[6px] sm:text-[8px] lg:text-[10px] text-[#333333]">
            <div className="flex items-start gap-1 lg:gap-1.5">
              <div className="w-1.5 h-1.5 bg-[#3483FA] rounded-full mt-0.5 shrink-0" />
              <span>Analista de Dados / BI com experiência logística</span>
            </div>
            <div className="flex items-start gap-1 lg:gap-1.5">
              <div className="w-1.5 h-1.5 bg-[#00A650] rounded-full mt-0.5 shrink-0" />
              <span>Analista de Performance de Transportadores</span>
            </div>
            <div className="flex items-start gap-1 lg:gap-1.5">
              <div className="w-1.5 h-1.5 bg-[#FF9800] rounded-full mt-0.5 shrink-0" />
              <span>Analista de Operações com interface técnica</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 sm:px-8 lg:px-12 py-1.5 lg:py-2 bg-[#FFE600] shrink-0">
        <div className="flex items-center gap-2">
          <Users className="w-3 h-3 lg:w-4 lg:h-4 text-[#1A1A2E]" />
          <p className="text-[#1A1A2E] font-bold text-[10px] sm:text-xs lg:text-sm">HEADCOUNT</p>
          <span className="text-[#333333] text-[8px] sm:text-[10px] lg:text-xs">(escala com a maturidade do POC)</span>
        </div>
      </div>
    </div>
  )
}
