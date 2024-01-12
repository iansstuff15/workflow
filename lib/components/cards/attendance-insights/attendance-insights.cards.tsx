import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/lib/components/ui/card'
import ListItem from './list-item/list-item.attendance-insights'

const AttendanceInsightsCard = () => {
  return (
    <Card className='w-full h-full grid grid-rows-6 gap-1'>
      <CardHeader className='row-span-2'>
        <CardTitle>Attendance Insights</CardTitle>
        <CardDescription>From Date to Date</CardDescription>
      </CardHeader>
      <CardContent className='row-span-4 overflow-scroll '>
        <div className='space-y-2 '>
          <ListItem label='Sick Leave Regular' count={0} />
          <ListItem label='Vacation Leave Regular' count={0} />
          <ListItem label='Paternity' count={0} />
          <ListItem label='Maternity' count={0} />
        </div>
      </CardContent>
    </Card>
  )
}
export default AttendanceInsightsCard
