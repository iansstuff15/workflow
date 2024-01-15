import { CardBody, Card } from '@nextui-org/card'
import ListItem from './list-item/list-item.attendance-insights'

const AttendanceCreditsCard = () => {
  return (
    <Card className='w-full h-96 grid grid-rows-6 gap-1 px-4 py-8'>
      <div className='row-span-1'>
        <h1 className='text-2xl font-bold'>Attendance Credits</h1>
        <h2 className='text-sm text-slate-400'>From Date to Date</h2>
      </div>

      <CardBody className='row-span-4 overflow-scroll '>
        <div className='space-y-2 '>
          <ListItem label='Overtime' value={0} />
          <ListItem label='Undertime' value={0} />
          <ListItem label='Official Business' value={0} />
          <ListItem label='Late' value={0} />
        </div>
      </CardBody>
    </Card>
  )
}

export default AttendanceCreditsCard
