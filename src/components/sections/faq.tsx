"use client"

import { useState } from "react"
import { CONTACT } from "@/lib/constants"

const FAQ_ITEMS = [
  {
    q: "O que é o Mommy Makeover?",
    a: "É uma combinação de procedimentos cirúrgicos realizados em um único tempo cirúrgico, pensada para restaurar o corpo da mulher após a gestação e amamentação. Os procedimentos mais comuns incluem abdominoplastia, lipoaspiração e mamoplastia, mas o plano é sempre personalizado.",
  },
  {
    q: "Quais procedimentos estão incluídos?",
    a: "Os procedimentos mais frequentes são abdominoplastia (com reparo de diástase), lipoaspiração e mamoplastia (com ou sem prótese). O cirurgião avalia cada caso individualmente e recomenda a combinação mais adequada para os seus objetivos.",
  },
  {
    q: "Qual o tempo de recuperação?",
    a: "Em geral, a recuperação inicial leva de 2 a 3 semanas para atividades leves. Atividades físicas e esforços maiores são liberados gradualmente entre 30 e 60 dias. O acompanhamento pós-operatório com a equipe garante uma recuperação segura e acompanhada.",
  },
  {
    q: "É seguro combinar procedimentos?",
    a: "Sim, desde que realizado por cirurgiões qualificados em hospital de referência. A combinação de procedimentos é uma prática consagrada na cirurgia plástica, com protocolos rigorosos de segurança. Nossos cirurgiões são certificados pela SBCP.",
  },
  {
    q: "Quando posso fazer o Mommy Makeover?",
    a: "Recomenda-se aguardar pelo menos 6 meses após o parto e o término da amamentação, para que o corpo estabilize. O momento ideal é definido na consulta presencial, considerando seu histórico e condições de saúde.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="py-16 md:py-24 bg-brand-white">
      <div className="max-w-3xl mx-auto px-4">
        <div data-reveal className="text-center mb-14">
          <span className="text-brand-primary uppercase text-sm font-semibold tracking-widest">
            FAQ &middot; MOMMY MAKEOVER
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mt-3 leading-tight">
            AS DÚVIDAS QUE TODAS TÊM
          </h2>
        </div>

        <div data-reveal data-reveal-delay="1" className="space-y-0">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className="border-b border-brand-beige"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="flex items-center justify-between w-full cursor-pointer py-5 text-left"
                >
                  <span className="font-semibold text-brand-dark pr-4">{item.q}</span>
                  <span
                    className={`shrink-0 w-6 h-6 flex items-center justify-center text-brand-primary transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-brand-dark/75 leading-relaxed">{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-14 space-y-4">
          <p className="text-brand-dark/75">
            Ainda tem dúvida? Fale direto com a consultora.
          </p>
          <a
            href={CONTACT.whatsappDefault}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-dark text-white rounded-full pl-6 pr-2 py-2.5 text-sm md:text-base font-medium hover:bg-brand-warm transition group"
          >
            Tirar minha dúvida no WhatsApp
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition group-hover:rotate-45">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
