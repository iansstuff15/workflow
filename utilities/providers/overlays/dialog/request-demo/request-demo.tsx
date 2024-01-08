'use client'
import { WrapperProps } from '@/data/interface/layout/layout'
import AppDialog from '../dialog'
import { Form } from '@/components/ui/form'
import RequestDemoForm from '@/components/form/request-demo/request-demo.form'
import { useState } from 'react'
import Lottie from 'lottie-react'
import ThankYouRequestDemo from '@/assets/thankyou-demo-request.json'

const RequestDemoDialog = ({ children }: WrapperProps) => {
  return (
    <AppDialog
      trigger={children}
      title='Thank you for your interest'
      description=' To gain system access please include an email where I can send the generated credentials.'
    >
      <RequestDemoForm />
    </AppDialog>
  )
}

export default RequestDemoDialog
