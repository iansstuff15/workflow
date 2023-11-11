import { onSubmitParams } from '@/data/interface/form/formfield/formfield.interface';
import { stepFunctionProps } from '@/data/interface/stepper/stepper';
import { FormEvent } from 'react';
import { UseFormReturn, FieldValues } from 'react-hook-form';

export const onSubmit = ({ event, form }: onSubmitParams) => {
  console.log(form.getValues());
  event.preventDefault();
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
