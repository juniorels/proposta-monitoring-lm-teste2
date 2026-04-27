import { ListTodo, User, Calendar, CheckCircle2, AlertCircle } from "lucide-react"

export default function Slide15ProximosPassos() {
  const acoes = [
    {
      num: 1,
      acao: "Validar estrutura e escopo da área proposta",
      responsavel: "FM&LM Director (Will) + CT Lead",
      prazo: "Semana 1",
      status: "pending"
    },
    {
      num: 2,
      acao: "Aprovar definição de headcount/perfis",
      responsavel: "FM&LM Sr Mgr (Natalia)",
      prazo: "Semana 1",
      status: "pending"
    },
    {
      num: 3,
      acao: "Acompanhar semanas 2-4 do POC com protocolo de monitoramento definido",
      responsavel: "CT + Governance completo",
      prazo: "Contínuo até 03/05",
      status: "in_progress"
    },
    {
      num: 4,
      acao: "Preparar Dashboard end-to-end v1",
      responsavel: "IT + Produto (Guido + Lucia)",
      prazo: "Semana 2-3",
      status: "pending"
    },
    {
      num: 5,
      acao: "Definir ritual quinzenal com Roteirização",
      responsavel: "CT + Roteirização",
      prazo: "Semana 2",
      status: "pending"
    },
    {
      num: 6,
      acao: "Capturar baseline de custo por entrega atual",
      responsavel: "Analytics CT",
      prazo: "Semana 1",
      status: "pending"
    },
    {
      num: 7,
      acao: "Preparar proposta de scorecard MLP v1",
      responsavel: "SRM Focais (Paulina/Agustin/Greysi)",
      prazo: "Semana 3-4",
      status: "pending"
    }
  ]

  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden">
      {/* Yellow accent on left */}
      <div className="absolute left-0 top-0 w-1 lg:w-2 h-full bg-[#FFE600]" />

      {/* Header */}
      <div className="px-6 sm:px-8 lg:px-10 pl-8 sm:pl-10 lg:pl-14 pt-3 sm:pt-4 lg:pt-6 pb-1 lg:pb-2 shrink-0">
        <div className="flex items-center gap-2 text-[#3483FA] text-[10px] sm:text-xs lg:text-sm font-medium mb-1">
          <ListTodo className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
          <span>Próximos Passos</span>
        </div>
        <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-[#1A1A2E] mb-0.5 lg:mb-1">
          O que precisamos decidir e fazer nas próximas 2 semanas
        </h2>
        <p className="text-[#666666] text-[10px] sm:text-xs lg:text-sm">
          O POC termina em <span className="font-bold text-[#1A1A2E]">03/05</span> — a janela de decisão é agora
        </p>
      </div>

      {/* Main Content - Actions Table */}
      <div className="flex-1 px-6 sm:px-8 lg:px-10 pl-8 sm:pl-10 lg:pl-14 py-1 lg:py-2 min-h-0">
        <div className="bg-[#F5F5F5] rounded-lg lg:rounded-xl overflow-hidden h-full flex flex-col">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#1A1A2E] text-white text-[9px] sm:text-[10px] lg:text-xs font-medium shrink-0">
            <div className="col-span-1 px-2 lg:px-3 py-1.5 lg:py-2 text-center">#</div>
            <div className="col-span-5 px-2 lg:px-3 py-1.5 lg:py-2">AÇÃO</div>
            <div className="col-span-4 px-2 lg:px-3 py-1.5 lg:py-2 flex items-center gap-1 lg:gap-1.5">
              <User className="w-2.5 h-2.5 lg:w-3 lg:h-3" /> RESPONSÁVEL
            </div>
            <div className="col-span-2 px-2 lg:px-3 py-1.5 lg:py-2 flex items-center gap-1 lg:gap-1.5">
              <Calendar className="w-2.5 h-2.5 lg:w-3 lg:h-3" /> PRAZO
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-[#E0E0E0] flex-1 overflow-auto">
            {acoes.map((item, index) => (
              <div key={index} className="grid grid-cols-12 text-[9px] sm:text-[10px] lg:text-xs hover:bg-white transition-colors">
                <div className="col-span-1 px-2 lg:px-3 py-1.5 sm:py-2 lg:py-2.5 flex items-center justify-center">
                  <span className="w-4 h-4 lg:w-5 lg:h-5 bg-[#3483FA] text-white rounded-full flex items-center justify-center text-[8px] lg:text-[10px] font-bold">
                    {item.num}
                  </span>
                </div>
                <div className="col-span-5 px-2 lg:px-3 py-1.5 sm:py-2 lg:py-2.5 flex items-center">
                  <span className="text-[#333333]">{item.acao}</span>
                </div>
                <div className="col-span-4 px-2 lg:px-3 py-1.5 sm:py-2 lg:py-2.5 flex items-center">
                  <span className="text-[#666666]">{item.responsavel}</span>
                </div>
                <div className="col-span-2 px-2 lg:px-3 py-1.5 sm:py-2 lg:py-2.5 flex items-center">
                  {item.status === "in_progress" ? (
                    <span className="flex items-center gap-0.5 lg:gap-1 text-[8px] lg:text-[10px] font-medium text-[#FF9800] bg-[#FFF8E1] px-1.5 lg:px-2 py-0.5 rounded-full">
                      <AlertCircle className="w-2 h-2 lg:w-2.5 lg:h-2.5" />
                      {item.prazo}
                    </span>
                  ) : (
                    <span className="text-[8px] lg:text-[10px] font-medium text-[#666666] bg-[#E0E0E0] px-1.5 lg:px-2 py-0.5 rounded-full">
                      {item.prazo}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer - CTA */}
      <div className="px-6 sm:px-8 lg:px-10 pl-8 sm:pl-10 lg:pl-14 py-2 lg:py-3 bg-[#1A1A2E] shrink-0">
        <div className="flex items-center gap-2 lg:gap-3">
          <CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5 text-[#00A650]" />
          <div>
            <p className="text-white font-bold text-[10px] sm:text-xs lg:text-sm">O POC está acontecendo agora.</p>
            <p className="text-white/70 text-[9px] sm:text-[10px] lg:text-xs">A proposta precisa caminhar junto para que a transição seja fluida.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
