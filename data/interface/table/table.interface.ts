import { ReactNode } from 'react'
import { toolbarProps } from '../toolbar/toolbar.interface'

export interface tableInterfaceProps extends toolbarProps {
  columns: Array<{ name: string; className?: string }>
  rows?: any
  data?: any
  loading?: boolean
  topContent?: ReactNode
  bottomContent?: ReactNode
}
