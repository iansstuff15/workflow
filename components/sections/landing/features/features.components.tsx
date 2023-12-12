'use client'
import { useEffect, useRef } from 'react'
import { timeline } from '../animation'
import Lottie from 'lottie-react'
import { featureParam } from '@/data/interface/feature/feature.interface'
import { Card } from '@/components/ui/card'

const FeaturesSection = ({
  title,
  subtitle,
  description,
  imageURL,
  lottie,
}: featureParam) => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const descriptionRef = useRef(null)
  const imageRef = useRef(null)
  const containerRef = useRef(null)
  const initialized = useRef(false)

  const animate = () => {
    initialized.current = true
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
  }
  useEffect(() => {
    if (!initialized.current) {
      animate()
    }
  }, [])
  return (
    <Card
      style={{ height: '100%' }}
      className='flex flex-col-reverse sm:grid place-items-center py-8 xl:py-16 px-4 sm:px-8 lg:px-16 overflow-hidden sm:grid-cols-2 my-2 '
      ref={containerRef}
    >
      <div className='space-y-2'>
        <h2
          ref={titleRef}
          className='font-semibold text-sm sm:text-md lg:text-xl xl:text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'
        >
          {title}
        </h2>
        <h1
          ref={subtitleRef}
          className='font-bold text-lg sm:text-2xl lg:text-4xl xl:text-6xl'
        >
          {subtitle}
        </h1>
        <p ref={descriptionRef} className='text-xs lg:text-sm xl:text-lg'>
          {description}
        </p>
      </div>
      <div ref={imageRef} className=''>
        {
          <Lottie
            animationData={lottie}
            loop={true}
            className='w-7/12 sm:w-full'
          />
        }
      </div>
    </Card>
  )
}
export default FeaturesSection
