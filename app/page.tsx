import { AnnouncementBar } from '@/components/announcement-bar'
import { Hero } from '@/components/hero'
import { ProblemMirror } from '@/components/problem-mirror'
import { PossibilityTransition } from '@/components/possibility-transition'
import { ProductReveal } from '@/components/product-reveal'
import { DailyRitual } from '@/components/daily-ritual'
import { InsideBook } from '@/components/inside-book'
import { Benefits } from '@/components/benefits'
import { Lifestyle } from '@/components/lifestyle'
import { VideoCarousel } from '@/components/video-carousel'
import { Concept365 } from '@/components/concept-365'
import { Gift } from '@/components/gift'
import { Offer } from '@/components/offer'
import { Trust } from '@/components/trust'
import { Faq } from '@/components/faq'
import { FinalCta } from '@/components/final-cta'
import { Footer } from '@/components/footer'
import { StickyBuy } from '@/components/sticky-buy'

export default function Page() {
  return (
    <>
      <AnnouncementBar />
      <main>
        <Hero />
        <ProblemMirror />
        <PossibilityTransition />
        <ProductReveal />
        <DailyRitual />
        <InsideBook />
        <Benefits />
        <Lifestyle />
        <VideoCarousel />
        <Concept365 />
        <Gift />
        <Offer />
        <Trust />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyBuy />
    </>
  )
}
