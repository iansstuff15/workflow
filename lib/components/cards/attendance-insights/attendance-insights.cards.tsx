'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/lib/components/ui/card'
import ListItem from './list-item/list-item.attendance-insights'
import { useSupabase } from '@/lib/utilities/providers/backend/supabase'

const AttendanceInsightsCard = () => {
  const supabase = useSupabase()
  const userInfo = supabase.userInfo
  return (
    <Card className='w-full h-full grid grid-rows-6 gap-1'>
      <CardHeader className='row-span-2'>
        <CardTitle>Attendance Insights</CardTitle>
        <CardDescription>From Date to Date</CardDescription>
      </CardHeader>
      <CardContent className='row-span-4 overflow-scroll '>
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
      </CardContent>
    </Card>
  )
}
export default AttendanceInsightsCard
