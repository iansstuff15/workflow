import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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
  className,
  ...otherProps
}: textAreaFormFieldProps) => {
  const [obsureText, setObscureText] = useState(true)
  return (
    <FormField
      control={controller}
      name={type}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Textarea
              label={label}
              placeholder={placeholder}
              variant='bordered'
              className={`border-0 ${className}`}
              {...otherProps}
            />
          </FormControl>
        </FormItem>
      )}
    />
  )
}

export default AppTextAreaFormField
