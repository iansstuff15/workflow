import AppDatePicker from '@/lib/components/date/date.components'
import SelectFile from '@/lib/components/file/select-file.components'
import AppSelect from '@/lib/components/select/select.components'
import { Checkbox } from '@nextui-org/checkbox'
import { formFieldParams } from '@/lib/data/interface/form/formfield/formfield.interface'
import AppTextAreaFormField from '../formfield/textArea.components'
import { formParams } from '@/lib/data/interface/form/form.interface'
import CheckboxFormField from '../checkbox/checkbox-form.component'

const LeavesAddRequestForm = ({ controller }: formParams) => {
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
      <AppSelect
        items={['Maternity', 'Paternity', 'Sick', 'Vacation']}
        name='leaveType'
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
          <p>Vacation 0.0</p>
          <p>Sick 0.0</p>
        </div>
        <div className='text-end'>
          <h5 className='font-medium'>Ending balance</h5>
          <p>Vacation 0.0</p>
          <p>Sick 0.0</p>
        </div>
      </div>
    </>
  )
}
export default LeavesAddRequestForm
