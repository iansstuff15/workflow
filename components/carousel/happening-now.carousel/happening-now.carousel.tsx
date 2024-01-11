'use client'
import HappeningNowCard from '@/components/cards/happening-now/happening-now.cards'
import { useEffect, useState } from 'react'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { RealtimePostgresChangesPayload } from '@supabase/supabase-js'
import { supabase } from '@/utilities/providers/backend/supabase'
import dayjs from 'dayjs'

const HappeningNowCarousel = () => {
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
      .range(0, 9)
    setData(data)
    supabase
      .channel('custom-all-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'campaign' },
        async payload => {
          console.log('Change received!', payload)
          setPayload(payload)
          let { data, error } = await supabase
            .from('campaign')
            .select('*')
            .range(0, 9)
          setData(data)
        },
      )
      .subscribe()
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <ScrollArea className=''>
      <div className='flex w-max space-x-4 p-4'>
        {data?.map((item: any) => (
          <HappeningNowCard
            key={item.id}
            title={item.title}
            subtitle={
              item.event_date
                ? dayjs(data.event_date).format('dddd, MMM DD, YYYY')
                : undefined
            }
            location={item.location}
            description={item.description}
            createdAt={item.created_at}
            link={item.link}
            image={item.image}
          />
        )) ?? null}
      </div>

      <ScrollBar orientation='horizontal' />
    </ScrollArea>
  )
}

export default HappeningNowCarousel
