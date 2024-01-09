import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input, InputProps, Textarea } from '@nextui-org/input'
import {
  formFieldParams,
  textAreaFormFieldProps,
} from '@/data/interface/form/formfield/formfield.interface'
import eyeCloseIcon from '@/assets/close-eye-icon.svg'
import eyeOpenIcon from '@/assets/open-eye-icon.svg'
import { useState } from 'react'
import Image from 'next/image'

const AppTextAreaFormField = ({
  controller,
  type,
  label,
  labelIcon,
  placeholder,
  name,
  className,
  ...otherProps
}: textAreaFormFieldProps) => {
  return (
    <FormField
      control={controller}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Textarea
              label={label}
              placeholder={placeholder}
              variant='bordered'
              className={`border-0 ${className}`}
              {...field}
              {...otherProps}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default AppTextAreaFormField
