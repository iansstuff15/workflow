import { useForm } from 'react-hook-form'
import FormBase from '../form-base.component'
import AppFormField from '../formfield/formfield'
import AppDatePicker from '@/components/date/date.components'
import AppTextAreaFormField from '../formfield/textArea.components'
import SelectFile from '@/components/file/select-file.components'

const CampaignForm = () => {
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
        label='Title'
        name='title'
        variant='bordered'
        placeholder='Lorem Ipsum'
        type='text'
      />
      <AppTextAreaFormField
        controller={form.control}
        label='Description'
        name='description'
        placeholder='Eu minim nulla culpa dolor.Ut quis ipsum non ex ea enim tempor qui labore eiusmod ex irure voluptate tempor.'
        type='text'
      />

      <AppFormField
        controller={form.control}
        label='Link'
        name='link'
        type='text'
        variant='bordered'
        startContent={<h1>https://</h1>}
        placeholder='https://www.workflow.by-ian.dev/'
      />
      <AppDatePicker controller={form} />
      <SelectFile />
    </FormBase>
  )
}
export default CampaignForm
