import FeaturesSection from '@/components/sections/landing/features/features.components'
import FooterSection from '@/components/sections/landing/footer.components'
import HeroSection from '@/components/sections/landing/hero.components'
import ToolsSection from '@/components/sections/landing/tools.components'
import Splash from '@/components/splash/splash'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ToolsSection />
      <FeaturesSection />
      <FooterSection />
    </div>
  )
}
