'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
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
} from '@/config/constants/routes/routes'
import { useSupabase } from '@/utilities/providers/backend/supabase'
import { Skeleton } from '../ui/skeleton'
import AppDrawer from '@/utilities/providers/overlays/drawer/drawer.overlay'
import AppButton from '../button/appButtons'
import { Badge } from '@nextui-org/badge'

const SideBarContent = () => {
  const supabase = useSupabase()
  const userInfo = supabase.user?.user_metadata
  return (
    <div className='my-3 space-y-2 sm:rounded-r-xl overflow-y-scroll'>
      <div className='grid grid-cols-2'>
        <Image src={appIcon} width={50} height={50} alt='app icon' />

        <div className='place-self-end cursor-pointer hover:bg-slate-100 p-1 rounded-full'>
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
                    <Bell size={32} />
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
      </div>
      <Card>
        <CardHeader>
          {userInfo != undefined ? (
            <Avatar>
              <AvatarImage
                src={`${process.env.NEXT_PUBLIC_GENERATE_AVATAR}${userInfo['first_name']} ${userInfo['last_name']}`}
              />
              <AvatarFallback>{`${
                userInfo != undefined ? userInfo['first_name'] : 'U'
              } ${
                userInfo != undefined ? userInfo['last_name'] : 'U'
              }`}</AvatarFallback>
            </Avatar>
          ) : (
            <Skeleton className='h-12 w-12 rounded-full' />
          )}

          {userInfo != undefined ? (
            <h3 className='text-sm'>{`${userInfo['last_name']}, ${userInfo['first_name']}`}</h3>
          ) : (
            <Skeleton className='h-4 w-full' />
          )}

          {userInfo != undefined ? (
            <h6 className='text-xs text-slate-500'>{`${userInfo['position']}`}</h6>
          ) : (
            <Skeleton className='h-4 w-full' />
          )}
        </CardHeader>
        <CardFooter className='grid grid-cols-5'>
          <UserIcon size={18} />
          <Cog size={18} />
          <HelpCircle size={18} />
          <HeartHandshake size={18} />
          <LogOut size={18} />
        </CardFooter>
      </Card>
      <Card className='w-full border-none shadow-none p-0 m-0'>
        <CardHeader className='p-0'>
          <CardDescription>Main Menu</CardDescription>
          <SideBarItem
            to={DASHBOARD}
            label='Dashboard'
            icon={<LayoutDashboard size={18} />}
          />
          <SideBarItem
            to={REQUEST}
            label='Request'
            icon={<Folder size={18} />}
          />
          <SideBarItem
            to={PAYROLL}
            label='Payroll'
            icon={<Receipt size={18} />}
          />
          <SideBarItem to={ASSETS} label='Assets' icon={<Box size={18} />} />
          <SideBarItem
            to={PERFORMANCE}
            label='Performance'
            icon={<GaugeCircle size={18} />}
          />
          <CardDescription>Admin</CardDescription>
          <SideBarItem
            to={ADMIN_DASHBOARD}
            label='Dashboard'
            icon={<LayoutDashboard size={18} />}
          />
          <SideBarItem
            to={EMPLOYEE}
            label='Employees'
            icon={<Users size={18} />}
          />
          <SideBarItem
            to={CAMPAIGN}
            label='Inventory'
            icon={<PackageOpen size={18} />}
          />
          <SideBarItem
            to={ORGANIZATION}
            label='Organization'
            icon={<Building2 size={18} />}
          />
          <SideBarItem
            to={CAMPAIGN}
            label='Campaign'
            icon={<Megaphone size={18} />}
          />
          <CardDescription>Developer</CardDescription>
          <SideBarItem
            to={CAMPAIGN}
            label='Seed'
            icon={<DatabaseZap size={18} />}
          />
        </CardHeader>
      </Card>
    </div>
  )
}

export default SideBarContent
