import { API_CREATE_EMPLOYEE } from '@/lib/config/constants/routes/routes'
import { UNDEFINED_ERROR } from '@/lib/config/error/auth'
import { onSubmitParams } from '@/lib/data/interface/form/formfield/formfield.interface'
import { stepFunctionProps } from '@/lib/data/interface/stepper/stepper'
import { client } from '@/lib/utilities/providers/backend/supabase'

export const onSubmit: ({
  event,
  form,
}: onSubmitParams) => Promise<string> = async ({
  event,
  form,
}: onSubmitParams) => {
  event.preventDefault()
  const values = form.getValues()
  const now = new Date()
  const { data, error } = await client.auth.signUp({
    email: values['email'],
    password: values['password'],
    phone: values['phone'],
    options: {
      data: { ...values, created: now },
    },
  })
  fetch(API_CREATE_EMPLOYEE, {
    method: 'POST',
    body: JSON.stringify({ id: data.user?.id, ...values }),
  })
  if (data) {
    return 'success'
  } else {
    return error?.message ?? UNDEFINED_ERROR
  }
}

export const incrementStep = ({
  currentStep,
  numberOfSteps,
}: stepFunctionProps) => {
  if (currentStep < numberOfSteps!) {
    return currentStep + 1
  }
  return 0
}
export const decrementStep = ({ currentStep }: stepFunctionProps) => {
  if (currentStep > 0) {
    return currentStep - 1
  }
  return 0
}
