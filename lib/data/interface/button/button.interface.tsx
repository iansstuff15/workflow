import { FormEvent, MutableRefObject, ReactNode } from 'react'
// @ts-ignore
import { ButtonProps } from '../../../components/ui/button'

export interface buttonProps extends ButtonProps {
  label?: string
  onClick?: (e?: FormEvent) => void
  block?: boolean
  loading?: boolean
  icon?: ReactNode
  keybinding?: ReactNode
  ref?: MutableRefObject<null>
}
