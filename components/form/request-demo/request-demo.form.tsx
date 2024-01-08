'use client'
import AppButton from '@/components/button/appButtons'
import { Form } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import AppFormField from '../formfield/formfield'
import { FormEvent, useState } from 'react'
import { onSubmit } from './request-demo.form.controller'
import { AtSign, KeyRound } from 'lucide-react'
import { FORGET_PASSWORD } from '@/config/constants/routes/routes'
import { useRouter } from 'next/navigation'
import { CheckboxGroup, Checkbox } from '@nextui-org/checkbox'
import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from '@radix-ui/react-toast'
const RequestDemoForm = () => {
  const form = useForm()
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  return (
    <Form {...form}>
      <form
        onSubmit={async (event: FormEvent) => {
          setLoading(true)
          const response = await onSubmit({ event, form })
          if (response == 'good') {
            setLoading(false)
          } else {
            toast({
              variant: 'destructive',
              title: 'Uh oh! Something went wrong.',
              description: response,
            })
            setLoading(false)
          }
        }}
        className='space-y-8'
      >
        <AppFormField
          controller={form.control}
          label='Email'
          labelIcon={<AtSign size={14} />}
          placeholder='john.doe@email.com'
          name='receipient'
          type='email'
        />
        <CheckboxGroup
          label='Select platform'
          orientation='horizontal'
          defaultValue={['web']}
        >
          <Checkbox value='web' size='sm'>
            Web
          </Checkbox>
          <Checkbox value='android' size='sm' isDisabled>
            Mobile (android)
          </Checkbox>
          <Checkbox value='ios' size='sm' isDisabled>
            Mobile (iOS)
          </Checkbox>
          <Checkbox value='windows' size='sm' isDisabled>
            Desktop (windows)
          </Checkbox>
          <Checkbox value='macos' size='sm' isDisabled>
            Desktop (macOS)
          </Checkbox>
          <Checkbox value='linux' size='sm' isDisabled>
            Desktop (linux)
          </Checkbox>
        </CheckboxGroup>
        <AppButton
          type='submit'
          onClick={e => {}}
          label='Request Demo'
          block
          loading={loading}
        />
      </form>
    </Form>
  )
}

export default RequestDemoForm
