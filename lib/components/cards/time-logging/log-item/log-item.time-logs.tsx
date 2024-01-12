import { Badge } from '@/lib/components/ui/badge'
import { Card, CardContent } from '@/lib/components/ui/card'

const LogItem = () => {
  return (
    <Card>
      <div className='grid grid-cols-2 py-2 px-3 h-1/2 col-span-2'>
        <div>
          <h1 className='text-sm'>Time</h1>
          <h3 className='text-slate-500 text-xs'>Location</h3>
        </div>
        <div className='justify-self-end text-end'>
          <Badge>
            <h3 className='text-xs'>Time In</h3>
          </Badge>
          <h1 className='text-slate-500 text-xs'>Month 03,2034</h1>
        </div>
      </div>
    </Card>
  )
}

export default LogItem
