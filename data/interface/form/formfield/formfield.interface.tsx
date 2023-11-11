import { FormEvent, ReactNode } from 'react';
import { Control, FieldValues, UseFormReturn } from 'react-hook-form';

export interface formFieldParams {
  controller: Control<FieldValues>;
  type: string;
  label?: string;
  placeholder?: string;
  labelIcon?: ReactNode;
}

export interface onSubmitParams {
  event: FormEvent;
  form: UseFormReturn<FieldValues, any, undefined>;
}