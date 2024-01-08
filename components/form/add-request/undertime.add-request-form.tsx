import SelectFile from '@/components/file/select-file.components'
import AppTextAreaFormField from '../formfield/textArea.components'
import { formParams } from '@/data/interface/form/form.interface'
import AppDatePicker from '@/components/date/date.components'
import { Checkbox } from '@/components/ui/checkbox'
import AppSelect from '@/components/select/select.components'
import AppButton from '@/components/button/appButtons'
import { MoveRight } from 'lucide-react'
import TimePickerPopOver from '@/components/timepicker/timepicker.popover'
import { useState } from 'react'

const UndertimeAddRequestForm = ({ controller }: formParams) => {
  const [startTimeIsOpen, setStartTimeIsOpen] = useState(false)
  const [endTimeIsOpen, setEndTimeIsOpen] = useState(false)
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

      <AppDatePicker controller={controller} />
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
        name='reason'
        type='textara'
      />

      <SelectFile />
    </>
  )
}
export default UndertimeAddRequestForm
