import { DayPickerDefaultProps } from 'react-day-picker';
import { UseFormReturn, FieldValues } from 'react-hook-form';

export interface datePickerProps extends DayPickerDefaultProps {
  controller: UseFormReturn<FieldValues, any, undefined>;
}
