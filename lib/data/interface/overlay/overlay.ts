import { Dispatch, ReactNode, SetStateAction } from 'react'

export type OverlayProps = {
  children?: ReactNode

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
