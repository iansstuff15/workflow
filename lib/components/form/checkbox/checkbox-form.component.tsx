import {
  FormControl,
  FormField,
  FormMessage,
  FormItem,
} from '@/lib/components/ui/form'
import {
  checkboxFormFieldProps,
  formFieldParams,
} from '@/lib/data/interface/form/formfield/formfield.interface'
import { Checkbox, CheckboxGroup } from '@nextui-org/checkbox'

const CheckboxFormField = ({
  controller,
  name,
  selection,
  label,
}: checkboxFormFieldProps) => {
  return (
    <CheckboxGroup label={label}>
      {selection.map((item, index) => {
        return (
          <FormField
            key={index}
            control={controller}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Checkbox {...field} value={item.value}>
                    {item.label}
                  </Checkbox>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )
      })}
    </CheckboxGroup>
  )
}

export default CheckboxFormField
