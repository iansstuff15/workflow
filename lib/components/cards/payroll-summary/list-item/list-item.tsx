import { Badge } from '@/lib/components/ui/badge'
import { Card } from '@/lib/components/ui/card'
import { attendanceInsighProps } from '@/lib/data/interface/attendance-insight/attendance-insight.interface'

const ListItem = ({ label, value: count }: attendanceInsighProps) => {
  return (
    <Card>
      <div className='grid grid-cols-2 py-2 px-3'>
        <div>
          <h1>₱ 000,000</h1>
          <h3 className='text-slate-500 text-xs'>Deductions: ₱ 000,000</h3>
        </div>
        <div className='justify-self-end text-end'>
          <h3>Date</h3>
          <Badge className='cursor-pointer select-none'>view</Badge>
        </div>
      </div>
    </Card>
  )
}

export default ListItem
