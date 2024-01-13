import SelectFile from '@/lib/components/file/select-file.components'
import AppTextAreaFormField from '../formfield/textArea.components'
import { formParams } from '@/lib/data/interface/form/form.interface'
import { MoveRight } from 'lucide-react'
import TimePickerPopOver from '@/lib/components/timepicker/timepicker.popover'
import AppSelect from '@/lib/components/select/select.components'
import RequestFormHeader from './request-form-header.component'

const CertificateOfAttendanceAddRequestForm = ({ controller }: formParams) => {
  return (
    <>
      <RequestFormHeader />
      <hr />
      <div className='grid grid-cols-11 gap-2'>
        <TimePickerPopOver controller={controller} label='Current Start' />
        <MoveRight className='col-span-1' />
        <TimePickerPopOver controller={controller} label='Current End' />
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
