import { CONTACT } from "@/lib/constants"
import { SvgCurve } from "@/components/svg-curve"

export function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Consulta",
      text: "Avaliação personalizada com cirurgião SBCP. Entendemos suas necessidades e definimos o melhor caminho.",
    },
    {
      n: "02",
      title: "Planejamento",
      text: "Definição dos procedimentos combinados, exames prévios e apresentação do plano cirúrgico completo.",
    },
    {
      n: "03",
      title: "Cirurgia",
      text: "Realizada em hospital de referência, com anestesista titulado e equipe cirúrgica completa.",
    },
    {
      n: "04",
      title: "Recuperação",
      text: "Acompanhamento dedicado no pós-operatório. Retornos programados, drenagens e suporte da equipe.",
    },
  ]

  return (
    <section id="como-funciona" className="relative py-16 md:py-24 bg-brand-beige scroll-mt-20">
      <SvgCurve position="top" fill="#dfd9cf" />

      <div className="max-w-7xl mx-auto px-4">
        <div data-reveal className="text-center mb-14">
          <span className="text-brand-light uppercase text-sm font-semibold tracking-widest">
            COMO FUNCIONA
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mt-3 leading-tight">
            SUA JORNADA NA SMART PLÁSTICA
          </h2>
          <p className="text-brand-dark/75 text-base md:text-lg leading-relaxed mt-4 max-w-2xl mx-auto">
            Um caminho claro, seguro e acompanhado — em 4 etapas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div
              key={s.n}
              data-reveal
              data-reveal-delay={i + 1}
              className="relative bg-white/60 border border-brand-dark/5 rounded-2xl p-6 hover:bg-white hover:shadow-md transition"
            >
              {/* Connector line — hidden on mobile, visible on lg between cards */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-2.5 w-5 h-0.5 bg-brand-primary/30" />
              )}
              <span className="font-display text-5xl text-brand-primary/30 block mb-4">{s.n}</span>
              <h3 className="font-display text-xl text-brand-dark mb-3">{s.title}</h3>
              <p className="text-brand-dark/70 text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <div data-reveal className="text-center mt-12">
          <a
            href={CONTACT.whatsappAgenda}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-dark text-white rounded-full pl-6 pr-2 py-2.5 text-sm md:text-base font-semibold hover:bg-brand-warm transition group"
          >
            Começar pela consulta
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition group-hover:rotate-45">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      <SvgCurve position="bottom" fill="#faf8f6" />
    </section>
  )
}
