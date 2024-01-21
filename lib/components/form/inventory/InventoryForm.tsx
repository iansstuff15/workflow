import { useForm } from 'react-hook-form'
import FormBase from '../form-base.component'
import AppFormField from '../formfield/formfield'
import AppDatePicker from '@/lib/components/date/date.components'
import AppTextAreaFormField from '../formfield/textArea.components'
import SelectFile from '@/lib/components/file/select-file.components'
import { API_CREATE_INVENTORY } from '@/lib/config/constants/routes/routes'
import AppSelect from '@/lib/components/select/select.components'

const InventoryForm = () => {
  const form = useForm()
  return (
    <FormBase
      controller={form}
      submitRoute={API_CREATE_INVENTORY}
      data={form.getValues()}
      showCancel={true}
    >
      <AppSelect
        items={['Available', 'In Use', 'For Repair', 'For Disposal']}
        defaultValue={'Available'}
        name={'current_status'}
        controller={form}
      />
      <AppFormField
        controller={form.control}
        label='Serial Number'
        name='serial_number'
        variant='bordered'
        placeholder='Lorem Ipsum'
        type='text'
      />
      <AppFormField
        controller={form.control}
        label='Brand'
        name='brand'
        placeholder='Eu minim nulla culpa dolor.Ut quis ipsum non ex ea enim tempor qui labore eiusmod ex irure voluptate tempor.'
        type='text'
        variant='bordered'
      />
      <AppFormField
        controller={form.control}
        label='Model'
        name='model'
        placeholder='Eu minim nulla culpa dolor.Ut quis ipsum non ex ea enim tempor qui labore eiusmod ex irure voluptate tempor.'
        type='text'
        variant='bordered'
      />
      <AppSelect
        items={[
          'Laptop',
          'Phone',
          'Tablet',
          'Desktop',
          'Monitor',
          'Keyboard',
          'Mouse',
          'Headset',
          'Speaker',
          'Printer',
          'Scanner',
          'Projector',
          'Camera',
          'Others',
        ]}
        defaultValue={'Laptop'}
        name={'type'}
        controller={form}
      />
      {form.watch('current_status') === 'In Use' ? (
        <>
          <h1>Assign to</h1>
          <AppSelect
            items={['Someone']}
            defaultValue={'Someone'}
            name={'assigned_to'}
            controller={form}
          />
          <h1>Assign by</h1>
          <AppSelect
            items={['Someone']}
            defaultValue={'Someone'}
            name={'assigned_by'}
            controller={form}
          />
        </>
      ) : null}
    </FormBase>
  )
}
export default InventoryForm
