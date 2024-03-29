'use client'
import AppButton from '@/lib/components/button/appButtons'
import TimeLoggingCard from '@/lib/components/cards/time-logging/time-logging.components'
import KPI from '@/lib/components/charts/kpi.components'

import AppTable from '@/lib/components/table/table'
import AttendanceTracker from '@/lib/components/tracker/attendance-tracker.component'
import { Card, CardBody, CardFooter } from '@nextui-org/card'

import { Text, Flex, Callout, ProgressBar, Title } from '@tremor/react'
import { Download, MoveRight } from 'lucide-react'

const Performance = () => {
  return (
    <div className='px-4  space-y-4'>
      <AttendanceTracker />
      <div className='mb-10 space-y-2' style={{ height: '100%' }}>
        <div className='h-full md:grid md:grid-cols-2 lg:grid-cols-3 grid-rows-3 space-y-2 gap-2'>
          <div className='row-span-2 col-span-1s'>
            <TimeLoggingCard />
          </div>
          <KPI />
        </div>
      </div>

      <Card className='py-4 px-1'>
        <CardBody>
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
          <Flex className='space-x-3 mt-3'>
            <h1 className='text-4xl text-primary'>{80}%</h1>
          </Flex>

          <Flex className='space-x-3 mt-3'>
            <ProgressBar className='mt-0' value={80} color={'blue'} />
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
        </CardBody>
        <CardFooter>
          <AppButton label='Download Performance Report' icon={<Download />} />
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
  )
}

export default Performance
