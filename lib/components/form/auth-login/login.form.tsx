'use client'
import AppButton from '@/lib/components/button/appButtons'
import { Form } from '@/lib/components/ui/form'
import { useForm } from 'react-hook-form'
import AppFormField from '../formfield/formfield'
import { FormEvent } from 'react'
import { onSubmit } from './login.form.controller'
import { KeyRound } from 'lucide-react'
import { FORGET_PASSWORD } from '@/lib/config/constants/routes/routes'
import { useRouter } from 'next/navigation'

const AuthLoginForm = () => {
  const form = useForm()
  const router = useRouter()
  return (
    <Form {...form}>
      <form
        onSubmit={(event: FormEvent) => onSubmit({ event, form })}
        className='space-y-8'
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
            onClick={() => {
              router.push(FORGET_PASSWORD)
            }}
            label='Reset Password'
          />
        </p>
        <AppButton type='submit' onClick={e => {}} label='Sign In' block />
      </form>
    </Form>
  )
}

export default AuthLoginForm
