import { onSubmitParams } from '@/lib/data/interface/form/formfield/formfield.interface'

export const onSubmit = ({ event, form }: onSubmitParams) => {
  console.log(form.getValues())
  event.preventDefault()
}
