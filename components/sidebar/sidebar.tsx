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
  Box,
  Building2,
  Cog,
  Folder,
  GaugeCircle,
  HeartHandshake,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  Receipt,
  Shield,
  User as UserIcon,
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import {
  ADMIN,
  ASSETS,
  DASHBOARD,
  ORGANIZATION,
  PAYROLL,
  PERFORMANCE,
  REQUEST,
} from '@/config/constants/routes/routes'
import { useSupabase } from '@/utilities/providers/backend/supabase'
import { Skeleton } from '../ui/skeleton'

const SideBar = () => {
  const supabase = useSupabase()
  const userInfo = supabase.user?.user_metadata
  return (
    <div className='my-3 space-y-2'>
      <Card>
        <CardHeader>
          {userInfo != undefined ? (
            <Avatar>
              <AvatarImage
                src={`${process.env.NEXT_PUBLIC_GENERATE_AVATAR}${userInfo['firstName']} ${userInfo['lastName']}`}
              />
              <AvatarFallback>{`${
                userInfo != undefined ? userInfo['firstName'] : 'U'
              } ${
                userInfo != undefined ? userInfo['lastName'] : 'U'
              }`}</AvatarFallback>
            </Avatar>
          ) : (
            <Skeleton className='h-12 w-12 rounded-full' />
          )}

          {userInfo != undefined ? (
            <h3 className='text-sm'>{`${userInfo['lastName']}, ${userInfo['firstName']}`}</h3>
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
          <SideBarItem to={ADMIN} label='Admin' icon={<Shield size={18} />} />
          <SideBarItem
            to={ORGANIZATION}
            label='Organization'
            icon={<Building2 size={18} />}
          />
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  )
}
export default SideBar
