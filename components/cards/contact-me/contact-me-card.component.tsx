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
import { useRef } from 'react'
const ContactMeCard = () => {
  const form = useForm()
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const imageRef = useRef(null)
  return (
    <div className='bg-neutral-800 rounded-t-3xl text-start py-16 px-32 grid grid-cols-2'>
      <div className=' space-y-4 '>
        <h1 className='text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent '>
          Wanna work together?
        </h1>
        <h2 className='text-3xl font-medium text-white'>reach out to me</h2>

        <Form {...form}>
          <form className='space-y-4'>
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

            <AppTextAreaFormField
              label='Message'
              controller={form.control}
              variant='bordered'
              placeholder='Culpa et eu excepteur velit.'
              type='message'
              color='primary'
            />

            <AppButton label='Send Message' block={true} icon={<Send />} />
          </form>
        </Form>
        <h3 className='text-white font-medium text-xs text-center'>
          Other mediums to reach out
        </h3>
        <div className='grid grid-cols-2 gap-2'>
          <Snippet symbol='Email:' radius='lg' variant='shadow' color='primary'>
            dlpowell35@gmail.com
          </Snippet>
          <Snippet symbol='Phone:' radius='lg' variant='shadow' color='primary'>
            +639604471706
          </Snippet>
        </div>
        <Snippet
          symbol='LinkedIn:'
          radius='lg'
          codeString={linkedInProfileLink}
          variant='shadow'
          color='primary'
          fullWidth={true}
        >
          Diriangen Lempira Powell
        </Snippet>
      </div>
      <div>
        <Lottie
          animationData={CollaborateAnimation}
          width={1000}
          height={1000}
        />
      </div>
    </div>
  )
}

export default ContactMeCard
