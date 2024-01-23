import SelectFile from '@/lib/components/file/select-file.components'
import AppTextAreaFormField from '../formfield/textArea.components'
import { formParams } from '@/lib/data/interface/form/form.interface'
import { MoveRight } from 'lucide-react'
import TimePickerPopOver from '@/lib/components/timepicker/timepicker.popover'
import AppSelect from '@/lib/components/select/select.components'
import RequestFormHeader from './request-form-header.component'
import AppDatePicker from '@/lib/components/date/date.components'

const CertificateOfAttendanceAddRequestForm = ({ controller }: formParams) => {
  return (
    <>
      <RequestFormHeader />
      <hr />
      <AppDatePicker controller={controller} className='col-span-5' />
      <div className='grid grid-cols-11 gap-2'>
        <TimePickerPopOver controller={controller} label='Start' />
        <MoveRight className='col-span-1' />
        <TimePickerPopOver controller={controller} label='End' />
      </div>
      <AppSelect
        items={['Clock-in', 'Clock-out']}
        name='type'
        controller={controller}
        defaultValue='Clock-in'
      />
      <AppTextAreaFormField
        controller={controller.control}
        label='Reason'
        variant={'bordered'}
        name='reason'
        placeholder='Important matters'
        type='textarea'
      />

      <SelectFile />
    </>
  )
}
export default CertificateOfAttendanceAddRequestForm
