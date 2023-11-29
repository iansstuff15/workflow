'use client';
import AppButton from '@/components/button/appButtons';
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import AppFormField from '../formfield/formfield';
import { FormEvent, useState } from 'react';
import {
  decrementStep,
  incrementStep,
  onSubmit,
} from './signup.form.controller';
import { Divider } from '@nextui-org/divider';
import Stepper from '@/components/stepper/stepper';
import { useRouter } from 'next/router';
import { DASHBOARD } from '@/config/constants/routes/routes';

const SignUpForm = () => {
  const form = useForm();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    'Personal Information',
    'Contact Information',
    'Work Information',
    'Account Credentials',
  ];

  return (
    <>
      <Stepper
        currentLabel={steps[currentStep]}
        numberOfSteps={steps.length}
        currentStep={currentStep}
      />
      <Form {...form}>
        <form
          onSubmit={async (event: FormEvent) => {
            event.preventDefault();
            if (currentStep == steps.length) {
              const response = await onSubmit({ event, form });
              if (response == 'success') {
                router.push(DASHBOARD);
              }
            }
          }}
        >
          <div
            className={
              currentStep == 0
                ? 'grid grid-cols-1 gap-3 place-content-between'
                : 'hidden'
            }
          >
            <AppFormField
              controller={form.control}
              type="firstName"
              label="First Name"
              placeholder="John"
            />
            <AppFormField
              controller={form.control}
              type="lastName"
              label="Last Name"
              placeholder="Doe"
            />
          </div>
          <div
            className={
              currentStep == 1
                ? 'grid grid-cols-1 gap-3 place-content-between'
                : 'hidden'
            }
          >
            <AppFormField
              controller={form.control}
              type="phone"
              label="Phone"
              placeholder="+639123456789"
            />
          </div>
          <div
            className={
              currentStep == 2
                ? 'grid grid-cols-1 gap-3 place-content-between'
                : 'hidden'
            }
          >
            <AppFormField
              controller={form.control}
              type="company"
              label="Company"
              placeholder="Workplace"
            />
            <AppFormField
              controller={form.control}
              type="position"
              label="Position"
              placeholder="Senior Software Engineer"
            />
          </div>
          <div
            className={
              currentStep == 3
                ? 'grid grid-cols-1 gap-3 place-content-between'
                : 'hidden'
            }
          >
            <AppFormField
              controller={form.control}
              type="email"
              label="Email"
              placeholder="johndoe@email.com"
            />
            <AppFormField
              controller={form.control}
              type="password"
              label="Password"
              placeholder="JohnDoe"
            />
          </div>
          <br />
          <div
            className={
              currentStep == 0
                ? ''
                : currentStep == steps.length
                ? 'hidden'
                : 'grid grid-cols-2 gap-2'
            }
          >
            <AppButton
              type="button"
              variant={'secondary'}
              className={currentStep == 0 ? 'hidden' : ''}
              onClick={() => {
                setCurrentStep(
                  decrementStep({
                    currentStep: currentStep,
                  })
                );
              }}
              disabled={currentStep == steps.length ? true : false}
              block
              label="Previous"
            />
            <AppButton
              type="submit"
              onClick={() => {
                setCurrentStep(
                  incrementStep({
                    currentStep: currentStep,
                    numberOfSteps: steps.length,
                  })
                );
              }}
              block
              label={currentStep == steps.length - 1 ? 'Sign up' : 'Continue'}
            />
          </div>
          <Divider />
        </form>
      </Form>
    </>
  );
};

export default SignUpForm;
