'use client'
import AppButton from '@/components/button/appButtons'
import { FormEvent } from 'react'
import { useForm } from 'react-hook-form'
import { onSubmit } from './add-request.form.controller'
import { Form } from '@/components/ui/form'
import AppSelect from '@/components/select/select.components'
import { DialogTrigger } from '@radix-ui/react-dialog'

import LeavesAddRequestForm from './leaves.add-request-form'
import UndertimeAddRequestForm from './undertime.add-request-form'
import OfficialBusinessAddRequestForm from './business.add-request-form'
import ScheduleAdjustmentAddRequestForm from './schedule.add-request'
import CertificateOfAttendanceAddRequestForm from './attendance.add-request'

const AddRequestForm = () => {
  const form = useForm()

  return (
    <Form {...form}>
      <form
        onSubmit={(event: FormEvent) => onSubmit({ event, form })}
        className='space-y-4'
      >
        <AppSelect
          items={[
            'Leave',
            'Undertime',
            'Official Business',
            'Schedule Adjustment',
            'Certificate of Attendance',
          ]}
          name='requestType'
          placeholder='Choose request type'
          controller={form}
        />
        {form.watch().requestType == 'Leave' ? (
          <LeavesAddRequestForm controller={form} />
        ) : form.watch().requestType == 'Undertime' ? (
          <UndertimeAddRequestForm controller={form} />
        ) : form.watch().requestType == 'Official Business' ? (
          <OfficialBusinessAddRequestForm controller={form} />
        ) : form.watch().requestType == 'Schedule Adjustment' ? (
          <ScheduleAdjustmentAddRequestForm controller={form} />
        ) : form.watch().requestType == 'Certificate of Attendance' ? (
          <CertificateOfAttendanceAddRequestForm controller={form} />
        ) : null}

        <div className='grid grid-cols-2 gap-2'>
          <DialogTrigger>
            <AppButton
              onClick={() => {}}
              label='Cancel'
              variant={'ghost'}
              block
            />
          </DialogTrigger>

          <AppButton type='submit' onClick={e => {}} label='Submit' block />
        </div>
      </form>
    </Form>
  )
}

export default AddRequestForm
