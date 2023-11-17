import AppButton from '@/components/button/appButtons';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import Link from 'next/link';

const Menu = () => {
  return (
    <div className="flex flex-row-reverse text-white">
      <AppButton variant={'ghost'} onClick={() => {}} label="Notifications" />
      <AppButton variant={'ghost'} onClick={() => {}} label="Settings" />
      <AppButton variant={'ghost'} onClick={() => {}} label="Profile" />
    </div>
  );
};

export default Menu;
