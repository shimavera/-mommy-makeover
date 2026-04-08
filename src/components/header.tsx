import Image from "next/image"
import { CONTACT } from "@/lib/constants"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-18">
        <a href="/" className="shrink-0">
          <Image
            src="/images/logo.svg"
            alt="Smart Plástica"
            width={140}
            height={36}
            className="h-8 md:h-9 w-auto"
            priority
          />
        </a>

        <a
          href={CONTACT.whatsappAgenda}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-white text-brand-dark rounded-full pl-5 pr-2 py-2 text-sm font-semibold hover:bg-brand-beige transition group"
        >
          Agendar minha consulta
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-dark text-white transition group-hover:rotate-45">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </span>
        </a>
      </div>
    </header>
  )
}
