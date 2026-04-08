import { SectionBridge } from "@/components/section-bridge"

export function Pain() {
  const points = [
    {
      title: "Flacidez abdominal que não melhora com exercício",
      text: "A gestação altera a estrutura muscular e da pele do abdômen. Nenhuma rotina de treino consegue reverter a diástase ou o excesso de pele.",
    },
    {
      title: "Seios que perderam volume e firmeza",
      text: "A amamentação e as mudanças hormonais transformam o formato e a sustentação das mamas. O espelho mostra algo diferente do que você lembra.",
    },
    {
      title: "Autoestima que ficou diferente depois da gestação",
      text: "Você ama ser mãe. Mas sente que perdeu a conexão com o próprio corpo. Quer se reconhecer de novo quando se olha.",
    },
  ]

  return (
    <section className="relative py-16 md:py-24 bg-brand-white">
      <div className="max-w-5xl mx-auto px-4">
        <div data-reveal className="text-center mb-14">
          <span className="text-brand-primary uppercase text-sm font-semibold tracking-widest">
            SE VOCÊ SE IDENTIFICA
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mt-3 leading-tight max-w-3xl mx-auto">
            VOCÊ SE RECONHECE?
          </h2>
          <p className="text-brand-dark/75 text-base md:text-lg leading-relaxed mt-5 max-w-2xl mx-auto">
            A maternidade transforma tudo — inclusive a relação com o próprio corpo.
            Esses incômodos são mais comuns do que você imagina.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {points.map((p, i) => (
            <div
              key={p.title}
              data-reveal
              data-reveal-delay={i + 1}
              className="border-l-2 border-brand-primary pl-5 py-2"
            >
              <h3 className="font-display text-xl md:text-2xl text-brand-dark mb-2">{p.title}</h3>
              <p className="text-brand-dark/75 text-sm md:text-base leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <p data-reveal className="text-center mt-14 font-display text-2xl md:text-3xl text-brand-dark italic">
          Existe um caminho. E ele tem nome:{" "}
          <span className="text-brand-primary not-italic font-semibold">Mommy Makeover.</span>
        </p>
      </div>

      <SectionBridge align="center" size="md" />
    </section>
  )
}
