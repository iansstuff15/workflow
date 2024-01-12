import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/lib/components/ui/form'
import { Input, InputProps } from '@nextui-org/input'
import { formFieldParams } from '@/lib/data/interface/form/formfield/formfield.interface'
import eyeCloseIcon from '@/assets/close-eye-icon.svg'
import eyeOpenIcon from '@/assets/open-eye-icon.svg'
import { useState } from 'react'
import Image from 'next/image'

const AppFormField = ({
  controller,
  type,
  label,
  labelIcon,
  placeholder,
  name,
  defaultValue,
  ...otherProps
}: formFieldParams) => {
  const [obsureText, setObscureText] = useState(true)
  return (
    <FormField
      control={controller}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              type={
                type == 'password' ? (obsureText ? 'password' : 'text') : type
              }
              label={label}
              placeholder={placeholder}
              {...field}
              {...otherProps}
              startContent={labelIcon}
              endContent={
                type == 'password' ? (
                  <Image
                    onClick={() => setObscureText(!obsureText)}
                    src={obsureText ? eyeCloseIcon : eyeOpenIcon}
                    width={20}
                    height={20}
                    className='cursor-pointer text-cyan-600'
                    alt={
                      obsureText
                        ? 'do not obsure text icon'
                        : 'obsure text icon'
                    }
                  />
                ) : null
              }
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default AppFormField
