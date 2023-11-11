'use client';
import AppButton from '@/components/button/appButtons';
import { Form } from '@/components/ui/form';
import { FORGET_PASSWORD } from '@/config/constants/routes/routes';
import { AtSign, KeyRound } from 'lucide-react';
import { useRouter } from 'next-nprogress-bar';
import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import AppFormField from '../formfield/formfield';
import { onSubmit } from './login.form.controller';

const NoAuthLoginForm = () => {
  const form = useForm();
  const router = useRouter();
  return (
    <Form {...form}>
      <form
        onSubmit={(event: FormEvent) => onSubmit({ event, form })}
        className="space-y-8"
      >
        <AppFormField
          controller={form.control}
          label="Email"
          placeholder="johndoe@gmail.com"
          type="email"
          labelIcon={<AtSign size={14} />}
        />
        <AppFormField
          controller={form.control}
          label="Password"
          labelIcon={<KeyRound size={14} />}
          placeholder="Johndoe@123"
          type="password"
        />
        <p className={'text-xs'}>
          Forgot Password?
          <AppButton
            variant={'link'}
            onClick={() => {
              router.push(FORGET_PASSWORD);
            }}
            label="Reset Password"
          />
        </p>
        <AppButton type="submit" onClick={(e) => {}} label="Sign In" block />
      </form>
    </Form>
  );
};

export default NoAuthLoginForm;
