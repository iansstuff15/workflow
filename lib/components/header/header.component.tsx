'use client'
import { usePathname, useRouter } from 'next/navigation'
import { MenuHeader } from './menu.component'
import Logo from '@/assets/icon.svg'
import AppButton from '../button/appButtons'
import Image from 'next/image'
import { DASHBOARD, NO_AUTH_LOGIN } from '@/lib/config/constants/routes/routes'
import { Menu } from 'lucide-react'
import HeaderDrawer from './drawer.header'
import Link from 'next/link'
import RequestDemoDialog from '@/lib/utilities/providers/overlays/dialog/request-demo/request-demo'
import { gsap } from 'gsap'
import ContactMeDialog from '@/lib/utilities/providers/overlays/dialog/contact-me/contact-me.dialog'
import { useSupabase } from '@/lib/utilities/providers/backend/supabase'
const AppHeader = () => {
  const path = usePathname()
  const supabase = useSupabase()
  const router = useRouter()
  return (
    <>
      {path.includes('/app') || path.includes('/admin') ? null : (
        <div className='flex py-3 px-2 md:px-14 sticky top-0  z-10   backdrop-blur-lg'>
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
            <ContactMeDialog>
              <AppButton
                variant={'ghost'}
                label='Contact me'
                block
                className='text-white mix-blend-difference'
              />
            </ContactMeDialog>
            <RequestDemoDialog>
              <AppButton
                variant={'outline'}
                label='Request demo'
                block
                className=' bg-transparent text-white  mix-blend-difference'
              />
            </RequestDemoDialog>

            <AppButton
              label={supabase.userID ? 'Continue to dashboard' : 'Login'}
              block
              onClick={() => {
                if (supabase.userID) {
                  router.push(DASHBOARD)
                  return
                } else {
                  router.push(NO_AUTH_LOGIN)
                }
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default AppHeader
