import { Card, List, ListItem, Text } from '@tremor/react'

const data = [
  { title: 'Monthly Compensation', amount: 'Sample' },
  { title: 'Clothing Allowance', amount: 'Sample' },
  { title: 'Wellness Allowance', amount: 'Sample' },
  { title: 'Food Allowance', amount: 'Sample' },
  { title: 'Education Allowance', amount: 'Sample' },
  { title: 'HMO Coverage', amount: 'Sample' },
]

const CompensationInfo = () => {
  return (
    <Card>
      <h1 className='font-bold text-md'>Compensation Details</h1>
      <List className='grid grid-cols-3 gap-4'>
        {data.map((item, index) => {
          return (
            <ListItem key={index} className='border-none'>
              <Text>{item.title}</Text>
              <Text>{item.amount}</Text>
            </ListItem>
          )
        })}
      </List>
    </Card>
  )
}

export default CompensationInfo
