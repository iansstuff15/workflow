import { UNDEFINED_ERROR } from '@/config/error/auth';
import { onSubmitParams } from '@/data/interface/form/formfield/formfield.interface';
import { client } from '@/utilities/providers/backend/supabase';
import { FormEvent } from 'react';
import { UseFormReturn, FieldValues } from 'react-hook-form';

export const onSubmit: ({
  event,
  form,
}: onSubmitParams) => Promise<string> = async ({
  event,
  form,
}: onSubmitParams) => {
  event.preventDefault();
  const values = form.getValues();
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(values),
  });
  const json = response.json();
  const result = json.then((value: GenericResponse) => {
    return value.message;
  });

  return result;
};
