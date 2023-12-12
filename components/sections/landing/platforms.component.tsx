'use client'
import PlatformCard from '@/components/cards/platform/platform-card.component'
import { PlatformData } from '@/components/cards/platform/platform-data'
import { useEffect, useRef } from 'react'
import { timeline } from './animation'

const PlatformSection = () => {
  const platformContainer = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const initialized = useRef(false)
  const animate = () => {
    initialized.current = true
    timeline.from(platformContainer.current, {
      opacity: 0,
      y: 10,
    })
    timeline.to(platformContainer.current, {
      scrollTrigger: {
        trigger: platformContainer.current,
        scrub: 0.6,
        toggleActions: 'play none none none',
        end: 'top center',
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
    })
    timeline.from(titleRef.current, {
      opacity: 0,
      y: 10,
    })
    timeline.from(subtitleRef.current, {
      opacity: 0,
      y: 10,
    })
    timeline.to(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        scrub: 0.4,
        toggleActions: 'play none none none',
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
    })

    timeline.to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: subtitleRef.current,
        scrub: 0.4,
        toggleActions: 'play none none none',
      },
    })
  }
  useEffect(() => {
    if (!initialized.current) {
      animate()
    }
  }, [])
  return (
    <div className=' pt-8 sm:pt-48 px-8 md:px-16 overflow-hidden text-center'>
      <h1
        className='font-medium text-lg sm:text-2xl lg:text-4xl text-primary'
        ref={titleRef}
      >
        Available when you need it
      </h1>
      <h2
        className='font-bold text-2xl sm:text-4xl lg:text-6xl'
        ref={subtitleRef}
      >
        System is also available in various platforms
      </h2>
      <div className='grid sm:grid-cols-3 gap-4 mt-8' ref={platformContainer}>
        {PlatformData.map((data, index) => {
          return (
            <PlatformCard
              key={index}
              title={data.title}
              description={data.description}
            />
          )
        })}
      </div>
    </div>
  )
}

export default PlatformSection
