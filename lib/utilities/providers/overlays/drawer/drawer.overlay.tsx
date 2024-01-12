'use client'
import AppButton from '@/lib/components/button/appButtons'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/lib/components/ui/sheet'
import { DrawerProps, OverlayProps } from '@/lib/data/interface/overlay/overlay'
const AppDrawer = ({
  children,
  isOKAction,
  isOKLabel,
  trigger,
  title,
  description,
  position,
}: DrawerProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side={position}>
        {title || description ? (
          <SheetHeader>
            <SheetTitle>{title}</SheetTitle>
            <SheetDescription>{description}</SheetDescription>
          </SheetHeader>
        ) : null}

        {children}
        {isOKAction ? (
          <SheetFooter>
            <SheetClose>
              <AppButton onClick={isOKAction} label={isOKLabel} />
            </SheetClose>
          </SheetFooter>
        ) : null}
      </SheetContent>
    </Sheet>
  )
}

export default AppDrawer
