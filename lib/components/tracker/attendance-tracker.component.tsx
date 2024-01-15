'use client'
import { Text, Flex, Tracker, Color } from '@tremor/react'

import { Card } from '@nextui-org/card'
import { Circle } from 'lucide-react'
import { data } from './dummy-tracker'
interface Tracker {
  color: Color
  tooltip: string
}

const AttendanceTracker = () => {
  return (
    <Card className='p-4'>
      <Flex>
        <div className='flex text-xs gap-1 overflow-x-scroll'>
          <label className='bg-primary text-white py-1 px-3 rounded-full min-w-fit'>
            Complete Logs
          </label>
          <label className='bg-orange-600 text-white py-1 px-3 rounded-full min-w-fit'>
            Incomplete Logs
          </label>
          <label className='bg-amber-600 text-white py-1 px-3 rounded-full min-w-fit'>
            Leave
          </label>
          <label className='bg-red-600 text-white py-1 px-3 rounded-full min-w-fit'>
            Absent
          </label>
          <label className='bg-indigo-700 text-white py-1 px-3 rounded-full min-w-fit'>
            Holiday
          </label>
          <label className='bg-zinc-700 text-white py-1 px-3 rounded-full min-w-fit'>
            Weekend
          </label>

          <label className='bg-slate-400 text-white py-1 px-3 rounded-full min-w-fit'>
            No logs
          </label>
        </div>
      </Flex>
      <Flex className='mt-4 text-xs'>
        <Text>This month attendance</Text>
        <Text>31 days</Text>
      </Flex>
      <Tracker data={data as Array<Tracker>} />
      <Flex className='mt-2 text-xs'>
        <Text>Aug 01</Text>
        <Text>Aug 31</Text>
      </Flex>
    </Card>
  )
}
export default AttendanceTracker
