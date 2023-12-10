'use client'
import AppButton from '@/components/button/appButtons'
import SelectFile from '@/components/file/select-file.components'
import AppFormField from '@/components/form/formfield/formfield'
import AppTextAreaFormField from '@/components/form/formfield/textArea.components'
import { Form } from '@/components/ui/form'
import { linkedInProfileLink } from '@/config/constants/links/links'
import { Snippet } from '@nextui-org/snippet'
import Lottie from 'lottie-react'
import { Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import CollaborateAnimation from '@/assets/collaborate-animation.json'
import { useEffect, useRef } from 'react'
import { timeline } from '@/components/sections/landing/animation'
const ContactMeCard = () => {
  const form = useForm()
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
        <div className='bg-zinc-800 rounded-t-3xl text-start pt-12 pb-20 px-16 grid grid-cols-2'>
          <div className=' space-y-4 '>
            <h1
              ref={titleRef}
              className='text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent '
            >
              Wanna work together?
            </h1>
            <h2 ref={subtitleRef} className='text-3xl font-medium text-white'>
              reach out to me
            </h2>

            <Form {...form}>
              <form className='space-y-4' ref={formRef}>
                <div className='grid grid-cols-2 gap-2'>
                  <AppFormField
                    label='From'
                    controller={form.control}
                    type='from'
                    placeholder='John Doe'
                    variant='bordered'
                    color='primary'
                  />
                  <AppFormField
                    label='Subject'
                    controller={form.control}
                    type='subject'
                    placeholder='Lets work together'
                    variant='bordered'
                    color='primary'
                  />
                </div>
                <div>
                  <AppTextAreaFormField
                    label='Message'
                    controller={form.control}
                    variant='bordered'
                    placeholder='In minim aute anim quis ut nulla ipsum. Est officia proident minim laboris reprehenderit. Quis consequat nisi et incididunt commodo.'
                    type='message'
                    color='primary'
                  />
                </div>
                <div>
                  <AppButton
                    label='Send Message'
                    block={true}
                    icon={<Send />}
                  />
                </div>
              </form>
            </Form>
            <h3 className='text-white font-medium text-xs text-center'>
              Other mediums to reach out
            </h3>
            <div className='grid grid-cols-2 gap-2'>
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
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMeCard
