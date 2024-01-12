'use client'
import AppButton from '@/lib/components/button/appButtons'
import { Form } from '@/lib/components/ui/form'
import { useForm } from 'react-hook-form'
import AppFormField from '../formfield/formfield'
import { FormEvent, useState } from 'react'
import { onSubmit } from './request-demo.form.controller'
import { AtSign } from 'lucide-react'

import { CheckboxGroup, Checkbox } from '@nextui-org/checkbox'
import { showError } from '@/lib/config/message/message.config'
import FormBase from '../form-base.component'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { RequestDemoFormSchema } from '../form-schema.types'
const RequestDemoForm = () => {
  const form = useForm<zod.infer<typeof RequestDemoFormSchema>>({
    mode: 'onChange',
    resolver: zodResolver(RequestDemoFormSchema),
    defaultValues: { receipient: '' },
  })

  return (
    <FormBase controller={form} submitRoute='/' data={form.getValues()}>
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
    </FormBase>
  )
}

export default RequestDemoForm
