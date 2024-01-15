'use client'

import { useMediaQuery } from '@react-hook/media-query'
import SideBarContent from './content'
import { Menu } from 'lucide-react'
import AppButton from '../button/appButtons'
import AppDrawer from '@/lib/utilities/providers/overlays/drawer/drawer.overlay'

const SideBar = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  if (isDesktop) {
    return (
        <SideBarContent />
    )
  } else {
    return (
      <div className='sticky top-0  w-full z-10 sm:hidden'>
        <AppDrawer position={'left'} trigger={<AppButton icon={<Menu />} />}>
          <SideBarContent />
        </AppDrawer>
      </div>
    )
  }
}
export default SideBar
