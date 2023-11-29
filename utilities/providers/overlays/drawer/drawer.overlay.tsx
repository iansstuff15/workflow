'use client';
import AppButton from '@/components/button/appButtons';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { overlayProps } from '@/data/interface/overlay/overlay';
const AppDrawer = ({
  children,
  isOpen,
  isOKAction,
  isOKLabel,
  setIsOpen,
  title,
  description,
}: overlayProps) => {
  return (
    <Sheet onOpenChange={() => setIsOpen(false)} open={isOpen}>
      <SheetContent>
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
  );
};

export default AppDrawer;
