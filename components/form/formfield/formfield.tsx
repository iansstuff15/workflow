import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@nextui-org/input';
import { formFieldParams } from '@/data/interface/form/formfield/formfield.interface';
import eyeCloseIcon from '@/assets/close-eye-icon.svg';
import eyeOpenIcon from '@/assets/open-eye-icon.svg';
import { useState } from 'react';
import Image from 'next/image';

const AppFormField = ({
  controller,
  type,
  label,
  labelIcon,
  placeholder,
}: formFieldParams) => {
  const [obsureText, setObscureText] = useState(true);
  return (
    <FormField
      control={controller}
      name={type}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              type={
                type == 'password' ? (obsureText ? 'password' : 'text') : type
              }
              label={label}
              variant="flat"
              placeholder={placeholder}
              {...field}
              startContent={labelIcon}
              endContent={
                type == 'password' ? (
                  <Image
                    onClick={() => setObscureText(!obsureText)}
                    src={obsureText ? eyeCloseIcon : eyeOpenIcon}
                    width={20}
                    height={20}
                    className="cursor-pointer text-cyan-600"
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
        </FormItem>
      )}
    />
  );
};

export default AppFormField;
