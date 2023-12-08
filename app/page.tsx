import FeaturesSection from '@/components/sections/landing/features/features.components'
import { featureData } from '@/components/sections/landing/features/features.data'
import FooterSection from '@/components/sections/landing/footer.components'
import HeroSection from '@/components/sections/landing/hero.components'
import PlatformSection from '@/components/sections/landing/platforms.component'
import ToolsSection from '@/components/sections/landing/tools.components'
import Splash from '@/components/splash/splash'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ToolsSection />
      <div className='bg-gray-800 px-16 py-12'>
        {featureData.map((data, index) => {
          return (
            <FeaturesSection
              key={index}
              title={data.title}
              subtitle={data.subtitle}
              description={data.description}
              lottie={data.lottie}
            />
          )
        })}
      </div>

      <PlatformSection />
      <FooterSection />
    </div>
  )
}
