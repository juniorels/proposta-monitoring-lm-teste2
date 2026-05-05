"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Maximize2, PanelLeftClose, PanelLeft, Eye, EyeOff, Download } from "lucide-react"
import { exportToPptx } from "@/lib/export-pptx"
import { Button } from "@/components/ui/button"
import Slide1Capa from "@/components/slides/slide-1-capa"
import Slide2POC from "@/components/slides/slide-2-poc"
import Slide3Oportunidade from "@/components/slides/slide-3-oportunidade"
import Slide4Missao from "@/components/slides/slide-4-missao"
import Slide5Frentes from "@/components/slides/slide-5-frentes"
import Slide6Roteirizacao from "@/components/slides/slide-6-roteirizacao"
import Slide7Tarefas from "@/components/slides/slide-7-tarefas"
import Slide8Stakeholders from "@/components/slides/slide-8-stakeholders"
import Slide9Produtos from "@/components/slides/slide-9-produtos"
import Slide10Rituais from "@/components/slides/slide-10-rituais"
import Slide11Estrutura from "@/components/slides/slide-11-estrutura"
import Slide12Roadmap from "@/components/slides/slide-12-roadmap"
import Slide13Validacao from "@/components/slides/slide-13-validacao"
import Slide14Impacto from "@/components/slides/slide-14-impacto"
import Slide15ProximosPassos from "@/components/slides/slide-15-proximos-passos"
import SlideResumo1 from "@/components/slides/slide-resumo-1"
import SlideResumo2Piramide from "@/components/slides/slide-resumo-2-piramide"

const allSlides = [
  { id: 1, component: Slide1Capa, title: "Capa", hidden: false },
  { id: 2, component: SlideResumo1, title: "Resumo: Jornada", hidden: false },
  { id: 3, component: SlideResumo2Piramide, title: "Resumo: Pirâmide", hidden: false },
  { id: 4, component: Slide13Validacao, title: "Validação POC", hidden: true },
  { id: 5, component: Slide2POC, title: "O POC", hidden: true },
  { id: 6, component: Slide3Oportunidade, title: "A Oportunidade", hidden: true },
  { id: 7, component: Slide4Missao, title: "Missão", hidden: true },
  { id: 8, component: Slide5Frentes, title: "4 Frentes", hidden: true },
  { id: 9, component: Slide6Roteirizacao, title: "Roteirização", hidden: true },
  { id: 10, component: Slide7Tarefas, title: "Tarefas", hidden: true },
  { id: 11, component: Slide8Stakeholders, title: "Stakeholders", hidden: true },
  { id: 12, component: Slide9Produtos, title: "Produtos", hidden: true },
  { id: 13, component: Slide10Rituais, title: "Rituais", hidden: true },
  { id: 14, component: Slide11Estrutura, title: "Estrutura", hidden: true },
  { id: 15, component: Slide12Roadmap, title: "Roadmap", hidden: true },
  { id: 16, component: Slide14Impacto, title: "Impacto", hidden: true },
  { id: 17, component: Slide15ProximosPassos, title: "Próximos Passos", hidden: true },
]

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [showHiddenSlides, setShowHiddenSlides] = useState(false)

  const slides = showHiddenSlides 
    ? allSlides 
    : allSlides.filter(s => !s.hidden)
  
  const visibleSlides = slides.map((slide, index) => ({ ...slide, displayId: index + 1 }))

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < visibleSlides.length - 1 ? prev + 1 : prev))
  }, [visibleSlides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev))
  }, [])
  
  const toggleHiddenSlides = () => {
    setShowHiddenSlides((prev) => !prev)
    setCurrentSlide(0)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  const [isExporting, setIsExporting] = useState(false)

  const handleExportPptx = async () => {
    setIsExporting(true)
    try {
      await exportToPptx()
    } catch (error) {
      console.error("Erro ao exportar:", error)
    } finally {
      setIsExporting(false)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault()
        nextSlide()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        prevSlide()
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen()
      } else if (e.key === "Escape") {
        setIsFullscreen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide])

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  const CurrentSlideComponent = visibleSlides[currentSlide]?.component || visibleSlides[0].component

  return (
    <div className="min-h-screen bg-[var(--meli-dark)] flex flex-col">
      {/* Navigation Bar */}
      {!isFullscreen && (
        <nav className="bg-[var(--meli-dark-alt)] border-b border-white/10 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[var(--meli-yellow)] rounded flex items-center justify-center">
              <Maximize2 className="w-5 h-5 text-[var(--meli-dark)]" />
            </div>
            <span className="text-white font-medium text-sm">
              Control Tower — Proposta de Estrutura
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-white/60 text-sm">
              {currentSlide + 1} / {visibleSlides.length}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleExportPptx}
              disabled={isExporting}
              className="text-white/80 hover:text-white hover:bg-white/10 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              {isExporting ? "Exportando..." : "Baixar PPTX"}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleFullscreen}
              className="text-white/80 hover:text-white hover:bg-white/10"
            >
              {isFullscreen ? "Sair" : "Tela cheia (F)"}
            </Button>
          </div>
        </nav>
      )}

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Sidebar - Slide Navigator */}
        {!isFullscreen && (
          <div className="relative flex">
            {/* Toggle Button - Always Visible */}
            <button
              onClick={toggleSidebar}
              className="absolute top-4 -right-8 z-10 bg-[var(--meli-dark-alt)] border border-white/10 rounded-r-lg p-2 hover:bg-white/10 transition-colors"
              style={{ left: isSidebarOpen ? "224px" : "0px" }}
            >
              {isSidebarOpen ? (
                <PanelLeftClose className="w-4 h-4 text-white/70" />
              ) : (
                <PanelLeft className="w-4 h-4 text-white/70" />
              )}
            </button>

            <aside className={`bg-[var(--meli-dark-alt)] border-r border-white/10 overflow-y-auto overflow-x-hidden transition-all duration-300 ${
              isSidebarOpen ? "w-56 p-3" : "w-0 p-0"
            }`}>
              {isSidebarOpen && (
                <div className="space-y-1">
                  {visibleSlides.map((slide, index) => (
                    <button
                      key={slide.id}
                      onClick={() => goToSlide(index)}
                      className={`w-full text-left px-3 py-2 rounded text-sm transition-colors whitespace-nowrap ${
                        currentSlide === index
                          ? "bg-[var(--meli-yellow)] text-[var(--meli-dark)] font-medium"
                          : slide.hidden 
                            ? "text-white/40 hover:bg-white/10 hover:text-white/60 italic"
                            : "text-white/70 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <span className="mr-2">{slide.displayId}.</span>
                      {slide.title}
                      {slide.hidden && <EyeOff className="w-3 h-3 inline ml-1 opacity-50" />}
                    </button>
                  ))}
                  
                  {/* Toggle Hidden Slides Button */}
                  <button
                    onClick={toggleHiddenSlides}
                    className="w-full text-left px-3 py-2 rounded text-xs transition-colors whitespace-nowrap text-white/40 hover:bg-white/10 hover:text-white/60 border-t border-white/10 mt-2 pt-3 flex items-center gap-2"
                  >
                    {showHiddenSlides ? (
                      <>
                        <EyeOff className="w-3 h-3" />
                        Ocultar slides extras
                      </>
                    ) : (
                      <>
                        <Eye className="w-3 h-3" />
                        Mostrar slides ocultos
                      </>
                    )}
                  </button>
                </div>
              )}
            </aside>
          </div>
        )}

        {/* Slide Area */}
        <main className="flex-1 flex items-center justify-center p-4 relative">
          {/* Slide Container - 16:9 Aspect Ratio */}
          <div
            className={`relative bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ${
              isFullscreen
                ? "w-full h-full rounded-none"
                : "w-full max-w-6xl aspect-video"
            }`}
          >
            <CurrentSlideComponent />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white transition-opacity ${
              currentSlide === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-black/50"
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide === visibleSlides.length - 1}
            className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white transition-opacity ${
              currentSlide === visibleSlides.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-black/50"
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </main>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-[var(--meli-dark-alt)]">
        <div
          className="h-full bg-[var(--meli-yellow)] transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / visibleSlides.length) * 100}%` }}
        />
      </div>
    </div>
  )
}
