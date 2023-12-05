import {
  Metric,
  Text,
  Flex,
  Callout,
  Color,
  Grid,
  CalloutProps,
} from '@tremor/react'
import { MoveRight, TrendingDown, TrendingUp } from 'lucide-react'
import { Card } from '../ui/card'

const KPI = () => {
  const categories = [
    {
      title: 'Indicator 1',
      metric: '$ 12,699',
      metricPrev: '$ 9,456',
      delta: '+34.3%',
      status: 'Overperforming',
      color: 'emerald' as CalloutProps['color'],
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      icon: TrendingUp,
    },
    {
      title: 'Indicator 2',
      metric: '$ 40,598',
      metricPrev: '$ 45,564',
      delta: '-10.9%',
      status: 'Underperforming',
      color: 'amber' as CalloutProps['color'],
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      icon: TrendingDown,
    },
    {
      title: 'Indicator 3',
      metric: '1,016',
      metricPrev: '1,001',
      delta: '+1.3%',
      status: 'Performing as usual',
      color: 'blue' as CalloutProps['color'],
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      icon: MoveRight,
    },
    {
      title: 'Indicator 4',
      metric: '$ 12,699',
      metricPrev: '$ 9,456',
      delta: '+34.3%',
      status: 'Overperforming',
      color: 'emerald' as CalloutProps['color'],
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      icon: TrendingUp,
    },
    {
      title: 'Indicator 5',
      metric: '$ 40,598',
      metricPrev: '$ 45,564',
      delta: '-10.9%',
      status: 'Underperforming',
      color: 'amber' as CalloutProps['color'],
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      icon: TrendingDown,
    },
    {
      title: 'Indicator 6',
      metric: '1,016',
      metricPrev: '1,001',
      delta: '+1.3%',
      status: 'Performing as usual',
      color: 'blue' as CalloutProps['color'],
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      icon: MoveRight,
    },
    {
      title: 'Indicator 4',
      metric: '$ 12,699',
      metricPrev: '$ 9,456',
      delta: '+34.3%',
      status: 'Overperforming',
      color: 'emerald' as CalloutProps['color'],
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      icon: TrendingUp,
    },
  ]
  return (
    <>
      {categories.map(item => (
        <Card key={item.title} className='p-4'>
          <Text>{item.title}</Text>
          <Flex
            justifyContent='start'
            alignItems='baseline'
            className='space-x-3 truncate'
          >
            <Metric className='text-xs text-normal'>{item.metric}</Metric>
            <Text className='text-xs text-normal'>from {item.metricPrev}</Text>
          </Flex>
          <Callout
            className='mt-6 text-xs'
            title={`${item.status} (${item.delta})`}
            icon={item.icon}
            color={item.color}
          >
            {item.text}
          </Callout>
        </Card>
      ))}
    </>
  )
}

export default KPI
