import { UseFormReturn, FieldValues } from 'react-hook-form'

export interface formParams {
  controller: UseFormReturn<any, any, undefined>
}

export interface formProps extends formParams {
  children: React.ReactNode
  showCancel?: boolean
  submitRoute: string
  redirectRoute?: string
  successMessage?: string
  data: object
  submitLabel?: string
  showOkButton?: boolean
}

export interface showFormProps {
  mode: 'add' | 'edit' | 'delete' | 'view'
  data?: any
  selectedKeys?: Array<string>
}
