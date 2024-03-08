'use client'
import AppTable from '@/lib/components/table/table'
import { useEffect, useState } from 'react'
import { RealtimePostgresChangesPayload } from '@supabase/supabase-js'
import { ListenToData } from '@/lib/interactors/app.service'
import { TableCell, TableRow } from '@nextui-org/table'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/lib/components/ui/hover-card'
import { Snippet } from '@nextui-org/snippet'
import {
  formatDate,
  formatTime,
  transformToRelativeDate,
} from '@/lib/utilities/dayjs+'
import AppButton from '@/lib/components/button/appButtons'
import { Chip } from '@nextui-org/chip'
import {
  RequestStatusColors,
  RequestStatusType,
} from '@/lib/data/types/request/request.types'

const Request = () => {
  const [pagenateValue, setPagenateValue] = useState(49)
  const [data, setData] = useState<any>([])
  const [leaveData, setLeaveData] = useState<any>([])
  const [leavepayload, setLeavepayload] = useState<
    RealtimePostgresChangesPayload<{
      [key: string]: any
    }>
  >()
  const [underTimeData, setUnderTimeData] = useState<any>([])
  const [undertimepayload, setUndertimepayload] = useState<
    RealtimePostgresChangesPayload<{
      [key: string]: any
    }>
  >()
  const [officialBusinessData, setOfficialBusinessData] = useState<any>([])
  const [officialBusinessPayload, setOfficialBusinessPayload] = useState<
    RealtimePostgresChangesPayload<{
      [key: string]: any
    }>
  >()
  const [scheduleAdjustmentData, setScheduleAdjustmentData] = useState<any>([])
  const [scheduleAdjustmentPayload, setScheduleAdjustmentPayload] = useState<
    RealtimePostgresChangesPayload<{
      [key: string]: any
    }>
  >()
  const [certificateOfAttendanceData, setCertificateOfAttendanceData] =
    useState<any>([])
  const [certificateOfAttendancePayload, setCertificateOfAttendancePayload] =
    useState<
      RealtimePostgresChangesPayload<{
        [key: string]: any
      }>
    >()
  useEffect(() => {
    ListenToData({
      database: 'leave_request',
      setData: setLeaveData,
      setPayload: setLeavepayload,
      range: { start: 0, limit: 49 },
    })
    ListenToData({
      database: 'undertime_request',
      setData: setUnderTimeData,
      setPayload: setUndertimepayload,
      range: { start: 0, limit: 49 },
    })
    ListenToData({
      database: 'official_business_request',
      setData: setOfficialBusinessData,
      setPayload: setOfficialBusinessPayload,
      range: { start: 0, limit: 49 },
    })
    ListenToData({
      database: 'schedule_adjustment_request',
      setData: setScheduleAdjustmentData,
      setPayload: setScheduleAdjustmentPayload,
      range: { start: 0, limit: 49 },
    })
    ListenToData({
      database: 'certificate_of attendance_request',
      setData: setCertificateOfAttendanceData,
      setPayload: setCertificateOfAttendancePayload,
      range: { start: 0, limit: 49 },
    })
  }, [])
  useEffect(() => {
    setData([
      ...leaveData,
      ...underTimeData,
      ...officialBusinessData,
      ...scheduleAdjustmentData,
      ...certificateOfAttendanceData,
    ])
  }, [
    leaveData,
    underTimeData,
    officialBusinessData,
    scheduleAdjustmentData,
    certificateOfAttendanceData,
  ])
  return (
    <div className='mx-4'>
      <AppTable
        columns={[
          { name: 'Id', className: 'w-48' },
          { name: 'Type', className: 'w-48' },
          { name: 'Status', className: 'w-64' },
          { name: 'Reviewer', className: 'w-64' },
          { name: 'Requested Date', className: 'w-16' },
          { name: 'Created Date', className: 'w-16' },
          { name: 'Last Updated', className: 'w-16' },
        ]}
        data={data}
        rows={data?.map((data: any, index: number) => {
          return (
            <TableRow key={data.id}>
              <TableCell>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Snippet
                      size='sm'
                      symbol=''
                      className='w-full text-xs bg-transparent'
                    >
                      {data.id}
                    </Snippet>
                  </HoverCardTrigger>
                  <HoverCardContent className='w-full space-y-4 z-50'>
                    <div className='space-y-2 text-xs'></div>
                    <AppButton label='View all related information' block />
                  </HoverCardContent>
                </HoverCard>
              </TableCell>
              <TableCell>
                <h4 className='text-xs w-48'>{data.type}</h4>
              </TableCell>
              <TableCell>
                <Chip
                  color={
                    RequestStatusColors[data.status as RequestStatusType] as any
                  }
                  className='font-bold'
                  variant='dot'
                >
                  {data.status}
                </Chip>
              </TableCell>
              <TableCell>
                <h4 className='font-bold text-xs text-neutral-700 w-48'>
                  {data.type}
                </h4>
              </TableCell>
              <TableCell>
                <h4 className='font-bold text-xs text-neutral-700 w-48'>
                  {data.type}
                </h4>
              </TableCell>
              <TableCell>
                <h4 className='font-bold text-xs text-neutral-700 w-48'>
                  {formatDate(data.created_at)}
                </h4>
                <h5 className='text-xs text-neutral-600'>
                  {formatTime(data.created_at)}
                </h5>
                <h6 className='text-xs text-neutral-400'>
                  {transformToRelativeDate(data.created_at)}
                </h6>
              </TableCell>
              <TableCell>
                <h4 className='font-bold text-xs text-neutral-700 w-48'>
                  {formatDate(data.updated_at)}
                </h4>
                <h5 className='text-xs text-neutral-600'>
                  {formatTime(data.updated_at)}
                </h5>
                <h6 className='text-xs text-neutral-400'>
                  {transformToRelativeDate(data.updated_at)}
                </h6>
              </TableCell>
            </TableRow>
          )
        })}
      />
    </div>
  )
}

export default Request
