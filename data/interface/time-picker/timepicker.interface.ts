import { UseFormReturn, FieldValues } from 'react-hook-form'

export interface timepickerProps {
  label: string
  controller: UseFormReturn<FieldValues, any, undefined>
}
