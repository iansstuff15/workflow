'use client'

import { Form } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import AppFormField from '../formfield/formfield'
import AppButton from '@/components/button/appButtons'
import { Send } from 'lucide-react'
import AppTextAreaFormField from '../formfield/textArea.components'
import { onSubmit } from './contact-me.form.controller'
import { FormEvent, useState } from 'react'

const ContactMeForm = () => {
  const form = useForm()
  const [loading, setLoading] = useState(false)
  return (
    <Form {...form}>
      <form
        className='space-y-4'
        onSubmit={async (event: FormEvent) => {
          setLoading(true)
          onSubmit({ event, form })
          //   const response = await onSubmit({ event, form })
          //   if (response == 'good') {
          //     setLoading(false)
          //   } else {
          //     setLoading(false)
          //   }
        }}
      >
        <div className='grid md:grid-cols-2 gap-2'>
          <AppFormField
            label='From'
            controller={form.control}
            type='text'
            placeholder='John Doe'
            variant='bordered'
            color='primary'
            name='from'
          />
          <AppFormField
            label='Subject'
            controller={form.control}
            type='text'
            placeholder='Lets work together'
            variant='bordered'
            color='primary'
            name='subject'
          />
        </div>
        <div>
          <AppTextAreaFormField
            label='Message'
            controller={form.control}
            variant='bordered'
            placeholder='In minim aute anim quis ut nulla ipsum. Est officia proident minim laboris reprehenderit. Quis consequat nisi et incididunt commodo.'
            type='textarea'
            name='message'
            color='primary'
          />
        </div>
        <div>
          <AppButton
            label='Send Message'
            block={true}
            icon={<Send />}
            loading={loading}
          />
        </div>
      </form>
    </Form>
  )
}

export default ContactMeForm
