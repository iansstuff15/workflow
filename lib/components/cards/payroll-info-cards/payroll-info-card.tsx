import AppButton from '@/lib/components/button/appButtons'

import { Grid, Metric, Text, Card } from '@tremor/react'
import { ArrowDownToLine, Save } from 'lucide-react'

const data = [
  {
    title: 'Recent Monthly Compensation Received',
    subtitle: 'from Nov 01 - 15, 2023',
    metric: '$ 23,456',
  },
  {
    title: 'Recent Year to Date Compensation',
    subtitle: 'from Jan 01 - Nov 15, 2023',
    metric: '$ 13,123',
  },
  {
    title: 'Total Bonuses Received',
    subtitle: 'from Jan 01 - Nov 15, 2023',
    metric: '$ 13,123',
  },
]

const PayrollInfoCard = () => {
  return (
    <Grid numItemsSm={2} numItemsLg={3} className='gap-2'>
      {data.map(item => (
        <Card key={item.title} className='py-4 px-6 space-y-2 grid grid-cols-1'>
          <h2 className='font-semibold text-primary text-sm'>{item.title}</h2>
          <h2 className='font-semibold text-xs text-slate-500'>
            {item.subtitle}
          </h2>
          <h1 className='text-4xl  font-bold'>{item.metric}</h1>
          <AppButton
            label='Save Document'
            className='justify-self-end'
            icon={<ArrowDownToLine />}
          />
        </Card>
      ))}
    </Grid>
  )
}

export default PayrollInfoCard
