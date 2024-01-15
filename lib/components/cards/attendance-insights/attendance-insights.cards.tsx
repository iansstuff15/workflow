'use client'
import { Card, CardBody, CardFooter } from '@nextui-org/card'
import ListItem from './list-item/list-item.attendance-insights'
import { useSupabase } from '@/lib/utilities/providers/backend/supabase'

const AttendanceInsightsCard = () => {
  const supabase = useSupabase()
  const userInfo = supabase.userInfo
  return (
    <Card className='w-full  h-96 grid grid-rows-6 gap-1 px-4 py-8'>
      <div className='row-span-1'>
        <h1 className='text-2xl font-bold'>Attendance Insights</h1>
        <h2 className='text-sm text-slate-400'>From Date to Date</h2>
      </div>
      <CardBody className='row-span-4 overflow-scroll '>
        <div className='space-y-2 '>
          <ListItem
            label='Sick Leave Regular'
            value={userInfo?.sick_leave_credits ?? 0}
          />
          <ListItem
            label='Vacation Leave Regular'
            value={userInfo?.vacation_leave_credits ?? 0}
          />
          <ListItem
            label='Paternity Eligible'
            value={`${userInfo?.paternal_leave}`}
          />
          <ListItem
            label='Maternity Eligible'
            value={`${userInfo?.maternal_leave}`}
          />
        </div>
      </CardBody>
    </Card>
  )
}
export default AttendanceInsightsCard
