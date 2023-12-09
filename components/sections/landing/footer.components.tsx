'use client'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import Logo from '@/assets/icon.svg'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { timeline } from './animation'

const FooterSection = () => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const descriptionRef = useRef(null)
  const imageRef = useRef(null)
  const containerRef = useRef(null)
  const logoRef = useRef(null)
  const appNameRef = useRef(null)
  const creditRef = useRef(null)
  const initialized = useRef(false)

  const animate = () => {
    initialized.current = true
    timeline.from(logoRef.current, {
      opacity: 0,
      y: -10,
    })
    timeline.from(appNameRef.current, {
      opacity: 0,
      y: -10,
    })
    timeline.from(creditRef.current, {
      opacity: 0,
      y: 10,
    })
    timeline.from(titleRef.current, {
      opacity: 0,
      x: -10,
    })
    timeline.from(subtitleRef.current, {
      opacity: 0,
      x: 10,
    })
    timeline.from(descriptionRef.current, {
      opacity: 0,
      x: -10,
    })
    timeline.from(imageRef.current, {
      opacity: 0,
      x: 10,
    })
    timeline.from(containerRef.current, {
      scale: 0.9,
    })
    timeline.to(logoRef.current, {
      scrollTrigger: {
        trigger: logoRef.current,
        scrub: 0.4,
        toggleActions: 'play none none none',
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
    })
    timeline.to(appNameRef.current, {
      scrollTrigger: {
        trigger: appNameRef.current,
        scrub: 0.4,
        toggleActions: 'play none none none',
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
    })

    timeline.to(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        scrub: 0.4,
        toggleActions: 'play none none none',
      },
      opacity: 1,
      x: 0,
      duration: 0.8,
    })

    timeline.to(subtitleRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: subtitleRef.current,
        scrub: 0.4,
        toggleActions: 'play none none none',
      },
    })

    timeline.to(descriptionRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: descriptionRef.current,
        scrub: 0.4,
        toggleActions: 'play none none none',
      },
    })
    timeline.to(imageRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: imageRef.current,
        scrub: 0.4,
        toggleActions: 'play none none none',
      },
    })
    timeline.to(containerRef.current, {
      scale: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 0.4,
        toggleActions: 'play none none none',
        end: 'top center',
      },
    })
    timeline.to(creditRef.current, {
      scale: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: creditRef.current,
        scrub: 0.4,
        toggleActions: 'play none none none',
        end: 'top center',
      },
    })
  }
  useEffect(() => {
    if (!initialized.current) {
      animate()
    }
  }, [])

  return (
    <div className='py-8 px-16 overflow-hidden text-center '>
      <Card className='p-8' ref={containerRef}>
        <CardContent className='grid grid-cols-1 justify-items-center space-y-4'>
          <Image
            src={Logo}
            alt='Workflow logo'
            width={50}
            height={50}
            ref={logoRef}
          />
          <div>
            <h1 className='text-6xl font-bold' ref={appNameRef}>
              Workflow
            </h1>
            <h2 className='text-5xl font-bold' ref={titleRef}>
              Your HR Management{' '}
              <strong className='bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
                Superapp
              </strong>
            </h2>
            <h3 className='text-4xl font-bold text-slate-600' ref={subtitleRef}>
              A once stop solution for HR needs
            </h3>
          </div>

          <p className='font-medium text-2xl' ref={descriptionRef}>
            Workflow is a personal project owned by Diriangen Lempira (nickname:
            Ian) Powell to showcase skills in web development. This site uses
            supabase for its backend and a combination of shadcn, nextui,
            tailwind css, and tremor for the front end. This project is not
            intended nor is adverstised for commercial use.
          </p>
          <h3 className='font-medium text-lg text-slate-500' ref={creditRef}>
            Created by Diriangen Lempira Powell, 2023
          </h3>
        </CardContent>
      </Card>
    </div>
  )
}

export default FooterSection
