import { API_CREATE_DUMMY_EMPLOYEE } from '@/lib/config/constants/routes/routes'
import { onSubmitParams } from '@/lib/data/interface/form/formfield/formfield.interface'
import { FormEvent } from 'react'
import { UseFormReturn, FieldValues } from 'react-hook-form'

export const onSubmit = async ({ event, form }: onSubmitParams) => {
  event.preventDefault()
  const values = form.getValues()
  // const response = await fetch(API_CREATE_DUMMY_EMPLOYEE, {
  //   method: 'POST',
  //   body: JSON.stringify(values),
  // })
  // const json = response.json()
  // const result = json.then((value: GenericResponse) => {
  //   return value.message
  // })

  // return result
}
