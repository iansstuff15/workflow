import { ButtonProps, buttonVariants } from '@/components/ui/button'
import { FormEvent, MutableRefObject, ReactNode } from 'react'

export interface buttonProps extends ButtonProps {
  label?: string
  onClick?: (e?: FormEvent) => void
  block?: boolean
  loading?: boolean
  icon?: ReactNode
  keybinding?: ReactNode
  ref?: MutableRefObject<null>
}
