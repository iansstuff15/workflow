'use client'

import { tableInterfaceProps } from '@/data/interface/table/table.interface'
import { Card } from '../ui/card'
import TableToolBar from './toolbar/toolbar'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const AppTable = ({ columns }: tableInterfaceProps) => {
  return (
    <div>
      <TableToolBar />
      <Card className='mt-4' style={{ height: '50vh' }}>
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((data, index) => {
                return (
                  <TableHead key={index} className={data.className}>
                    {data.name}
                  </TableHead>
                )
              })}
            </TableRow>
          </TableHeader>
          <TableBody></TableBody>
        </Table>
      </Card>
    </div>
  )
}

export default AppTable
