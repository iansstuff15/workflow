import SelectFile from '@/lib/components/file/select-file.components'
import AppTextAreaFormField from '../formfield/textArea.components'
import { formParams } from '@/lib/data/interface/form/form.interface'
import { MoveRight } from 'lucide-react'
import TimePickerPopOver from '@/lib/components/timepicker/timepicker.popover'
import { useSupabase } from '@/lib/utilities/providers/backend/supabase'
import RequestFormHeader from './request-form-header.component'

const ScheduleAdjustmentAddRequestForm = ({ controller }: formParams) => {
  const supabase = useSupabase()
  const userInfo = supabase.userInfo
  return (
    <>
      <RequestFormHeader />
      <hr />
      <div className='grid grid-cols-11 gap-2'>
        <TimePickerPopOver controller={controller} label='Current Start' />
        <MoveRight className='col-span-1' />
        <TimePickerPopOver controller={controller} label='Current End' />
      </div>
      <div className='grid grid-cols-11 gap-2'>
        <TimePickerPopOver controller={controller} label='Adjusted Start' />
        <MoveRight className='col-span-1' />
        <TimePickerPopOver controller={controller} label='Adjusted End' />
      </div>
      <AppTextAreaFormField
        controller={controller.control}
        label='Reason'
        variant={'bordered'}
        placeholder='Important matters'
        name='reason'
        type='textarea'
      />

      <SelectFile />
    </>
  )
}
export default ScheduleAdjustmentAddRequestForm
