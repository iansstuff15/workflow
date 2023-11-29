import { FieldValues, UseFormReturn } from 'react-hook-form';

export interface selectProps {
  items: Array<string>;
  defaultValue?: string;
  label?: string;
  name: string;
  controller: UseFormReturn<FieldValues, any, undefined>;
  placeholder?: string;
}
