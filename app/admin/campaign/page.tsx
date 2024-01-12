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
dayjs.extend(relativeTime)
const Page = () => {
  const [pagenateValue, setPagenateValue] = useState(49)
  const [data, setData] = useState<any>()
  const [payload, setPayload] = useState<
    RealtimePostgresChangesPayload<{
      [key: string]: any
    }>
  >()
  const getData = async () => {
    let { data, error } = await supabase
      .from('campaign')
      .select('*')
      .range(0, pagenateValue)
    setData(data)
    supabase
      .channel('custom-all-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'employee' },
        async payload => {
          console.log('Change received!', payload)
          setPayload(payload)
          let { data, error } = await supabase
            .from('employee')
            .select('*')
            .range(0, pagenateValue)
          setData(data)
        },
      )
      .subscribe()
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className='mx-4 '>
      <AppTable
        setPagination={setPagenateValue}
        columns={[
          { name: 'Id', className: 'w-64' },
          { name: 'Title', className: 'w-64' },
          { name: 'Event Date', className: 'w-64' },
          { name: 'Description', className: 'w-64' },
          { name: 'Link', className: 'w-64' },
          { name: 'Images', className: 'w-64' },
          { name: 'Created Date', className: 'w-16' },
          { name: 'Last Updated', className: 'w-16' },
        ]}
        data={data}
        rows={data?.map((data: any, index: number) => {
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
                  <HoverCardContent className='w-full space-y-4'>
                    <div className='space-y-2 text-xs'>
                      <h1 className='font-bold text-lg'></h1>
                    </div>
                    <AppButton label='View all related information' block />
                  </HoverCardContent>
                </HoverCard>
              </TableCell>
              <TableCell>
                <h4>{data.title}</h4>
              </TableCell>
              <TableCell>
                <h4>{dayjs(data.event_date).format('dddd, MMM DD, YYYY')}</h4>
              </TableCell>
              <TableCell>
                <h4>{data.description}</h4>
              </TableCell>
              <TableCell>
                <h4>{data.link}</h4>
              </TableCell>
              <TableCell>
                <h4>{data.images}</h4>
              </TableCell>
              <TableCell>
                <h4 className='font-bold text-xs text-neutral-700 w-48'>
                  {dayjs(data.created_at).format('dddd, MMM DD, YYYY')}
                </h4>
                <h5 className='text-xs text-neutral-600'>
                  {dayjs(data.created_at).format('hh:MM:ss a')}
                </h5>
                <h6 className='text-xs text-neutral-400'>
                  {dayjs(data.created_at).fromNow()}
                </h6>
              </TableCell>
              <TableCell>
                <h4 className='font-bold text-xs text-neutral-700 w-48'>
                  {dayjs(data.updated_at).format('dddd, MMM DD, YYYY')}
                </h4>
                <h5 className='text-xs text-neutral-600'>
                  {dayjs(data.updated_at).format('hh:MM:ss a')}
                </h5>
                <h6 className='text-xs text-neutral-400'>
                  {dayjs(data.updated_at).fromNow()}
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
