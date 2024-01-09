import { InputProps, TextAreaProps } from '@nextui-org/input'
import { FormEvent, ReactNode } from 'react'
import { Control, FieldValues, UseFormReturn } from 'react-hook-form'

export interface formFieldParams extends InputProps {
  controller: Control<any>
  type?: string
  name: string
  label?: string
  placeholder?: string
  labelIcon?: ReactNode
}
export interface textAreaFormFieldProps extends TextAreaProps {
  controller: Control<any>
  type: string
  label?: string
  name: string
  placeholder?: string
  labelIcon?: ReactNode
}
export interface onSubmitParams {
  event: FormEvent
  form: UseFormReturn<any, any, undefined>
}
