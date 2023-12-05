'use client'
import { Text, Flex, Tracker } from '@tremor/react'

import { Card } from '../ui/card'
import { Circle } from 'lucide-react'

const AttendanceTracker = () => {
  return (
    <Card className='p-4'>
      <Flex>
        <div className='flex text-xs gap-1'>
          <label className='bg-primary text-white py-1 px-3 rounded-full'>
            Complete Logs
          </label>
          <label className='bg-orange-600 text-white py-1 px-3 rounded-full'>
            Incomplete Logs
          </label>
          <label className='bg-amber-600 text-white py-1 px-3 rounded-full'>
            Leave
          </label>
          <label className='bg-red-600 text-white py-1 px-3 rounded-full'>
            Absent
          </label>
          <label className='bg-zinc-700 text-white py-1 px-3 rounded-full'>
            Weekend
          </label>

          <label className='bg-slate-400 text-white py-1 px-3 rounded-full'>
            No logs
          </label>
        </div>
      </Flex>
      <Flex className='mt-4 text-xs'>
        <Text>This month attendance</Text>
        <Text>31 days</Text>
      </Flex>
      <Tracker
        data={[{ color: 'emerald' }, { color: 'slate' }]}
        className='mt-2'
      />
      <Flex className='mt-2 text-xs'>
        <Text>Aug 01</Text>
        <Text>Aug 31</Text>
      </Flex>
    </Card>
  )
}
export default AttendanceTracker
