'use client'
import AppTable from '@/lib/components/table/table'
import TableToolBar from '@/lib/components/table/toolbar/toolbar'
import { supabase } from '@/lib/utilities/providers/backend/supabase'
import { TableCell, TableRow } from '@nextui-org/table'
import { Chip } from '@nextui-org/chip'
import { RealtimePostgresChangesPayload } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { Snippet } from '@nextui-org/snippet'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Pagination } from '@nextui-org/pagination'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/lib/components/ui/hover-card'
import AppButton from '@/lib/components/button/appButtons'
import { data } from '../../../lib/components/tracker/dummy-tracker'
import {
  formatDate,
  formatTime,
  transformToRelativeDate,
} from '@/lib/utilities/dayjs+'
import { ListenToData } from '@/lib/interactors/app.service'
dayjs.extend(relativeTime)
const Page = () => {
  const [pagenateValue, setPagenateValue] = useState(49)
  const statusColors = {
    Available: 'success',
    'In Use': 'primary',
    'For Repair': 'warning',
    'For Disposal': 'danger',
  }
  const [data, setData] = useState<any>()
  const [payload, setPayload] = useState<
    RealtimePostgresChangesPayload<{
      [key: string]: any
    }>
  >()

  useEffect(() => {
    ListenToData({
      database: 'inventory',
      setData: setData,
      setPayload: setPayload,
      range: { start: 0, limit: 49 },
    })
  }, [])
  return (
    <div className='mx-4 '>
      <AppTable
        setPagination={setPagenateValue}
        columns={[
          { name: 'Id', className: 'w-64' },
          { name: 'Serial Number', className: 'w-64' },
          { name: 'Brand', className: 'w-16' },
          { name: 'Model', className: 'w-16' },
          { name: 'Type', className: 'w-16' },
          { name: 'Current Status', className: 'w-16' },
          { name: 'Created Date', className: 'w-16' },
          { name: 'Last Updated', className: 'w-16' },
        ]}
        data={data}
        rows={data?.map((data: any, index: number) => {
          // @ts-ignore
          return (
            <TableRow key={data.id}>
              <TableCell>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Snippet
                      size='sm'
                      symbol=''
                      className='w-full text-xs bg-transparent'
                    >
                      {data.id}
                    </Snippet>
                  </HoverCardTrigger>
                  <HoverCardContent className='w-full space-y-4 z-50'>
                    <div className='space-y-2 text-xs'>
                      <h1 className='font-bold text-lg'>
                        {data.last_name}, {data.first_name}
                      </h1>
                      <div className='grid grid-cols-2'>
                        <h2>
                          created: {transformToRelativeDate(data.created_at)}
                        </h2>
                        <h2>
                          last updated:{' '}
                          {transformToRelativeDate(data.updated_at)}
                        </h2>
                      </div>
                    </div>
                    <AppButton label='View all related information' block />
                  </HoverCardContent>
                </HoverCard>
              </TableCell>
              <TableCell>
                <h5 className='w-40'>{data.serial_number}</h5>
              </TableCell>
              <TableCell>
                <h5 className='w-40'>{data.type}</h5>
              </TableCell>
              <TableCell>{data.model}</TableCell>
              <TableCell>{data.type}</TableCell>
              <TableCell>
                <Chip
                  color={
                    statusColors[
                      data.current_status as keyof typeof statusColors
                    ] as any
                  }
                  className='font-bold'
                  variant='dot'
                >
                  {data.current_status}
                </Chip>
              </TableCell>
              <TableCell>
                <h4 className='font-bold text-xs text-neutral-700 w-48'>
                  {formatDate(data.created_at)}
                </h4>
                <h5 className='text-xs text-neutral-600'>
                  {formatTime(data.created_at)}
                </h5>
                <h6 className='text-xs text-neutral-400'>
                  {transformToRelativeDate(data.created_at)}
                </h6>
              </TableCell>
              <TableCell>
                <h4 className='font-bold text-xs text-neutral-700 w-48'>
                  {formatDate(data.updated_at)}
                </h4>
                <h5 className='text-xs text-neutral-600'>
                  {formatTime(data.updated_at)}
                </h5>
                <h6 className='text-xs text-neutral-400'>
                  {transformToRelativeDate(data.updated_at)}
                </h6>
              </TableCell>
            </TableRow>
          )
        })}
      />
    </div>
  )
}

export default Page
