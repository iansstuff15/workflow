'use client'
import AppButton from '@/components/button/appButtons'
import heroImage from '@/assets/hero-image.png'
import { Snippet } from '@nextui-org/snippet'
import Image from 'next/image'
import { githubLink } from '@/config/constants/links/links'
import { useEffect, useRef } from 'react'
import { timeline } from './animation'

const HeroSection = () => {
  const initialized = useRef(false)
  const heroTitlerRef = useRef(null)
  const heroSubTitleRef = useRef(null)
  const commandRef = useRef(null)
  const buttonContainer = useRef(null)
  const heroImageRef = useRef(null)

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
    <div className='grid place-items-center h-screen text-center pt-48 overflow-hidden'>
      <div className='space-y-4 '>
        <h1 className='font-bold text-6xl' ref={heroTitlerRef}>
          Your HR Management{' '}
          <strong className='bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent '>
            Superapp
          </strong>
        </h1>
        <h2
          className='font-semibold text-4xl text-slate-600'
          ref={heroSubTitleRef}
        >
          A once stop solution for HR needs
        </h2>
        <div className='grid grid-cols-2 gap-3 px-48' ref={buttonContainer}>
          <AppButton label='Contact Me' variant={'outline'} block />
          <AppButton
            label='Request Demo'
            className='bg-gradient-to-r from-blue-600 to-indigo-600'
            block
          />
        </div>
        <Snippet ref={commandRef}>{`git clone ${githubLink}.git`}</Snippet>
        <br /> <br />
        <div
          className='shadow-[0_150px_200px_-15px_rgba(33,112,159,0.95)]'
          ref={heroImageRef}
        >
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
