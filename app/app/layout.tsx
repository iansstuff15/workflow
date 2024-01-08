'use client'

import { WrapperProps } from '@/data/interface/layout/layout'

import Announcement from '@/components/announcement/announcement.components'
import AppNavBar from '@/components/app-nav-bar/app-nav-bar.components'
import SideBar from '@/components/sidebar/sidebar'

import HappeningNowCarousel from '@/components/carousel/happening-now.carousel/happening-now.carousel'
import { Bell } from 'lucide-react'
import { Badge } from '@nextui-org/badge'
import NotificationProvider from '@/utilities/providers/overlays/notification'
import { SheetTrigger } from '@/components/ui/sheet'
import SearchCommand from '@/components/search-command/search-command'
import { useEffect, useState } from 'react'
import AppDrawer from '@/utilities/providers/overlays/drawer/drawer.overlay'
import { usePathname } from 'next/navigation'
import { DASHBOARD } from '@/config/constants/routes/routes'
import AppDialog from '@/utilities/providers/overlays/dialog/dialog'
import AppButton from '@/components/button/appButtons'
const Layout = ({ children }: WrapperProps) => {
  const [showNotification, setShowNotification] = useState(false)
  const path = usePathname()

  return (
    <div>
      <div className='sm:flex h-screen'>
        <div className='sm:border-r-2 p-4 '>
          <SideBar />
        </div>
        <div className='overflow-scroll   space-y-3 pb-4'>
          <Announcement />
          <SearchCommand />
          {path == DASHBOARD ? <HappeningNowCarousel /> : null}

          <AppNavBar />
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
