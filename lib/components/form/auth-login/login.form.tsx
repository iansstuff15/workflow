'use client'
import AppButton from '@/lib/components/button/appButtons'
import { Form } from '@/lib/components/ui/form'
import { useForm } from 'react-hook-form'
import AppFormField from '../formfield/formfield'
import { FormEvent, useEffect } from 'react'
import { onSubmit } from './login.form.controller'
import { KeyRound } from 'lucide-react'
import {
  API_AUTH_LOGIN,
  DASHBOARD,
  FORGET_PASSWORD,
} from '@/lib/config/constants/routes/routes'
import { useRouter } from 'next/navigation'
import FormBase from '@/lib/components/form/form-base.component'
import { useSupabase } from '@/lib/utilities/providers/backend/supabase'

const AuthLoginForm = () => {
  const supabase = useSupabase()
  const userInfo = supabase.userInfo
  const form = useForm()
  const router = useRouter()
  useEffect(() => {
    if (userInfo) {
      form.setValue('email', userInfo.email)
    }
  }, [userInfo])
  return (
    <>
      <p className={'text-xs text-center'}>
        Forgot Password?
        <AppButton
          variant={'link'}
          type='button'
          onClick={() => {
            router.push(FORGET_PASSWORD)
          }}
          label='Reset Password'
        />
        <AppButton
          type='button'
          onClick={() => {
            router.push(DASHBOARD)
          }}
          block={true}
          label='Continue to Dashboard'
        />
      </p>
    </>
  )
}

export default AuthLoginForm
