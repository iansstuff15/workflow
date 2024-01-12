'use client'
import AppButton from '@/lib/components/button/appButtons'
import SelectFile from '@/lib/components/file/select-file.components'
import AppFormField from '@/lib/components/form/formfield/formfield'
import AppTextAreaFormField from '@/lib/components/form/formfield/textArea.components'
import { Form } from '@/lib/components/ui/form'
import { linkedInProfileLink } from '@/lib/config/constants/links/links'
import { Snippet } from '@nextui-org/snippet'
import Lottie from 'lottie-react'
import { Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import CollaborateAnimation from '@/assets/collaborate-animation.json'
import { useEffect, useRef } from 'react'
import { timeline } from '@/lib/components/sections/landing/animation'
import ContactMeForm from '@/lib/components/form/contact-me/contact-me.form.components'
const ContactMeCard = () => {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const imageRef = useRef(null)
  const formRef = useRef(null)

  const initialized = useRef(false)

  const animate = () => {
    initialized.current = true

    timeline.from(containerRef.current, {
      scale: 0.9,
      opacity: 0,
      y: -10,
    })

    timeline.to(containerRef.current, {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 0.8,
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
    <div
      className='shadow-[0_150px_200px_-15px_rgba(33,112,159,0.95)]'
      ref={containerRef}
    >
      <div className=''>
        <div className='bg-zinc-800 rounded-t-3xl text-start pt:4 sm:pt-12 pb-12 sm:pb-20 px-2 sm:px-16 flex flex-col-reverse xl:grid grid-cols-2'>
          <div className='space-y-4 '>
            <h1
              ref={titleRef}
              className='text-2xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent '
            >
              Wanna work together?
            </h1>
            <h2
              ref={subtitleRef}
              className='text-md sm:text-3xl font-medium text-white'
            >
              reach out to me
            </h2>
            <div className='text-white'>
              <ContactMeForm />
            </div>

            <h3 className='text-white font-medium text-xs text-center'>
              Other mediums to reach out
            </h3>
            <div className='grid xl:grid-cols-2 space-y-4 sm:space-y-0 xl:gap-2'>
              <Snippet symbol='Email:' radius='lg' color='primary'>
                dlpowell35@gmail.com
              </Snippet>
              <Snippet symbol='Phone:' radius='lg' color='primary'>
                +639604471706
              </Snippet>
            </div>
            <Snippet
              symbol='LinkedIn:'
              radius='lg'
              codeString={linkedInProfileLink}
              color='primary'
              fullWidth={true}
            >
              Diriangen Lempira Powell
            </Snippet>
          </div>
          <div ref={imageRef}>
            <Lottie
              animationData={CollaborateAnimation}
              className='w-7/12 sm:w-full'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMeCard
