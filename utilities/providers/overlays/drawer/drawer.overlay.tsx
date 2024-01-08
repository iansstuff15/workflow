'use client'
import AppButton from '@/components/button/appButtons'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { DrawerProps, OverlayProps } from '@/data/interface/overlay/overlay'
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
