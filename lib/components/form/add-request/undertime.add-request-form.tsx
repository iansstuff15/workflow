'use client'
import SelectFile from '@/lib/components/file/select-file.components'
import AppTextAreaFormField from '../formfield/textArea.components'
import { formParams } from '@/lib/data/interface/form/form.interface'
import AppDatePicker from '@/lib/components/date/date.components'
import { Checkbox } from '@/lib/components/ui/checkbox'
import AppSelect from '@/lib/components/select/select.components'
import AppButton from '@/lib/components/button/appButtons'
import { MoveRight } from 'lucide-react'
import TimePickerPopOver from '@/lib/components/timepicker/timepicker.popover'
import { useState } from 'react'
import { useSupabase } from '@/lib/utilities/providers/backend/supabase'
import RequestFormHeader from './request-form-header.component'

const UndertimeAddRequestForm = ({ controller }: formParams) => {
  return (
    <>
      <RequestFormHeader />
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
