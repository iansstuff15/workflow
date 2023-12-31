import { UNDEFINED_ERROR } from '@/config/error/auth';
import { onSubmitParams } from '@/data/interface/form/formfield/formfield.interface';
import { stepFunctionProps } from '@/data/interface/stepper/stepper';
import { client } from '@/utilities/providers/backend/supabase';

export const onSubmit: ({
  event,
  form,
}: onSubmitParams) => Promise<string> = async ({
  event,
  form,
}: onSubmitParams) => {
  event.preventDefault();
  const values = form.getValues();
  const now = new Date();
  const { data, error } = await client.auth.signUp({
    email: values['email'],
    password: values['password'],
    phone: values['phone'],
    options: {
      data: { ...values, created: now },
    },
  });

  if (data) {
    return 'success';
  } else {
    return error?.message ?? UNDEFINED_ERROR;
  }
};

export const incrementStep = ({
  currentStep,
  numberOfSteps,
}: stepFunctionProps) => {
  if (currentStep < numberOfSteps!) {
    return currentStep + 1;
  }
  return 0;
};
export const decrementStep = ({ currentStep }: stepFunctionProps) => {
  if (currentStep > 0) {
    return currentStep - 1;
  }
  return 0;
};
