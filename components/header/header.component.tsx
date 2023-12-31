'use client'
import { usePathname, useRouter } from 'next/navigation'
import { MenuHeader } from './menu.component'
import Logo from '@/assets/icon.svg'
import AppButton from '../button/appButtons'
import Image from 'next/image'
import { NO_AUTH_LOGIN } from '@/config/constants/routes/routes'
import { Menu } from 'lucide-react'
import HeaderDrawer from './drawer.header'
import Link from 'next/link'
const AppHeader = () => {
  const path = usePathname()
  const router = useRouter()
  return (
    <>
      {path.includes('/app') ? null : (
        <div className='flex py-3 px-2 md:px-14 sticky top-0  z-10 bg-white/70  backdrop-blur-lg'>
          <div className='flex gap-2 items-center flex-1'>
            <HeaderDrawer />
            <Link href={'/'} className='flex gap-2 items-center'>
              <Image src={Logo} alt='Workflow logo' width={30} height={30} />
              <label className='text-white  mix-blend-difference font-bold text-md'>
                Workflow
              </label>
            </Link>
          </div>
          <div className='flex-1 content-center hidden xl:block'>
            <MenuHeader />
          </div>
          <div className='grid-cols-3 gap-3 col-span-4  hidden md:grid'>
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
            <AppButton
              label='Login'
              block
              onClick={() => {
                router.push(NO_AUTH_LOGIN)
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default AppHeader
