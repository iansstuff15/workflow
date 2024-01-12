import {
  CardTitle,
  CardDescription,
  CardContent,
  Card,
  CardHeader,
} from '@/lib/components/ui/card'
import ListItem from './list-item/list-item.attendance-insights'

const AttendanceCreditsCard = () => {
  return (
    <Card className='w-full h-full grid grid-rows-6 gap-1'>
      <CardHeader className='row-span-2'>
        <CardTitle>Attendance Credits</CardTitle>
        <CardDescription>From Date to Date</CardDescription>
      </CardHeader>
      <CardContent className='row-span-4 overflow-scroll '>
        <div className='space-y-2 '>
          <ListItem label='Overtime' count={0} />
          <ListItem label='Undertime' count={0} />
          <ListItem label='Official Business' count={0} />
          <ListItem label='Late' count={0} />
        </div>
      </CardContent>
    </Card>
  )
}

export default AttendanceCreditsCard
