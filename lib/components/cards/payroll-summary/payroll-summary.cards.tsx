import { Card, CardHeader, CardBody } from '@nextui-org/card'
import ListItem from './list-item/list-item'
import AppButton from '@/lib/components/button/appButtons'
const PayrollSummaryCard = () => {
  return (
    <Card className='w-full h-96 grid grid-rows-6 gap-1 py-8 px-4'>
      <div className=' row-span-2 sm:flex pr-6'>
        <div className='col-span-3 py-0'>
          <h1 className='text-2xl font-bold'>Payroll Summary</h1>
          <h2 className='text-sm text-slate-400'>From Date to Date</h2>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='pl-6 sm:text-end'>
            <h5 className='text-xs text-slate-500'>Year to date</h5>
            <h5>₱ 000,000</h5>
          </div>
          <AppButton
            onClick={() => {}}
            label='View all'
            className='self-start'
          />
        </div>
      </div>
      <CardBody className='row-span-4 overflow-scroll '>
        <div className='space-y-2 '>
          <ListItem label='Overtime' value={0} />
          <ListItem label='Undertime' value={0} />
          <ListItem label='Official Business' value={0} />
          <ListItem label='Late' value={0} />
        </div>
      </CardBody>
    </Card>
  )
}

export default PayrollSummaryCard
