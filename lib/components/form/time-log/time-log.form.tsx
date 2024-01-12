import { Card, CardContent } from '@/lib/components/ui/card'
import dayjs from 'dayjs'
const TimeLogForm = () => {
  const now = new Date()
  return (
    <div>
      <div className='space-y-3'>
        <div className='grid grid-cols-2 gap-2'>
          <div>
            <h1 className='font-bold text-primary'>Current Date</h1>
            <p>{dayjs(now).format('dddd, MMM DD, YYYY')}</p>
          </div>
          <div className='text-end'>
            <h1 className='font-bold text-primary'>Current Time</h1>
            <p>
              {now.toLocaleTimeString('en-US', {
                formatMatcher: 'best fit',
              })}
            </p>
          </div>
        </div>
        <div>
          <h1 className='font-bold text-primary'>Current Location</h1>
          <p>Remote (via browser platform)</p>
        </div>
      </div>
    </div>
  )
}

export default TimeLogForm
