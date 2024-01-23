import AppDatePicker from '@/lib/components/date/date.components'
import SelectFile from '@/lib/components/file/select-file.components'
import AppSelect from '@/lib/components/select/select.components'
import { Checkbox } from '@nextui-org/checkbox'
import { formFieldParams } from '@/lib/data/interface/form/formfield/formfield.interface'
import AppTextAreaFormField from '../formfield/textArea.components'
import { formParams } from '@/lib/data/interface/form/form.interface'
import CheckboxFormField from '../checkbox/checkbox-form.component'
import RequestFormHeader from './request-form-header.component'
import FormBase from '@/lib/components/form/form-base.component'
import { useForm } from 'react-hook-form'
import { API_CREATE_REQUEST } from '@/lib/config/constants/routes/routes'
import { useSupabase } from '@/lib/utilities/providers/backend/supabase'

const LeavesAddRequestForm = ({ controller }: formParams) => {
  const supabase = useSupabase()
  const userInfo = supabase.userInfo
  return (
    <>
      <RequestFormHeader />
      <hr />
      <AppSelect
        items={['Maternity', 'Paternity', 'Sick', 'Vacation']}
        name='type'
        placeholder='Choose leave type'
        controller={controller}
      />
      <CheckboxFormField
        name='is_half_day'
        controller={controller.control}
        selection={[{ value: '', label: 'Half day' }]}
      />

      <AppDatePicker controller={controller} />
      <AppTextAreaFormField
        controller={controller.control}
        label='Reason'
        variant={'bordered'}
        placeholder='Important matters'
        name='reason'
        type='textarea'
      />

      <SelectFile />
      <hr />
      <div className='grid grid-cols-2'>
        <div>
          <h5 className='font-medium'>Starting balance</h5>
          <p>Vacation Leaves {userInfo?.vacation_leave_credits ?? 0}</p>
          <p>Sick Leaves {userInfo?.sick_leave_credits ?? 0}</p>
        </div>
        <div className='text-end'>
          <h5 className='font-medium'>Ending balance</h5>
          <p>Vacation Leaves {(userInfo?.vacation_leave_credits ?? 0) - 1}</p>
          <p>Sick Leaves {(userInfo?.sick_leave_credits ?? 0) - 1}</p>
        </div>
      </div>
    </>
  )
}
export default LeavesAddRequestForm
