"use client"

import { useRef, useState } from "react"
import { SectionBridge } from "@/components/section-bridge"

const VIDEOS = [
  {
    src: "/videos/nohospital.mp4",
    label: "Conheça o centro cirúrgico",
    description: "Hospital de referência com infraestrutura completa para sua segurança.",
  },
  {
    src: "/videos/nohospitalatendimento.mp4",
    label: "A experiência do atendimento",
    description: "Acolhimento humanizado do primeiro contato ao pós-operatório.",
  },
]

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 md:w-8 md:h-8 text-brand-dark translate-x-0.5">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function VideoCard({ video }: { video: (typeof VIDEOS)[number] }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const el = ref.current
    if (!el) return
    if (playing) {
      el.pause()
    } else {
      el.play()
    }
    setPlaying(!playing)
  }

  return (
    <div className="flex flex-col">
      <div
        className="relative rounded-2xl overflow-hidden bg-brand-dark shadow-lg cursor-pointer group"
        style={{ aspectRatio: "9 / 16" }}
        onClick={toggle}
      >
        <video
          ref={ref}
          src={video.src}
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          onEnded={() => setPlaying(false)}
        />
        {!playing && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/95 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
              <PlayIcon />
            </div>
          </div>
        )}
      </div>
      <h3 className="font-display text-lg md:text-xl text-brand-dark mt-4">{video.label}</h3>
      <p className="text-brand-dark/70 text-sm leading-relaxed mt-1">{video.description}</p>
    </div>
  )
}

export function Structure() {
  return (
    <section className="relative py-16 md:py-24 bg-brand-beige">
      <div className="max-w-5xl mx-auto px-4">
        <div data-reveal className="text-center mb-10">
          <span className="text-brand-primary uppercase text-sm font-semibold tracking-widest">
            ESTRUTURA &amp; EXPERIÊNCIA
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mt-3 leading-tight">
            VEJA ONDE TUDO ACONTECE
          </h2>
          <p className="text-brand-dark/75 text-base md:text-lg leading-relaxed mt-4 max-w-2xl mx-auto">
            Hospital de referência, equipe dedicada e infraestrutura pensada para a sua segurança e conforto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
          {VIDEOS.map((v, i) => (
            <div key={v.src} data-reveal data-reveal-delay={i + 1}>
              <VideoCard video={v} />
            </div>
          ))}
        </div>
      </div>

      <SectionBridge align="center" size="md" />
    </section>
  )
}
