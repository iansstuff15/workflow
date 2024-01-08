'use client'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import AppButton from '../button/appButtons'
import { Badge } from '../ui/badge'
import { X } from 'lucide-react'
const Announcement = () => {
  return (
    <div className='p-4'>
      <Card>
        <CardBody className=' space-y-2'>
          <div>
            <h3 className='font-bold'>Announcement</h3>
            <h5 className='text-xs'>Month 03, 2023 00:00</h5>
          </div>

          <p className='text-xs'>
            Sint aliqua aute ea duis ut quis in. Consectetur dolor dolor fugiat
            duis quis ullamco consequat fugiat aliqua dolore ipsum. Velit
            voluptate labore anim ullamco ipsum ea. Laborum est duis eiusmod in
            sunt nostrud sit nisi ut ex et laboris. Mollit incididunt in velit
            sit in culpa proident quis pariatur enim sint. Minim commodo ipsum
            ea Lorem culpa deserunt eiusmod et reprehenderit fugiat ipsum
            consectetur nulla..
          </p>
          <div className='grid sm:grid-cols-10'>
            <AppButton
              className='sm:col-end-11 '
              onClick={() => {}}
              label='Join Event'
              variant={'secondary'}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default Announcement
