'use client'
import { OverlayProps } from '@/lib/data/interface/overlay/overlay'
import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover'
import { useRef, useState } from 'react'
import { Button } from '../ui/button'

import AppButton from '../button/appButtons'
import { setDate } from 'date-fns'
import { Clock } from 'lucide-react'
import { TimePickerInput } from './timepicker.input'
import AppSelect from '../select/select.components'
import { timepickerProps } from '@/lib/data/interface/time-picker/timepicker.interface'

const TimePickerPopOver = ({ label, controller }: timepickerProps) => {
  const [hour, setHour] = useState<Date | undefined>()
  const [minute, setMinute] = useState<Date | undefined>()
  const minuteRef = useRef<HTMLInputElement>(null)
  const hourRef = useRef<HTMLInputElement>(null)
  const secondRef = useRef<HTMLInputElement>(null)
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          className={`w-full justify-start font-normal col-span-5`}
        >
          {label} Time
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <div className='grid grid-cols-9 gap-2'>
          <div className='col-span-3'>
            <label className='text-xs' htmlFor='hours'>
              Hour
            </label>
            <TimePickerInput
              picker='hours'
              date={hour}
              setDate={value => {
                controller.setValue(
                  `${label.replace(' ', '_').toLowerCase()}_hours`,
                  value?.getHours(),
                )
                setHour(value)
              }}
              ref={hourRef}
              onRightFocus={() => minuteRef.current?.focus()}
            />
          </div>
          <div className='col-span-3'>
            <label className='text-xs' htmlFor='minutes'>
              Minute
            </label>
            <TimePickerInput
              picker='minutes'
              date={minute}
              setDate={value => {
                controller.setValue(
                  `${label.replace(' ', '_').toLowerCase()}_minutes`,
                  value?.getMinutes(),
                )
                setMinute(value)
              }}
              ref={minuteRef}
              onLeftFocus={() => hourRef.current?.focus()}
              onRightFocus={() => secondRef.current?.focus()}
            />
          </div>

          <div className='col-span-3'>
            <br />
            <AppSelect
              items={['AM', 'PM']}
              name='meridiem'
              controller={controller}
              defaultValue='AM'
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default TimePickerPopOver
