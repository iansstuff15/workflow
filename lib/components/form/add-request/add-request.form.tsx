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
import { useSupabase } from '@/lib/utilities/providers/backend/supabase'
import { API_CREATE_REQUEST } from '@/lib/config/constants/routes/routes'

const RequestForm = () => {
  type requestType =
    | 'Leave'
    | 'Undertime'
    | 'Official Business'
    | 'Schedule Adjustment'
    | 'Certificate of Attendance'
  const [requestType, setRequestType] = useState<requestType>()
  const form = useForm()
  const forms = {
    Leave: <LeavesAddRequestForm controller={form} />,
    Undertime: <UndertimeAddRequestForm controller={form} />,
    'Official Business': <OfficialBusinessAddRequestForm controller={form} />,
    'Schedule Adjustment': (
      <ScheduleAdjustmentAddRequestForm controller={form} />
    ),
    'Certificate of Attendance': (
      <CertificateOfAttendanceAddRequestForm controller={form} />
    ),
  }
  const supabase = useSupabase()
  const userInfo = supabase.userInfo
  const userID = supabase.userID
  const disableSubmit = () => {
    if (form.watch('requestType') == 'Leave') {
      if (form.watch('leaveType') == 'Vacation') {
        if (userInfo) {
          return userInfo.vacation_leave_credits <= 0
        }
      } else if (form.watch('leaveType') == 'Sick') {
        if (userInfo) {
          return userInfo.sick_leave_credits <= 0
        }
      }
      return false
    }
    return false
  }
  return (
    <FormBase
      controller={form}
      submitRoute={API_CREATE_REQUEST}
      data={{
        ...form.getValues(),
        applied_by: userID,
        reviewed_by: '6c318999-a29a-4dc1-a6ff-2494ace5fc6c',
      }}
      showOkButton={form.watch('requestType') != null}
      disableOKButton={disableSubmit()}
      showCancel={form.watch('requestType') != null}
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
      {forms[form.watch('requestType') as requestType]}
    </FormBase>
  )
}

export default RequestForm
