'use client'
import AppButton from '@/components/button/appButtons'
import { timeline } from '@/components/sections/landing/animation'
import { Card, CardContent } from '@/components/ui/card'
import { platformCardProps } from '@/data/interface/platform/platform.interface'
import { useEffect, useRef } from 'react'

const PlatformCard = ({ title, description }: platformCardProps) => {
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonRef = useRef(null)
  const initialized = useRef(false)
  const animate = () => {
    initialized.current = true
    timeline.from(titleRef.current, {
      opacity: 0,
      x: -10,
    })
    timeline.from(descriptionRef.current, {
      opacity: 0,
      x: 10,
    })
    timeline.from(buttonRef.current, {
      opacity: 0,
      x: -10,
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
    timeline.to(buttonRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: buttonRef.current,
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
    <Card>
      <CardContent className='space-y-2'>
        <h1 className='text-4xl font-bold mt-4 mb-2' ref={titleRef}>
          {title}
        </h1>
        <p className='text-xs' ref={descriptionRef}>
          {description}
        </p>
        <AppButton
          label='Request Access'
          className='bg-gradient-to-r from-blue-600 to-indigo-600'
          ref={buttonRef}
        />
      </CardContent>
    </Card>
  )
}

export default PlatformCard
