"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Maximize2, PanelLeftClose, PanelLeft, Eye, EyeOff } from "lucide-react"
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

const allSlides = [
  { id: 1, component: Slide1Capa, title: "Capa", hidden: false },
  { id: 2, component: Slide13Validacao, title: "Validação POC", hidden: false },
  { id: 3, component: Slide2POC, title: "O POC", hidden: false },
  { id: 4, component: Slide3Oportunidade, title: "A Oportunidade", hidden: false },
  { id: 5, component: Slide4Missao, title: "Missão", hidden: false },
  { id: 6, component: Slide5Frentes, title: "4 Frentes", hidden: false },
  { id: 7, component: Slide6Roteirizacao, title: "Roteirização", hidden: false },
  { id: 8, component: Slide7Tarefas, title: "Tarefas", hidden: false },
  { id: 9, component: Slide8Stakeholders, title: "Stakeholders", hidden: false },
  { id: 10, component: Slide9Produtos, title: "Produtos", hidden: false },
  { id: 11, component: Slide10Rituais, title: "Rituais", hidden: false },
  { id: 12, component: Slide11Estrutura, title: "Estrutura", hidden: false },
  { id: 13, component: Slide12Roadmap, title: "Roadmap", hidden: true },
  { id: 14, component: Slide14Impacto, title: "Impacto", hidden: false },
  { id: 15, component: Slide15ProximosPassos, title: "Próximos Passos", hidden: false },
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
    console.log("[v0] nextSlide chamado, currentSlide:", currentSlide, "visibleSlides.length:", visibleSlides.length)
    setCurrentSlide((prev) => {
      const newSlide = prev < visibleSlides.length - 1 ? prev + 1 : prev
      console.log("[v0] setCurrentSlide de", prev, "para", newSlide)
      return newSlide
    })
  }, [visibleSlides.length, currentSlide])

  const prevSlide = useCallback(() => {
    console.log("[v0] prevSlide chamado, currentSlide:", currentSlide)
    setCurrentSlide((prev) => {
      const newSlide = prev > 0 ? prev - 1 : prev
      console.log("[v0] setCurrentSlide de", prev, "para", newSlide)
      return newSlide
    })
  }, [currentSlide])
  
  const toggleHiddenSlides = () => {
    setShowHiddenSlides((prev) => !prev)
    setCurrentSlide(0)
  }

  const goToSlide = (index: number) => {
    console.log("[v0] goToSlide chamado com index:", index)
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
        <main className="flex-1 flex items-center justify-center p-4">
          {/* Slide Container with Navigation - 16:9 Aspect Ratio */}
          <div className="relative w-full max-w-6xl">
            {/* Navigation Arrows - Outside the slide container */}
            <button
              type="button"
              onClick={() => {
                console.log("[v0] Clicou no botão anterior")
                prevSlide()
              }}
              disabled={currentSlide === 0}
              className={`absolute -left-16 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 text-white transition-all ${
                currentSlide === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-black/70 hover:scale-110 cursor-pointer"
              }`}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              type="button"
              onClick={() => {
                console.log("[v0] Clicou no botão próximo")
                nextSlide()
              }}
              disabled={currentSlide === visibleSlides.length - 1}
              className={`absolute -right-16 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 text-white transition-all ${
                currentSlide === visibleSlides.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-black/70 hover:scale-110 cursor-pointer"
              }`}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Slide Content */}
            <div
              className={`relative bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ${
                isFullscreen
                  ? "w-full h-full rounded-none"
                  : "w-full aspect-video"
              }`}
            >
              <CurrentSlideComponent />
            </div>
          </div>
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
