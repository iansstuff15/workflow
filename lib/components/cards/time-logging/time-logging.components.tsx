import AppButton from '@/lib/components/button/appButtons'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/lib/components/ui/card'
import LogItem from './log-item/log-item.time-logs'
import { timeLoggingProps } from '@/lib/data/interface/time-logging/time-logging.interface'
import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react'
import AppDialog from '@/lib/utilities/providers/overlays/dialog/dialog'
import TimeLogForm from '@/lib/components/form/time-log/time-log.form'

const TimeLoggingCard = ({ block }: timeLoggingProps) => {
  return (
    <Card
      className={`w-full h-96 sm:h-[${
        block ? '100%' : '384px'
      }]  grid grid-rows-6 gap-3`}
    >
      <CardHeader className='row-span-1'>
        <CardTitle className='text-md'>Time Logs</CardTitle>
        <CardDescription className='text-xs'>
          Todo: Current time / Location
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-3 row-span-3'>
        <h1 className='text-xs font-bold mt-2'>Log history</h1>
        <div className='h-full space-y-3 overflow-scroll '>
          <div className='space-y-2 '>
            <LogItem />
            <LogItem />
            <LogItem />
            <LogItem />
            <LogItem />
            <LogItem />
            <LogItem />
            <LogItem />
            <LogItem />
            <LogItem />
            <LogItem />
          </div>
        </div>
      </CardContent>
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
