export function Procedures() {
  const items = [
    {
      number: "01.",
      title: "Abdominoplastia",
      text: "Repara a diástase dos músculos retos, remove o excesso de pele e redefine o contorno abdominal. O abdômen volta a ter firmeza e estrutura.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      number: "02.",
      title: "Lipoaspiração",
      text: "Esculpe e refina os contornos do corpo, removendo depósitos de gordura localizada que resistem a dieta e exercício.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      number: "03.",
      title: "Mamoplastia",
      text: "Restaura o volume, a forma e a sustentação das mamas. Pode incluir prótese, redução ou lifting, conforme a necessidade de cada paciente.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="relative py-16 md:py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4">
        <div data-reveal className="text-center mb-14 max-w-2xl mx-auto">
          <span className="text-brand-primary uppercase text-sm font-semibold tracking-widest">
            TUDO EM UMA SÓ CIRURGIA
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mt-3 leading-tight">
            PROCEDIMENTOS COMBINADOS
          </h2>
          <p className="text-brand-dark/75 text-base md:text-lg leading-relaxed mt-4">
            Cada procedimento é personalizado para o seu corpo e os seus objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <div
              key={it.title}
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
              <h3 className="font-display text-xl text-brand-dark mb-2">{it.title}</h3>
              <p className="text-brand-dark/75 text-sm leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
