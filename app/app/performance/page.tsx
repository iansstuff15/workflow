'use client'
import AppButton from '@/components/button/appButtons'
import TimeLoggingCard from '@/components/cards/time-logging/time-logging.components'
import KPI from '@/components/charts/kpi.components'
import AttendanceSection from '@/components/sections/dashboard/attendance.components'
import AppTable from '@/components/table/table'
import AttendanceTracker from '@/components/tracker/attendance-tracker.component'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

import { Metric, Text, Flex, Callout } from '@tremor/react'
import { Download, MoveRight } from 'lucide-react'

const Performance = () => {
  return (
    <>
      <div className='px-4  space-y-4'>
        <AttendanceTracker />
        <div className='mb-10 space-y-2' style={{ height: '100%' }}>
          <div className='h-full grid grid-cols-3 grid-rows-3 gap-2'>
            <div className='row-span-2 col-span-1s'>
              <TimeLoggingCard />
            </div>
            <KPI />
          </div>
        </div>

        <Card className='py-4 px-1'>
          <CardContent>
            <Text>Overall Performance Rating</Text>
            <Flex
              justifyContent='start'
              alignItems='baseline'
              className='space-x-3 truncate'
            >
              <Text className='text-xs text-normal'>
                from January 01 to Aug 31, 2023
              </Text>
            </Flex>
            <Callout
              className='mt-6 text-xs'
              title={`Performing as usual`}
              icon={MoveRight}
              color={'blue'}
            >
              Lorem dolore commodo tempor exercitation do. Do ut minim labore
              cillum qui pariatur. Cupidatat occaecat ut laboris dolor cupidatat
              enim nostrud elit est enim culpa velit. Lorem cupidatat tempor ad
              cupidatat occaecat aliqua cillum consequat voluptate mollit.
            </Callout>
          </CardContent>
          <CardFooter>
            <AppButton
              label='Download Performance Report'
              icon={<Download />}
            />
          </CardFooter>
        </Card>

        <h1 className='font-semibold font-sm'>Performance Report</h1>
        <AppTable
          columns={[
            { name: 'Reviewer', className: 'w-64' },
            { name: 'Requested Date', className: 'w-16' },
            { name: 'Date Reported', className: 'w-16' },
            { name: 'Last Updated', className: 'w-16' },
            { name: 'Actions', className: 'w-64' },
          ]}
        />
        <h1 className='font-semibold font-sm'>Incident Reports</h1>
        <AppTable
          columns={[
            { name: 'Attachment', className: 'w-48' },
            { name: 'Reviewer', className: 'w-64' },
            { name: 'Requested Date', className: 'w-16' },
            { name: 'Date Reported', className: 'w-16' },
            { name: 'Last Updated', className: 'w-16' },
            { name: 'Actions', className: 'w-64' },
          ]}
        />
      </div>
    </>
  )
}

export default Performance
