'use client'

import { Form } from '@/lib/components/ui/form'
import { useForm } from 'react-hook-form'
import AppFormField from '../formfield/formfield'
import AppButton from '@/lib/components/button/appButtons'
import { Send } from 'lucide-react'
import AppTextAreaFormField from '../formfield/textArea.components'
import { onSubmit } from './contact-me.form.controller'
import { FormEvent, useState } from 'react'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactMeFormSchema } from '../form-schema.types'
import FormBase from '../form-base.component'

const ContactMeForm = () => {
  const form = useForm<zod.infer<typeof ContactMeFormSchema>>({
    mode: 'onChange',
    resolver: zodResolver(ContactMeFormSchema),
    defaultValues: { from: '', subject: '', message: '' },
  })
  const [loading, setLoading] = useState(false)
  return (
    <FormBase
      controller={form}
      submitRoute='/'
      data={form.getValues()}
      submitLabel='Send Message'
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
    </FormBase>
  )
}

export default ContactMeForm
