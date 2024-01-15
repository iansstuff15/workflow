import { Card, CardBody } from '@nextui-org/card'
import ListItem from './list-item/list-item'
import AppButton from '@/lib/components/button/appButtons'

const PendingAttendaceRequest = () => {
  return (
    <Card className='w-full h-96 grid grid-rows-6 gap-1 py-8 px-4'>
      <div className=' row-span-2 flex gap-10'>
        <div className='row-span-1'>
          <h1 className='text-2xl font-bold'>Pending Request</h1>
          <h2 className='text-sm text-slate-400'>From Date to Date</h2>
        </div>
        <AppButton
          onClick={() => {}}
          label='Create Request'
          className='self-start col-span-2 sm:col-span-1'
        />
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

export default PendingAttendaceRequest
