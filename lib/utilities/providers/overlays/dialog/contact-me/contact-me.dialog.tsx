'use client'
import { WrapperProps } from '@/lib/data/interface/layout/layout'
import AppDialog from '../dialog'
import { Form } from '@/lib/components/ui/form'
import RequestDemoForm from '@/lib/components/form/request-demo/request-demo.form'
import { useState } from 'react'
import Lottie from 'lottie-react'
import ThankYouRequestDemo from '@/assets/thankyou-demo-request.json'
import ContactMeForm from '@/lib/components/form/contact-me/contact-me.form.components'

const ContactMeDialog = ({ children }: WrapperProps) => {
  return (
    <AppDialog
      trigger={children}
      title='Wanna work together?'
      description='reach out to me'
    >
      <div>
        <ContactMeForm />
      </div>
    </AppDialog>
  )
}

export default ContactMeDialog
