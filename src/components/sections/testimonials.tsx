"use client"

import { useRef, useState, useEffect } from "react"
import { SvgCurve } from "@/components/svg-curve"
import { SectionBridge } from "@/components/section-bridge"

const VIDEO_TESTIMONIALS = [
  { id: "xxydFfbiVHA" },
  { id: "2_qXau_fWm4" },
  { id: "I4-A80NGYaw" },
  { id: "8A9bx97mdyE" },
]

const TEXT_TESTIMONIALS = [
  {
    quote:
      "Depois de duas gestações, eu não me reconhecia mais. O Mommy Makeover me devolveu a confiança que eu achei que tinha perdido pra sempre.",
    name: "Camila R.",
    detail: "Paciente desde 2023",
  },
  {
    quote:
      "A equipe inteira me acompanhou do começo ao fim. Nunca me senti sozinha. A recuperação foi mais tranquila do que eu imaginava.",
    name: "Fernanda S.",
    detail: "Paciente desde 2024",
  },
  {
    quote:
      "Fiz abdominoplastia e mamoplastia juntas. O resultado ficou natural, exatamente como eu queria. Recomendo de olhos fechados.",
    name: "Patrícia M.",
    detail: "Paciente desde 2023",
  },
]

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 md:w-8 md:h-8 text-brand-dark translate-x-0.5">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const [playingIdx, setPlayingIdx] = useState<number | null>(null)

  const updateBoundaries = () => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 4)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
  }

  useEffect(() => {
    updateBoundaries()
    const el = trackRef.current
    if (!el) return
    el.addEventListener("scroll", updateBoundaries, { passive: true })
    window.addEventListener("resize", updateBoundaries)
    return () => {
      el.removeEventListener("scroll", updateBoundaries)
      window.removeEventListener("resize", updateBoundaries)
    }
  }, [])

  const scrollBy = (dir: "left" | "right") => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>("[data-card]")
    const step = (card?.offsetWidth ?? 320) + 20
    el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" })
  }

  return (
    <section className="relative py-16 md:py-24 bg-brand-beige">
      <SvgCurve position="top" fill="#dfd9cf" />

      <div className="max-w-7xl mx-auto px-4">
        <div data-reveal className="text-center mb-10">
          <span className="text-brand-primary uppercase text-sm font-semibold tracking-widest">
            QUEM JÁ PASSOU POR AQUI
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mt-3 leading-tight">
            HISTÓRIAS REAIS DE SMART LOVERS
          </h2>
          <p className="text-brand-dark/75 text-base md:text-lg leading-relaxed mt-4">
            Mães reais contando em primeira pessoa.
          </p>
        </div>

        {/* Video Testimonials Carousel */}
        <div className="relative mb-14">
          {/* Left arrow — desktop */}
          <button
            type="button"
            onClick={() => scrollBy("left")}
            disabled={atStart}
            aria-label="Vídeo anterior"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-30 h-12 w-12 items-center justify-center rounded-full bg-white text-brand-dark border border-brand-dark/10 shadow-lg hover:bg-brand-dark hover:text-white transition disabled:opacity-0 disabled:pointer-events-none"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Right arrow — desktop */}
          <button
            type="button"
            onClick={() => scrollBy("right")}
            disabled={atEnd}
            aria-label="Próximo vídeo"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-30 h-12 w-12 items-center justify-center rounded-full bg-white text-brand-dark border border-brand-dark/10 shadow-lg hover:bg-brand-dark hover:text-white transition disabled:opacity-0 disabled:pointer-events-none"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            className="flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-6 md:px-4 pb-2"
          >
            {VIDEO_TESTIMONIALS.map((v, i) => {
              const isPlaying = playingIdx === i
              const thumbnail = `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`

              return (
                <div
                  key={v.id}
                  data-card
                  className="snap-start shrink-0 w-[68vw] sm:w-[280px] md:w-[320px]"
                >
                  <div
                    className="relative rounded-2xl overflow-hidden bg-brand-dark shadow-lg"
                    style={{ aspectRatio: "9 / 16" }}
                  >
                    {isPlaying ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                        className="absolute inset-0 w-full h-full border-0"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                        title={`Depoimento ${i + 1}`}
                      />
                    ) : (
                      <button
                        type="button"
                        onClick={() => setPlayingIdx(i)}
                        aria-label={`Reproduzir depoimento ${i + 1}`}
                        className="group absolute inset-0 w-full h-full"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={thumbnail}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/95 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                            <PlayIcon />
                          </div>
                        </div>
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Mobile arrows */}
          <div className="flex md:hidden items-center justify-center gap-3 mt-6">
            <button
              type="button"
              onClick={() => scrollBy("left")}
              disabled={atStart}
              aria-label="Vídeo anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-dark border border-brand-dark/10 disabled:opacity-30"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollBy("right")}
              disabled={atEnd}
              aria-label="Próximo vídeo"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-dark text-white disabled:opacity-30"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Text Testimonials — compact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
          {TEXT_TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              data-reveal
              data-reveal-delay={i + 1}
              className="bg-white rounded-xl px-4 py-3 md:px-5 md:py-4 shadow-sm flex items-start gap-2.5"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-brand-primary/20 shrink-0 mt-0.5 md:w-5 md:h-5">
                <path
                  d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
                  fill="currentColor"
                />
                <path
                  d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
                  fill="currentColor"
                />
              </svg>
              <div>
                <p className="text-brand-dark/80 text-xs md:text-sm leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-semibold text-brand-dark text-[11px] md:text-xs mt-1.5">{t.name} <span className="font-normal text-brand-dark/50">— {t.detail}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SvgCurve position="bottom" fill="#faf8f6" />
      <SectionBridge align="center" size="md" />
    </section>
  )
}
