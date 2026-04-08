"use client"

import { useEffect, useState } from "react"
import { CONTACT } from "@/lib/constants"

export function WhatsappFab() {
  const [shake, setShake] = useState(false)
  const [bubble, setBubble] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => {
      setBubble(true)
      setShake(true)
      const s = setTimeout(() => setShake(false), 1000)
      return () => clearTimeout(s)
    }, 12000)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 flex items-end gap-2">
      {/* Balao de fala */}
      {bubble && !dismissed && (
        <div className="animate-wa-bubble-in relative max-w-[240px] bg-white rounded-2xl rounded-br-sm shadow-xl px-4 py-3 mb-2 border border-brand-beige">
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Fechar"
            className="absolute -top-2 -left-2 w-6 h-6 bg-brand-dark text-white rounded-full flex items-center justify-center shadow-md hover:bg-brand-warm transition"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <a
            href={CONTACT.whatsappAgenda}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <p className="text-brand-dark text-sm font-semibold leading-snug">
              Quer conversar sobre o Mommy Makeover?
            </p>
            <p className="text-brand-dark/70 text-xs mt-1">
              Falar no WhatsApp &rarr;
            </p>
          </a>
          <span className="absolute -bottom-1 right-3 w-3 h-3 bg-white border-r border-b border-brand-beige rotate-45" />
        </div>
      )}

      {/* Botao WhatsApp */}
      <a
        href={CONTACT.whatsappAgenda}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className={`relative flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-[#25D366] shadow-xl hover:scale-110 transition-transform ${
          shake ? "animate-wa-shake" : ""
        }`}
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" style={{ animationDuration: "2.5s" }} />
        <svg
          viewBox="0 0 32 32"
          className="relative w-7 h-7 md:w-8 md:h-8 fill-white"
          aria-hidden
        >
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.917 2.722.917.817 0 2.15-.73 2.478-1.475.115-.26.188-.553.188-.83 0-.226 0-.302-.072-.42-.065-.096-.147-.143-.276-.215L19.11 17.205zM15.996 26.59c-5.768 0-10.56-4.792-10.56-10.56 0-5.77 4.792-10.56 10.56-10.56 5.77 0 10.56 4.79 10.56 10.56 0 5.768-4.79 10.56-10.56 10.56zM16 0C7.16 0 0 7.162 0 16c0 2.822.737 5.574 2.134 8.003L0 32l8.22-2.158a15.9 15.9 0 0 0 7.778 2.014c8.838 0 16-7.162 16-16 0-4.268-1.66-8.28-4.684-11.32A15.9 15.9 0 0 0 16 0z" />
        </svg>
      </a>
    </div>
  )
}
