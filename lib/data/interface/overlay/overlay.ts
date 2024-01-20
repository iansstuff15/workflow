import { Dispatch, ReactNode, SetStateAction } from 'react'
import { ButtonProps, buttonVariants } from '@/lib/components/ui/button'
export type OverlayProps = {
  children?: ReactNode
  buttonVariant?: buttonVariants
  isOKAction?: VoidFunction
  isOKLabel?: string
  title?: string
  description?: string
  padding?: string
  trigger: ReactNode
}

export type DrawerProps = OverlayProps & {
  position?: 'top' | 'bottom' | 'left' | 'right' | null | undefined
}
