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
    <FormBase
      submitRoute={API_AUTH_LOGIN}
      redirectRoute={DASHBOARD}
      controller={form}
      successMessage={'Login Successful! Welcome back'}
      data={form.getValues()}
      submitLabel='Sign in'
    >
      <AppFormField
        controller={form.control}
        label='Password'
        labelIcon={<KeyRound size={14} />}
        placeholder='Johndoe@123'
        name='password'
        type='password'
      />
      <p className={'text-xs'}>
        Forgot Password?
        <AppButton
          variant={'link'}
          type='button'
          onClick={() => {
            router.push(FORGET_PASSWORD)
          }}
          label='Reset Password'
        />
      </p>
    </FormBase>
  )
}

export default AuthLoginForm
