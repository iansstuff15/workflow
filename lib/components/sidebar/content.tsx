'use client'
import { Card, CardContent, CardFooter, CardHeader } from '.././ui/card'
import SideBarItem from './sidebar-item/sidebar-item.component'
import {
  Bell,
  Box,
  Building2,
  Cog,
  DatabaseZap,
  Folder,
  GaugeCircle,
  HeartHandshake,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  Megaphone,
  PackageOpen,
  Receipt,
  User as UserIcon,
  Users,
} from 'lucide-react'
import appIcon from '@/assets/icon.svg'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import {
  ADMIN_DASHBOARD,
  ASSETS,
  CAMPAIGN,
  DASHBOARD,
  EMPLOYEE,
  ORGANIZATION,
  PAYROLL,
  PERFORMANCE,
  REQUEST,
} from '@/lib/config/constants/routes/routes'
import { useSupabase } from '@/lib/utilities/providers/backend/supabase'
import { Skeleton } from '../ui/skeleton'
import AppDrawer from '@/lib/utilities/providers/overlays/drawer/drawer.overlay'
import AppButton from '../button/appButtons'
import { Badge } from '@nextui-org/badge'

const SideBarContent = () => {
  const supabase = useSupabase()
  const userInfo = supabase.userInfo
  return (
    <div className=' space-y-4 overflow-hidden w-full sm:w-48'>
      <div className='grid grid-cols-2'>
        <Image src={appIcon} width={50} height={50} alt='app icon' />

        <AppDrawer
          trigger={
            <AppButton
              icon={
                <Badge
                  content={5}
                  color='primary'
                  className='p-1 text-xs '
                  placement='top-right'
                >
                  <Bell size={22} />
                </Badge>
              }
              variant={'ghost'}
            />
          }
          title='Notifications'
        >
          <h1>Notifications</h1>
        </AppDrawer>
      </div>
      <Card>
        <CardContent className={'space-y-4 py-4'}>
          {userInfo?.first_name ? (
            <Avatar>
              <AvatarImage
                src={`${process.env.NEXT_PUBLIC_GENERATE_AVATAR}${userInfo.first_name} ${userInfo.last_name}`}
              />
              <AvatarFallback>{`${
                userInfo != undefined ? userInfo.first_name : 'U'
              } ${
                userInfo != undefined ? userInfo.last_name : 'U'
              }`}</AvatarFallback>
            </Avatar>
          ) : (
            <Skeleton className='h-12 w-12 rounded-full' />
          )}

          {userInfo?.first_name ? (
            <h3 className='text-sm'>{`${userInfo.last_name}, ${userInfo.first_name}`}</h3>
          ) : (
            <Skeleton className='h-4 w-full' />
          )}

          {userInfo?.position ? (
            <h6 className='text-xs text-slate-500'>{`${userInfo.position}`}</h6>
          ) : (
            <Skeleton className='h-4 w-full' />
          )}
        </CardContent>
        <CardFooter className='grid grid-cols-5'>
          <UserIcon size={18} />
          <Cog size={18} />
          <HelpCircle size={18} />
          <HeartHandshake size={18} />
          <LogOut size={18} />
        </CardFooter>
      </Card>

      <h2>Main Menu</h2>
      <SideBarItem
        to={DASHBOARD}
        label='Dashboard'
        icon={<LayoutDashboard size={18} />}
      />
      <SideBarItem to={REQUEST} label='Request' icon={<Folder size={18} />} />
      <SideBarItem to={PAYROLL} label='Payroll' icon={<Receipt size={18} />} />
      <SideBarItem to={ASSETS} label='Assets' icon={<Box size={18} />} />
      <SideBarItem
        to={PERFORMANCE}
        label='Performance'
        icon={<GaugeCircle size={18} />}
      />
      <h2>Admin</h2>
      <SideBarItem to={EMPLOYEE} label='Employees' icon={<Users size={18} />} />
      <SideBarItem
        to={CAMPAIGN}
        label='Inventory'
        icon={<PackageOpen size={18} />}
      />

      <SideBarItem
        to={CAMPAIGN}
        label='Campaign'
        icon={<Megaphone size={18} />}
      />
    </div>
  )
}

export default SideBarContent
