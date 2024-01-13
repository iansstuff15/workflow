import SelectFile from '@/lib/components/file/select-file.components'
import AppTextAreaFormField from '../formfield/textArea.components'
import { formParams } from '@/lib/data/interface/form/form.interface'
import AppDatePicker from '@/lib/components/date/date.components'
import { Checkbox } from '@/lib/components/ui/checkbox'
import AppSelect from '@/lib/components/select/select.components'
import AppButton from '@/lib/components/button/appButtons'
import { MoveRight } from 'lucide-react'
import TimePickerPopOver from '@/lib/components/timepicker/timepicker.popover'
import RequestFormHeader from './request-form-header.component'

const OfficialBusinessAddRequestForm = ({ controller }: formParams) => {
  return (
    <>
      <RequestFormHeader />
      <hr />
      <div className='grid grid-cols-11 gap-2'>
        <AppDatePicker controller={controller} className='col-span-5' />
        <MoveRight className='col-span-1' />
        <AppDatePicker controller={controller} className='col-span-5 ' />
      </div>
      <div className='grid grid-cols-11 gap-2'>
        <TimePickerPopOver controller={controller} label='Start' />
        <MoveRight className='col-span-1' />
        <TimePickerPopOver controller={controller} label='End' />
      </div>
      <AppTextAreaFormField
        controller={controller.control}
        label='Reason'
        variant={'bordered'}
        placeholder='Important matters'
        type='text-area'
        name='reason'
      />

      <SelectFile />
    </>
  )
}
export default OfficialBusinessAddRequestForm
