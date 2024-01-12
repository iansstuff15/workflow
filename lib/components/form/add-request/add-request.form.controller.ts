import { onSubmitParams } from '@/lib/data/interface/form/formfield/formfield.interface'
import { FormEvent } from 'react'
import { UseFormReturn, FieldValues } from 'react-hook-form'

export const onSubmit = ({ event, form }: onSubmitParams) => {
  console.log(form.getValues())
  event.preventDefault()
}
