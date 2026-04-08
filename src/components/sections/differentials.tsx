export function Differentials() {
  const items = [
    {
      number: "01.",
      pillar: "SEGURANÇA",
      title: "Hospital de referência",
      text: "Centro cirúrgico hospitalar completo, anestesista titulado e protocolos rigorosos do pré ao pós-operatório.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      number: "02.",
      pillar: "VIABILIDADE",
      title: "Um caminho possível",
      text: "Condições de parcelamento pensadas para tornar sua decisão planejada, consciente e sem sacrifício financeiro.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M2 10h20" />
        </svg>
      ),
    },
    {
      number: "03.",
      pillar: "EXPERTISE",
      title: "Cirurgiões SBCP",
      text: "Profissionais certificados pela Sociedade Brasileira de Cirurgia Plástica. Estudo contínuo e domínio técnico que sustenta resultados consistentes.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
    },
    {
      number: "04.",
      pillar: "CUIDADO",
      title: "Você nunca caminha sozinha",
      text: "Consultora dedicada do primeiro contato ao último retorno. Drenagens presenciais, escuta ativa e presença de verdade.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
  ]

  return (
    <section className="relative py-16 md:py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4">
        <div data-reveal className="text-center mb-14 max-w-2xl mx-auto">
          <span className="text-brand-primary uppercase text-sm font-semibold tracking-widest">
            POR QUE NA SMART PLÁSTICA
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mt-3 leading-tight">
            QUATRO PILARES QUE TE PROTEGEM
          </h2>
          <p className="text-brand-dark/75 text-base md:text-lg leading-relaxed mt-4">
            Tornamos possível realizar sonhos — com método, técnica e presença.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <div
              key={it.pillar}
              data-reveal
              data-reveal-delay={(i % 3) + 1}
              className="bg-[#e8ddd3] rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 bg-brand-dark rounded-lg flex items-center justify-center text-white">
                  {it.icon}
                </div>
                <span className="font-display text-2xl text-brand-primary/40">{it.number}</span>
              </div>
              <span className="text-brand-primary uppercase text-[10px] font-bold tracking-[0.2em] mb-2">
                {it.pillar}
              </span>
              <h3 className="font-display text-xl text-brand-dark mb-2">{it.title}</h3>
              <p className="text-brand-dark/75 text-sm leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
