import ContactMeCard from '@/lib/components/cards/contact-me/contact-me-card.component'
import ContactMeSection from '@/lib/components/sections/landing/contact-me.components'
import FeaturesSection from '@/lib/components/sections/landing/features/features.components'
import { featureData } from '@/lib/components/sections/landing/features/features.data'
import FooterSection from '@/lib/components/sections/landing/footer.components'
import HeroSection from '@/lib/components/sections/landing/hero.components'
import PlatformSection from '@/lib/components/sections/landing/platforms.component'
import ToolsSection from '@/lib/components/sections/landing/tools.components'

export default function Home() {
  return (
    <div>
      <HeroSection />

      <div className='bg-gray-800 px-4 sm:px-16 py-12'>
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
      <ContactMeSection />
    </div>
  )
}
