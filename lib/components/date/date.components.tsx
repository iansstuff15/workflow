import { datePickerProps } from '@/lib/data/interface/date-picker/date-picker.interface'
import { Calendar } from '../ui/calendar'
import { addDays } from 'date-fns'
import { DateRange } from 'react-day-picker'
import { useState } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/lib/components/ui/popover'
import { Button } from '../ui/button'
const AppDatePicker = ({ controller, className }: datePickerProps) => {
  const now = new Date()
  const [buttonLabel, setButtonLabel] = useState('Choose Date')
  const [range, setRange] = useState<DateRange>({
    from: now,
    to: addDays(now, 1),
  })
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant='outline'
            className={`w-full justify-start font-normal ${className}`}
          >
            {buttonLabel}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-80'>
          <Calendar
            mode='range'
            selected={range}
            onSelect={value => {
              const from = value?.from
              const to = value?.to
              controller.setValue('startDate', value?.from)
              controller.setValue('endDate', value?.to)
              setRange(value!)
              setButtonLabel(
                `From ${from?.toLocaleString('default', {
                  month: 'long',
                  day: '2-digit',
                  year: 'numeric',
                })} ${
                  value?.to
                    ? `to ${to?.toLocaleString('default', {
                        month: 'long',
                        day: '2-digit',
                        year: 'numeric',
                      })}`
                    : ''
                }`,
              )
              if (value?.from == undefined) {
                setButtonLabel('Choose Date')
              }
            }}
          />
        </PopoverContent>
      </Popover>
    </>
  )
}

export default AppDatePicker
