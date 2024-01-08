'use client'
import AppTable from '@/components/table/table'
import TableToolBar from '@/components/table/toolbar/toolbar'
import { supabase } from '@/utilities/providers/backend/supabase'
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
} from '@/components/ui/hover-card'
import AppButton from '@/components/button/appButtons'
import { data } from '../../../components/tracker/dummy-tracker'
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
      .from('employee')
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
          { name: 'First Name', className: 'w-64' },
          { name: 'Last Name', className: 'w-16' },
          { name: 'Phone', className: 'w-16' },
          { name: 'Email', className: 'w-16' },
          { name: 'Position', className: 'w-16' },
          { name: 'Sick Leave Credits', className: 'w-16' },
          { name: 'Vacation Leave Credits', className: 'w-16' },
          { name: 'Maternal Leave Elegible', className: 'w-16' },
          { name: 'Paternal Leave Elegible', className: 'w-16' },
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
                      <h1 className='font-bold text-lg'>
                        {data.last_name}, {data.first_name}
                      </h1>
                      <div className='grid grid-cols-2'>
                        <h2>created: {dayjs(data.created_at).fromNow()}</h2>
                        <h2>
                          last updated: {dayjs(data.updated_at).fromNow()}
                        </h2>
                      </div>
                      <div className='grid grid-cols-2'>
                        <h2>phone: {data.phone}</h2>
                        <h2>email: {data.email}</h2>
                      </div>
                      <div className='grid grid-cols-2'>
                        <h2>sick leaves: {data.sick_leave_credit}</h2>
                        <h2>vacation leaves: {data.vacation_leave_credit}</h2>
                      </div>
                      <div className='grid grid-cols-2'>
                        <h2>
                          is maternal leave eligible: {data.maternal_leave}
                        </h2>
                        <h2>
                          is paternal leave eligible: {data.paternal_leave}
                        </h2>
                      </div>
                    </div>
                    <AppButton label='View all related information' block />
                  </HoverCardContent>
                </HoverCard>
              </TableCell>
              <TableCell>
                <h5 className='w-40'>{data.first_name}</h5>
              </TableCell>
              <TableCell>
                <h5 className='w-40'>{data.last_name}</h5>
              </TableCell>
              <TableCell>
                <Snippet
                  size='sm'
                  symbol=''
                  className='w-full text-xs bg-transparent'
                >
                  {data.phone}
                </Snippet>
              </TableCell>
              <TableCell>
                <Snippet size='sm' symbol='' className='w-full bg-transparent'>
                  {data.email}
                </Snippet>
              </TableCell>
              <TableCell>{data.position}</TableCell>
              <TableCell>{data.sick_leave_credit}</TableCell>
              <TableCell>{data.vacation_leave_credit}</TableCell>
              <TableCell>
                <Chip
                  color={data.maternal_leave ? 'success' : 'danger'}
                  className='font-bold'
                  variant='dot'
                >
                  {data.maternal_leave.toString()}
                </Chip>
              </TableCell>
              <TableCell>
                <Chip
                  color={data.paternal_leave ? 'success' : 'danger'}
                  className='font-bold'
                  variant='dot'
                >
                  {data.paternal_leave.toString()}
                </Chip>
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
