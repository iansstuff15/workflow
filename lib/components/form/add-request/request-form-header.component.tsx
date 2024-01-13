'use client'
import { useSupabase } from '@/lib/utilities/providers/backend/supabase'

const RequestFormHeader = () => {
  const supabase = useSupabase()
  const userInfo = supabase.userInfo
  return (
    <div className='grid grid-cols-2 mt-3'>
      <div>
        <h5 className='font-medium'>From</h5>
        <p>
          {userInfo?.last_name}, {userInfo?.first_name}
        </p>
        <p className='text-sm'>{userInfo?.position}</p>
        <p className='text-xs'>Software Delivery</p>
      </div>
      <div className='text-end'>
        <h5 className='font-medium'>To be reviewed by</h5>
        <p>Delacruz, Juan</p>
        <p className='text-sm'>Manager</p>
        <p className='text-xs'>Human Resource</p>
      </div>
    </div>
  )
}

export default RequestFormHeader
