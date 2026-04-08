import { Hero } from "@/components/sections/hero"
import { Pain } from "@/components/sections/pain"
import { WhatIs } from "@/components/sections/what-is"
import { Procedures } from "@/components/sections/procedures"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Differentials } from "@/components/sections/differentials"
import { Structure } from "@/components/sections/structure"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { FinalCta } from "@/components/sections/final-cta"

export default function MommyMakeoverPage() {
  return (
    <>
      <Hero />
      <Pain />
      <WhatIs />
      <Procedures />
      <HowItWorks />
      <Differentials />
      <Structure />
      <Testimonials />
      <FAQ />
      <FinalCta />
    </>
  )
}
