'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import SideBarItem from './sidebar-item/sidebar-item.component';
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
  User,
} from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const SideBar = () => {
  return (
    <div className="my-3 space-y-2">
      <Card>
        <CardHeader>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>DP</AvatarFallback>
          </Avatar>
          <h3 className="text-sm">Diriangen Powell</h3>
          <h6 className="text-xs text-slate-500">Software Engineer</h6>
        </CardHeader>
        <CardFooter className="grid grid-cols-5">
          <User size={18} />
          <Cog size={18} />
          <HelpCircle size={18} />
          <HeartHandshake size={18} />
          <LogOut size={18} />
        </CardFooter>
      </Card>
      <Card className="w-full border-none shadow-none p-0 m-0">
        <CardHeader className="p-0">
          <CardDescription>Main Menu</CardDescription>
          <SideBarItem
            to={'/app/dashboard'}
            label="Dashboard"
            icon={<LayoutDashboard size={18} />}
          />
          <SideBarItem
            to={'/app/request'}
            label="Request"
            icon={<Folder size={18} />}
          />
          <SideBarItem
            to={'/app/payroll'}
            label="Payroll"
            icon={<Receipt size={18} />}
          />
          <SideBarItem
            to={'/app/assets'}
            label="Assets"
            icon={<Box size={18} />}
          />
          <SideBarItem
            to={'/app/performance'}
            label="Performance"
            icon={<GaugeCircle size={18} />}
          />
          <SideBarItem
            to={'/app/admin'}
            label="Admin"
            icon={<Shield size={18} />}
          />
          <SideBarItem
            to={'/app/organization'}
            label="Organization"
            icon={<Building2 size={18} />}
          />
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  );
};
export default SideBar;
