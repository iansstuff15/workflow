'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/lib/components/ui/dialog'

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from '@/lib/components/ui/drawer'

import { OverlayProps } from '@/lib/data/interface/overlay/overlay'
import AppButton from '@/lib/components/button/appButtons'
import { useMediaQuery } from '@react-hook/media-query'
import { useState } from 'react'

const AppDialog = ({
  children,
  isOKAction,
  isOKLabel,
  description,
  title,
  padding,
  trigger,
}: OverlayProps) => {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent
          className={`${padding ?? null} h-[95vh] overflow-y-scroll`}
          title=''
        >
          {title || description ? (
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
          ) : null}
          {children}
          {isOKAction ? (
            <DialogFooter>
              <AppButton onClick={isOKAction} label={isOKLabel} />
              <DialogClose asChild>
                <AppButton label={'Cancel'} variant={'secondary'} />
              </DialogClose>
            </DialogFooter>
          ) : null}
        </DialogContent>
      </Dialog>
    )
  } else {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>{trigger}</DrawerTrigger>
        <DrawerContent
          className={`${padding ?? 'p-4'} h-[95vh] overflow-y-scroll`}
        >
          {title || description ? (
            <DrawerHeader>
              <DrawerTitle>{title}</DrawerTitle>
              <DrawerDescription>{description}</DrawerDescription>
            </DrawerHeader>
          ) : null}
          {children}
          {isOKAction ? (
            <DrawerFooter>
              <AppButton onClick={isOKAction} label={isOKLabel} />
              <DrawerClose asChild>
                <AppButton label={'Cancel'} variant={'secondary'} />
              </DrawerClose>
            </DrawerFooter>
          ) : null}
        </DrawerContent>
      </Drawer>
    )
  }
}

export default AppDialog
