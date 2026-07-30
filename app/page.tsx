import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { ContractSection } from '@/components/contract-section'
import { AboutSection } from '@/components/about-section'
import { TokenomicsSection } from '@/components/tokenomics-section'
import { RoadmapSection } from '@/components/roadmap-section'
import { SocialSection } from '@/components/social-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <ContractSection />
      <AboutSection />
      <TokenomicsSection />
      <RoadmapSection />
      <SocialSection />
      <Footer />
    </main>
  )
}

