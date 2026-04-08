import { SITE, CONTACT, ADDRESS } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="font-display text-2xl md:text-3xl mb-2">{SITE.name}</p>
        <p className="text-white/50 text-sm mb-8">{SITE.slogan}</p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm text-white/70 mb-8">
          <span>{ADDRESS.full}</span>
          <span className="hidden md:inline text-white/30">|</span>
          <a
            href={`tel:${CONTACT.phoneClean}`}
            className="hover:text-white transition"
          >
            {CONTACT.phone}
          </a>
          <span className="hidden md:inline text-white/30">|</span>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            @smart.plastica
          </a>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
