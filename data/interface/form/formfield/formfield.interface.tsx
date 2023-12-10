import { InputProps, TextAreaProps } from '@nextui-org/input'
import { FormEvent, ReactNode } from 'react'
import { Control, FieldValues, UseFormReturn } from 'react-hook-form'

export interface formFieldParams extends InputProps {
  controller: Control<FieldValues>
  type: string
  label?: string
  placeholder?: string
  labelIcon?: ReactNode
}
export interface textAreaFormFieldProps extends TextAreaProps {
  controller: Control<FieldValues>
  type: string
  label?: string
  placeholder?: string
  labelIcon?: ReactNode
}
export interface onSubmitParams {
  event: FormEvent
  form: UseFormReturn<FieldValues, any, undefined>
}
