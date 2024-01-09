'use client'
import AppButton from '@/components/button/appButtons'
import {
  API_AUTH_LOGIN,
  DASHBOARD,
  FORGET_PASSWORD,
} from '@/config/constants/routes/routes'
import { AtSign, KeyRound } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import AppFormField from '../formfield/formfield'
import { zodResolver } from '@hookform/resolvers/zod'
import FormBase from '../form-base.component'
import { data } from '../../tracker/dummy-tracker'
import { LoginFormSchema } from '../form-schema.types'
import * as zod from 'zod'
const NoAuthLoginForm = () => {
  const form = useForm<zod.infer<typeof LoginFormSchema>>({
    mode: 'onChange',
    resolver: zodResolver(LoginFormSchema),
    defaultValues: { email: '', password: '' },
  })
  const router = useRouter()

  return (
    <FormBase
      submitRoute={API_AUTH_LOGIN}
      redirectRoute={DASHBOARD}
      controller={form}
      successMessage={'Login Successful! Welcome back'}
      data={form.getValues()}
      submitLabel='Login'
    >
      <AppFormField
        controller={form.control}
        label='Email'
        placeholder='johndoe@gmail.com'
        type='email'
        name='email'
        labelIcon={<AtSign size={14} />}
      />
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

export default NoAuthLoginForm
