'use client'
import AppButton from '@/lib/components/button/appButtons'
import { FormEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { onSubmit } from './add-request.form.controller'
import { Form } from '@/lib/components/ui/form'
import AppSelect from '@/lib/components/select/select.components'
import { DialogTrigger } from '@radix-ui/react-dialog'

import LeavesAddRequestForm from './leaves.add-request-form'
import UndertimeAddRequestForm from './undertime.add-request-form'
import OfficialBusinessAddRequestForm from './business.add-request-form'
import ScheduleAdjustmentAddRequestForm from './schedule.add-request'
import CertificateOfAttendanceAddRequestForm from './attendance.add-request'
import FormBase from '../form-base.component'

const RequestForm = () => {
  const form = useForm()
  const [submitRoute, setSumbitRoute] = useState('/')
  return (
    <FormBase
      controller={form}
      submitRoute={submitRoute}
      data={form.getValues()}
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
    </FormBase>
  )
}

export default RequestForm
