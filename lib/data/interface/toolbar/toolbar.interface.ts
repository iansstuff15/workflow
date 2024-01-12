import { Dispatch, SetStateAction } from 'react'

export interface toolbarProps {
  setPagination?: Dispatch<SetStateAction<number>>
  selectedKeys?: Array<string>
  data?: any
  getData?: () => void
}
