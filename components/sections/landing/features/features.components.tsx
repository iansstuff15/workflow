import AppButton from '@/components/button/appButtons'
import heroImage from '@/assets/hero-image.png'
import { Snippet } from '@nextui-org/snippet'
import Image from 'next/image'
import { githubLink } from '@/config/constants/links/links'
import { featureData } from './features.data'
const FeaturesSection = () => {
  return (
    <>
      {featureData.map((data, index) => {
        return (
          <div className='grid place-items-center h-screen pt-48 px-16 overflow-hidden grid-cols-2'>
            <div className='space-y-2 '>
              <h2 className='font-semibold text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
                {data.title}
              </h2>
              <h1 className='font-bold text-6xl'>{data.subtitle}</h1>
              <p>{data.description}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}
export default FeaturesSection
