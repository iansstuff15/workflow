'use client'
import AppButton from '@/lib/components/button/appButtons'
import { Button } from '@/lib/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/lib/components/ui/sheet'
import { WrapperProps } from '@/lib/data/interface/layout/layout'

const NotificationProvider = ({ children }: WrapperProps) => {
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
            <AppButton onClick={() => {}} label='Close Drawer' />
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default NotificationProvider
