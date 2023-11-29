'use client';
import Image from 'next/image';
import { wrapperProps } from '@/data/interface/layout/layout';
import appIcon from '@/assets/icon.svg';
import Announcement from '@/components/announcement/announcement.components';
import AppNavBar from '@/components/app-nav-bar/app-nav-bar.components';
import SideBar from '@/components/sidebar/sidebar';

import HappeningNowCarousel from '@/components/carousel/happening-now.carousel/happening-now.carousel';
import { Bell } from 'lucide-react';
import { Badge } from '@nextui-org/badge';
import NotificationProvider from '@/utilities/providers/overlays/notification';
import { SheetTrigger } from '@/components/ui/sheet';
import SearchCommand from '@/components/search-command/search-command';
import { useEffect, useState } from 'react';
import AppDrawer from '@/utilities/providers/overlays/drawer/drawer.overlay';
const Layout = ({ children }: wrapperProps) => {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div>
      <div className="grid grid-cols-12 h-screen ">
        <div className="col-span-2 border-r-2 p-4">
          <div className="grid grid-cols-2">
            <Image src={appIcon} width={50} height={50} alt="app icon" />
            <div className="place-self-end cursor-pointer hover:bg-slate-100 p-1 rounded-full">
              <Badge
                content={5}
                color="primary"
                className="p-1 text-xs "
                placement="top-right"
              >
                <Bell size={32} onClick={() => setShowNotification(true)} />
                <AppDrawer
                  isOpen={showNotification}
                  setIsOpen={setShowNotification}
                  title="Notifications"
                >
                  <h1>Notifications</h1>
                </AppDrawer>
              </Badge>
            </div>
          </div>

          <SideBar />
        </div>
        <div className="overflow-scroll col-span-10  space-y-3 pb-4">
          <Announcement />
          <SearchCommand />
          <HappeningNowCarousel />
          <AppNavBar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
