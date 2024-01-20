import { Badge } from '@/lib/components/ui/badge'
import { Card, CardContent } from '@/lib/components/ui/card'
import { timeLogProps } from '@/lib/data/interface/time-logging/time-logging.interface'
import { LogIn, LogOut } from 'lucide-react'

const LogItem = ({ time, date, type, location }: timeLogProps) => {
  return (
    <Card>
      <div className='grid grid-cols-2 py-2 px-3 h-1/2 col-span-2'>
        <div>
          <h1 className='text-sm'>{time}</h1>
          <h1 className='text-slate-500 text-xs'>{date}</h1>
        </div>
        <div className='justify-self-end text-end'>
          <Badge className={`${type == 'time_out' ? 'bg-destructive ' : ''}`}>
            <h3 className='text-xs flex'>
              {type == 'time_in' ? (
                <LogIn size={15} className={'mr-2'} />
              ) : (
                <LogOut size={15} className={'mr-2'} />
              )}

              {type.replace('_', ' ')}
            </h3>
          </Badge>
          <h3 className='text-slate-500 text-xs'>{location}</h3>
        </div>
      </div>
    </Card>
  )
}

export default LogItem
