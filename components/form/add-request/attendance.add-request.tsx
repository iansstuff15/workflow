import SelectFile from '@/components/file/select-file.components'
import AppTextAreaFormField from '../formfield/textArea.components'
import { formParams } from '@/data/interface/form/form.interface'
import { MoveRight } from 'lucide-react'
import TimePickerPopOver from '@/components/timepicker/timepicker.popover'
import AppSelect from '@/components/select/select.components'

const CertificateOfAttendanceAddRequestForm = ({ controller }: formParams) => {
  return (
    <>
      <div className='grid grid-cols-2 mt-3'>
        <div>
          <h5 className='font-medium'>From</h5>
          <p>Powell, Diriangen Lempira</p>
          <p className='text-sm'>Software Engineer</p>
          <p className='text-xs'>Software Delivery</p>
        </div>
        <div className='text-end'>
          <h5 className='font-medium'>To be reviewed by</h5>
          <p>Delacruz, Juan</p>
          <p className='text-sm'>Manager</p>
          <p className='text-xs'>Human Resource</p>
        </div>
      </div>
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
        placeholder='Important matters'
        type='reason'
      />

      <SelectFile />
    </>
  )
}
export default CertificateOfAttendanceAddRequestForm
