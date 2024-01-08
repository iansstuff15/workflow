import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input, InputProps } from '@nextui-org/input'
import { formFieldParams } from '@/data/interface/form/formfield/formfield.interface'
import eyeCloseIcon from '@/assets/close-eye-icon.svg'
import eyeOpenIcon from '@/assets/open-eye-icon.svg'
import { useState } from 'react'
import Image from 'next/image'
import { Checkbox } from '@nextui-org/checkbox'

const AppFormCheckBox = ({
  controller,
  type,
  label,
  placeholder,
  name,
  ...otherProps
}: formFieldParams) => {
  return (
    <FormField
      control={controller}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Checkbox {...field} size='sm'>
              {label}
            </Checkbox>
          </FormControl>
        </FormItem>
      )}
    />
  )
}

export default AppFormCheckBox
