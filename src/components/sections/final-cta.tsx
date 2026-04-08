import { CONTACT } from "@/lib/constants"
import { SvgCurve } from "@/components/svg-curve"

export function FinalCta() {
  return (
    <section className="relative py-16 md:py-28 bg-brand-dark text-white overflow-hidden">
      <SvgCurve position="top" fill="#5b2c1e" />

      {/* Decorative gradient blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-light/10 rounded-full blur-3xl" />

      <div data-reveal className="relative max-w-4xl mx-auto px-4 text-center">
        <span className="text-brand-light uppercase text-sm font-semibold tracking-widest">
          O PRÓXIMO PASSO É SEU
        </span>
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl mt-4 mb-4 leading-[1.05]">
          A CONVERSA É SEM COMPROMISSO.
          <br />
          <span className="text-brand-light">A DECISÃO É SUA.</span>
        </h2>
        <p className="font-display italic text-lg md:text-xl text-brand-light mb-6 tracking-wide">
          Onde o sonho vira decisão.
        </p>
        <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Converse com uma consultora especializada. Entenda se o Mommy Makeover
          é para você, como funciona o planejamento e qual o caminho para
          recuperar seu corpo com segurança.
        </p>

        <a
          href={CONTACT.whatsappAgenda}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-brand-dark rounded-full pl-7 pr-2 py-3 text-base md:text-lg font-semibold hover:bg-brand-beige transition group"
        >
          Agendar minha consulta
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-dark text-white transition group-hover:rotate-45">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </span>
        </a>

        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 mt-10 text-xs md:text-sm text-white/60">
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-light">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Sem compromisso</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-light">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Consultora dedicada</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-light">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Atendimento Seg-Sex, 8h-18h</span>
          </div>
        </div>
      </div>
    </section>
  )
}
