'use client'
import AppButton from '@/lib/components/button/appButtons'
import heroImage from '@/assets/hero-image.png'
import { Snippet } from '@nextui-org/snippet'
import Image from 'next/image'
import { githubLink } from '@/lib/config/constants/links/links'
import { useEffect, useRef } from 'react'
import { timeline } from './animation'
import ToolsSection from './tools.components'
import ContactMeDialog from '@/lib/utilities/providers/overlays/dialog/contact-me/contact-me.dialog'
import RequestDemoDialog from '@/lib/utilities/providers/overlays/dialog/request-demo/request-demo'

const HeroSection = () => {
  const initialized = useRef(false)
  const heroTitlerRef = useRef(null)
  const heroSubTitleRef = useRef(null)
  const commandRef = useRef(null)
  const buttonContainer = useRef(null)
  const heroImageRef = useRef(null)
  const toolsRef = useRef(null)
  const animate = () => {
    initialized.current = true
    timeline.from(heroTitlerRef.current, {
      opacity: 0,
      y: 10,
    })
    timeline.to(heroTitlerRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.2,
    })
    timeline.from(heroSubTitleRef.current, {
      opacity: 0,
      y: 10,
    })
    timeline.to(heroSubTitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.2,
    })
    timeline.from(buttonContainer.current, {
      opacity: 0,
      x: 10,
    })
    timeline.to(buttonContainer.current, {
      opacity: 1,
      x: 0,
      stagger: 0.4,

      duration: 0.2,
    })

    timeline.from(commandRef.current, {
      opacity: 0,
      x: 10,
    })
    timeline.to(commandRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.2,
    })
    timeline.from(toolsRef.current, {
      opacity: 0,
      y: -10,
    })
    timeline.to(toolsRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.2,
    })
    timeline.from(heroImageRef.current, {
      opacity: 0,
      scale: 1.01,
    })
    timeline.to(heroImageRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.2,
    })
    timeline.to(heroImageRef.current, {
      scrollTrigger: {
        trigger: heroImageRef.current,
        start: 'top center',
        toggleActions: 'restart pause reverse pause',
        scrub: 1.8,
      },
      scale: 1.5,
    })
  }
  useEffect(() => {
    if (!initialized.current) {
      animate()
    }
  }, [])
  return (
    <div
      className='grid place-center-end text-center px-2 pt-20 sm:pt-36 lg:pt-48 overflow-hidden '
      style={{ minHeight: '70vh' }}
    >
      <div className='space-y-1 sm:space-y-4 '>
        <h1 className='bg-neutral-900 text-white rounded-full w-fit py-2 px-4 mx-auto text-xs md:text-sm lg:text-md'>
          Project is underconstruction and some page or features may not work as
          intended
        </h1>
        <h1 className='font-bold text-5xl lg:text-6xl' ref={heroTitlerRef}>
          Your HR Management{' '}
          <strong className='bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent '>
            Superapp
          </strong>
        </h1>
        <h2
          className='font-semibold text-lg sm:text-3xl lg:text-4xl text-slate-600'
          ref={heroSubTitleRef}
        >
          A once stop solution for HR needs
        </h2>
        <div
          className='flex flex-col-reverse sm:grid grid-cols-2 gap-3 sm:px-20 lg:px-40 xl:px-96'
          ref={buttonContainer}
        >
          <ContactMeDialog>
            <AppButton label='Contact Me' variant={'outline'} block />
          </ContactMeDialog>
          <RequestDemoDialog>
            <AppButton
              label='Request Demo'
              className='bg-gradient-to-r from-blue-600 to-indigo-600'
              block
            />
          </RequestDemoDialog>
        </div>
        <div className=' hidden sm:block'>
          <Snippet
            variant='shadow'
            ref={commandRef}
            className='text-xs lg:text-md'
          >
            {`git clone ${githubLink}.git`}
          </Snippet>
        </div>
        <div ref={toolsRef}>
          <ToolsSection />
        </div>

        <div
          className='shadow-[0_150px_200px_-15px_rgba(33,112,159,0.95)] hidden sm:block'
          ref={heroImageRef}
        >
          <div className='bg-gradient-to-r from-blue-600 to-indigo-600 mx-16 p-1 rounded-xl shadow-[0_180px_200px_-15px_rgba(52,33,159,0.75)]'>
            <div className=' grid grid-cols-1 rounded-xl overflow-hidden'>
              <Image
                src={heroImage}
                alt='hero workplace image'
                width={500}
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
