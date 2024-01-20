import { useForm } from 'react-hook-form'
import FormBase from '../form-base.component'
import AppFormField from '../formfield/formfield'
import AppDatePicker from '@/lib/components/date/date.components'
import AppTextAreaFormField from '../formfield/textArea.components'
import SelectFile from '@/lib/components/file/select-file.components'

const InventoryForm = () => {
  const form = useForm()
  return (
    <FormBase
      controller={form}
      submitRoute={'/'}
      data={form.getValues()}
      showCancel={true}
    >
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
      <AppFormField
        controller={form.control}
        label='type'
        name='type'
        placeholder='Eu minim nulla culpa dolor.Ut quis ipsum non ex ea enim tempor qui labore eiusmod ex irure voluptate tempor.'
        type='text'
        variant='bordered'
      />
    </FormBase>
  )
}
export default InventoryForm
