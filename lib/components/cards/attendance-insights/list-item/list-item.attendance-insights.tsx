import { Card } from '@/lib/components/ui/card'
import { attendanceInsighProps } from '@/lib/data/interface/attendance-insight/attendance-insight.interface'

const ListItem = ({ label, value }: attendanceInsighProps) => {
  return (
    <Card>
      <div className='grid grid-cols-3 py-2 px-3'>
        <div className='col-span-2'>
          <h1 className='text-xs'>{label}</h1>
        </div>
        <div className='justify-self-end text-end'>
          <h1 className='text-slate-500 text-xs'>{value}</h1>
        </div>
      </div>
    </Card>
  )
}

export default ListItem
