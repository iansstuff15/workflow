'use client';
import AppButton from '@/components/button/appButtons';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { wrapperProps } from '@/data/interface/layout/layout';

const NotificationProvider = ({ children }: wrapperProps) => {
  return (
    <Sheet>
      {children}
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Notification</SheetTitle>
        </SheetHeader>
        notification here
        <SheetFooter>
          <SheetClose>
            <AppButton onClick={() => {}} label="Close Drawer" />
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default NotificationProvider;
