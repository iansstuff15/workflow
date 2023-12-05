'use client'
import { usePathname } from 'next/navigation'
import { MenuHeader } from './menu.component'
import Logo from '@/assets/icon.svg'
import AppButton from '../button/appButtons'
import Image from 'next/image'
const AppHeader = () => {
  const path = usePathname()
  return (
    <>
      {path.includes('/app') ? null : (
        <div className='sticky top-0 grid grid-cols-12 py-3 px-14 bg-white'>
          <div className='grid grid-cols-12 gap-2 col-span-3 '>
            <Image src={Logo} alt='Workflow logo' width={50} height={50} />
            <label className='text-white  mix-blend-difference font-bold'>
              Workflow
            </label>
          </div>
          <div className='col-span-5'>
            <MenuHeader />
          </div>
          <div className='grid grid-cols-3 gap-3 col-span-4'>
            <AppButton
              variant={'ghost'}
              label='Contact me'
              block
              className='text-white  mix-blend-difference'
            />
            <AppButton
              variant={'outline'}
              label='Request demo'
              block
              className=' bg-transparent text-white  mix-blend-difference'
            />
            <AppButton label='Login' block />
          </div>
        </div>
      )}
    </>
  )
}

export default AppHeader
