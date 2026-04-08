import { SvgCurve } from "@/components/svg-curve"
import { SectionBridge } from "@/components/section-bridge"

export function WhatIs() {
  return (
    <section id="o-que-e" className="relative py-16 md:py-24 bg-brand-beige scroll-mt-20">
      <SvgCurve position="top" fill="#dfd9cf" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <div data-reveal>
              <span className="text-brand-primary uppercase text-sm font-semibold tracking-widest">
                O PROCEDIMENTO
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mt-3 mb-6 leading-tight">
                O QUE É MOMMY MAKEOVER?
              </h2>
            </div>

            <div data-reveal data-reveal-delay="1" className="space-y-4 text-brand-dark/75 text-base md:text-lg leading-relaxed">
              <p>
                O Mommy Makeover é uma combinação de procedimentos cirúrgicos pensada para restaurar
                o corpo da mulher após a gestação e a amamentação.
              </p>
              <p>
                Em vez de realizar várias cirurgias separadas, o Mommy Makeover permite tratar
                abdômen, mamas e contorno corporal em um único tempo cirúrgico — com uma só
                anestesia e uma só recuperação.
              </p>
              <p>
                Cada plano é individualizado. O cirurgião avalia seu caso e define quais
                procedimentos fazem sentido para você, respeitando suas necessidades e expectativas.
              </p>
            </div>
          </div>

          {/* Video */}
          <div data-reveal data-reveal-delay="2">
            <div className="rounded-2xl overflow-hidden aspect-[4/5]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/videomulher.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      <SvgCurve position="bottom" fill="#faf8f6" />
      <SectionBridge align="right" size="md" />
    </section>
  )
}
