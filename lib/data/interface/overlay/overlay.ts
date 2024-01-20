import { Dispatch, ReactNode, SetStateAction } from 'react'

export type OverlayProps = {
  children?: ReactNode
  buttonVariant?:
    | 'link'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | null
    | undefined
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
