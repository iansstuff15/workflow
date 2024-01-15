import AppButton from '@/lib/components/button/appButtons'
import { Card, CardBody, CardHeader, CardFooter } from '@nextui-org/card'
import LogItem from './log-item/log-item.time-logs'
import { timeLoggingProps } from '@/lib/data/interface/time-logging/time-logging.interface'
import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react'
import AppDialog from '@/lib/utilities/providers/overlays/dialog/dialog'
import TimeLogForm from '@/lib/components/form/time-log/time-log.form'
import { useEffect, useState } from 'react'
import { ListenToDataWithEqualFilter } from '@/lib/interactors/app.service'
import { RealtimePostgresChangesPayload } from '@supabase/supabase-js'
import { useSupabase } from '@/lib/utilities/providers/backend/supabase'
import { TimeLogResponse } from '@/lib/data/response/time-log/time-log.response'
import { formatTime } from '@/lib/utilities/dayjs+'

const TimeLoggingCard = ({ block }: timeLoggingProps) => {
  const [data, setData] = useState<any>()
  const supabase = useSupabase()
  const userID = supabase.userID
  const [payload, setPayload] = useState<
    RealtimePostgresChangesPayload<{
      [key: string]: any
    }>
  >()
  useEffect(() => {
    ListenToDataWithEqualFilter({
      setData: setData,
      setPayload: setPayload,
      database: 'time_logs',
      range: {
        start: 0,
        limit: 30,
      },
      filter: {
        column: 'employee',
        value: userID ?? 'a',
      },
    })
  }, [userID])
  return (
    <Card className={`w-full h-96 py-8 px-4`}>
      <div className='row-span-1'>
        <h1 className='text-2xl font-bold'>Time Logs</h1>
        <h2 className='text-sm text-slate-400'>
          Todo: Current time / Location
        </h2>
      </div>
      <CardBody className='space-y-3 row-span-3'>
        <h1 className='text-xs font-bold mt-2'>Log history</h1>
        <div className='h-full space-y-3 overflow-scroll '>
          <div className='space-y-2 '>
            {data?.map((data: TimeLogResponse, index: number) => {
              return (
                <LogItem
                  key={index}
                  date={formatTime(data.date_time)}
                  time={formatTime(data.date_time)}
                  location={data.location}
                  type={data.logType}
                />
              )
            }) ?? 'No data found, start logging!'}
          </div>
        </div>
      </CardBody>
      <CardFooter className='row-span-2 '>
        <div className='grid grid-rows-2 w-full gap-2  mt-4'>
          <AppDialog
            isOKLabel='Time in'
            isOKAction={() => console.log('time in')}
            title='Are you sure you want to time in?'
            trigger={
              <AppButton label='Time in' block icon={<ArrowRightFromLine />} />
            }
          >
            <TimeLogForm />
          </AppDialog>
          <AppDialog
            isOKLabel='Time out'
            isOKAction={() => console.log('time out')}
            title='Are you sure you want to time out?'
            trigger={
              <AppButton
                icon={<ArrowLeftFromLine />}
                label='Time out'
                variant={'destructive'}
                block
              />
            }
          >
            <TimeLogForm />
          </AppDialog>
        </div>
      </CardFooter>
    </Card>
  )
}
export default TimeLoggingCard
