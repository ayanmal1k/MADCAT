import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { TokenomicsSection } from '@/components/tokenomics-section'
import { RoadmapSection } from '@/components/roadmap-section'
import { SocialSection } from '@/components/social-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <AboutSection />
      <TokenomicsSection />
      <RoadmapSection />
      <SocialSection />
      <Footer />
    </main>
  )
}

