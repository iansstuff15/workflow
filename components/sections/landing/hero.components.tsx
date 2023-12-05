import AppButton from '@/components/button/appButtons'
import heroImage from '@/assets/hero-image.png'
import { Snippet } from '@nextui-org/snippet'
import Image from 'next/image'
import { githubLink } from '@/config/constants/links/links'
const HeroSection = () => {
  return (
    <div className='grid place-items-center h-screen text-center pt-48 overflow-hidden'>
      <div className='space-y-4 '>
        <h1 className='font-bold text-6xl'>
          Your HR Management{' '}
          <strong className='bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent '>
            Superapp
          </strong>
        </h1>
        <h2 className='font-semibold text-4xl text-slate-600'>
          A once stop solution for HR needs
        </h2>
        <div className='grid grid-cols-2 gap-3 px-48'>
          <AppButton label='Contact Me' variant={'outline'} />
          <AppButton
            label='Request Demo'
            className='bg-gradient-to-r from-blue-600 to-indigo-600'
          />
        </div>
        <Snippet>{`git clone ${githubLink}.git`}</Snippet>
        <br /> <br />
        <div className='shadow-[0_150px_200px_-15px_rgba(33,112,159,0.95)]'>
          <div className='bg-gradient-to-r from-blue-600 to-indigo-600 p-1 rounded-xl shadow-[0_180px_200px_-15px_rgba(52,33,159,0.75)] '>
            <div className=' grid grid-cols-1 rounded-xl overflow-hidden'>
              <Image
                src={heroImage}
                alt='hero workplace image'
                width={700}
                height={200}
                objectFit={'cover'}
                className='w-full'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HeroSection
