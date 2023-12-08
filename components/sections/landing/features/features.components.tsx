'use client'
import AppButton from '@/components/button/appButtons'
import heroImage from '@/assets/hero-image.png'
import { Snippet } from '@nextui-org/snippet'
import Image from 'next/image'
import { githubLink } from '@/config/constants/links/links'
import { featureData } from './features.data'
import { useEffect, useRef } from 'react'
import { timeline } from '../animation'
import { featureParam } from '@/data/interface/feature/feature.interface'
const FeaturesSection = ({
  title,
  subtitle,
  description,
  imageURL,
}: featureParam) => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const descriptionRef = useRef(null)

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
  }
  useEffect(() => {
    if (!initialized.current) {
      animate()
    }
  }, [])
  return (
    <div
      style={{ height: '60vh' }}
      className='grid place-items-center pt-48 px-16 overflow-hidden grid-cols-2'
    >
      <div className='space-y-2 '>
        <h2
          ref={titleRef}
          className='font-semibold text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'
        >
          {title}
        </h2>
        <h1 ref={subtitleRef} className='font-bold text-6xl'>
          {subtitle}
        </h1>
        <p ref={descriptionRef}>{description}</p>
      </div>
      <div></div>
    </div>
  )
}
export default FeaturesSection
