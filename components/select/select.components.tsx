import { selectProps } from '@/data/interface/select/select.interface'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { type } from 'os'
import { FormField, FormItem, FormControl } from '../ui/form'

const AppSelect = ({
  items,
  defaultValue,
  label,
  name,
  placeholder,
  controller,
}: selectProps) => {
  return (
    <FormField
      control={controller.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl {...field}>
            <Select
              defaultValue={defaultValue}
              onValueChange={value => {
                console.log(value)
                controller.setValue(name, value)
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>{label}</SelectLabel>
                  {items.map((data, index) => {
                    return (
                      <SelectItem key={index} value={data}>
                        {data}
                      </SelectItem>
                    )
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
        </FormItem>
      )}
    />
  )
}

export default AppSelect
