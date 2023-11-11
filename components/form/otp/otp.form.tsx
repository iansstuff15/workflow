'use client';
import AppButton from '@/components/button/appButtons';
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import AppFormField from '../formfield/formfield';
import { FormEvent } from 'react';
import { onSubmit } from './otp.form.controller';

const OTPForm = () => {
  const form = useForm();

  return (
    <Form {...form}>
      <form
        onSubmit={(event: FormEvent) => onSubmit({ event, form })}
        className="space-y-8"
      >
        <AppFormField controller={form.control} type="number" />
        <AppButton type="submit" onClick={(e) => {}} label="Verify" block />
      </form>
    </Form>
  );
};

export default OTPForm;
