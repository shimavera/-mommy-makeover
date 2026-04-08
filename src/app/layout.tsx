import type { Metadata } from "next"
import { Source_Sans_3, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RevealObserver } from "@/components/reveal-observer"
import { WhatsappFab } from "@/components/whatsapp-fab"

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mommy Makeover | Smart Plástica - São Paulo",
  description:
    "Mommy Makeover na Smart Plástica. Combinação personalizada de procedimentos para mamãs que querem se reconectar com o próprio corpo. Cirurgiões SBCP, hospital de referência.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${sourceSans.variable} ${cormorant.variable}`}>
      <body className="font-body bg-brand-white text-brand-dark">
        <Header />
        <main>{children}</main>
        <Footer />
        <RevealObserver />
        <WhatsappFab />
      </body>
    </html>
  )
}
