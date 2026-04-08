import { CONTACT } from "@/lib/constants"
import { SvgCurve } from "@/components/svg-curve"

export function Hero() {
  return (
    <section className="relative min-h-[78vh] md:min-h-[82vh] w-full overflow-hidden bg-brand-dark">
      {/* Marquee background text */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="font-display text-[12vw] md:text-[10vw] text-white/[0.04] uppercase tracking-wider mx-8"
            >
              MOMMY MAKEOVER
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[78vh] md:min-h-[82vh] items-center">
        <div className="max-w-7xl mx-auto px-4 w-full py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-brand-light uppercase text-xs md:text-sm font-semibold tracking-[0.2em] mb-5">
              MOMMY MAKEOVER &middot; SÃO PAULO
            </span>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f5efe9] leading-[1.05] mb-6">
              Seu corpo conta sua história.
              <br />
              <span className="text-brand-light italic">
                A gente reescreve o capítulo que você quiser.
              </span>
            </h1>

            <p className="text-[#f5efe9]/85 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Combine procedimentos em uma única cirurgia. Recupere seu corpo,
              sua confiança e sua autoestima com segurança e cuidado.
            </p>

            <div className="flex items-center justify-center mb-12">
              <a
                href={CONTACT.whatsappAgenda}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-brand-dark rounded-full pl-6 pr-2 py-2.5 text-sm md:text-base font-semibold hover:bg-brand-beige transition group"
              >
                Agendar minha consulta
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-dark text-white transition group-hover:rotate-45">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Trust strip */}
            <div className="grid grid-cols-2 items-center gap-4 md:gap-8 border-t border-white/10 pt-5 md:pt-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2.5 md:gap-3">
                <img
                  src="/images/selo-realizando-sonhos-light.svg"
                  alt=""
                  className="w-11 h-11 md:w-14 md:h-14 shrink-0"
                />
                <div className="leading-tight text-left">
                  <p className="font-display text-xl md:text-2xl text-[#f0eae1]">+ 5 anos</p>
                  <p className="text-white/60 text-[10px] md:text-xs uppercase tracking-wider">realizando sonhos</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2.5 md:gap-3">
                <img
                  src="/images/selo-smart-lovers-light.svg"
                  alt=""
                  className="w-11 h-11 md:w-14 md:h-14 shrink-0"
                />
                <div className="leading-tight text-left">
                  <p className="font-display text-xl md:text-2xl text-[#f0eae1]">+ de 2.000</p>
                  <p className="text-white/60 text-[10px] md:text-xs uppercase tracking-wider">Smart Lovers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curve transition to next section */}
      <SvgCurve position="bottom" fill="#faf8f6" />
    </section>
  )
}
