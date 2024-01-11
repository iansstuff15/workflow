'use client'

import { tableInterfaceProps } from '@/data/interface/table/table.interface'
import TableToolBar from './toolbar/toolbar'
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from '@nextui-org/table'
import { Card } from '@nextui-org/card'
import { useState } from 'react'
import { Pagination } from '@nextui-org/pagination'

const AppTable = ({
  columns,
  data,
  loading,
  setPagination,
  getData,
  rows,
}: tableInterfaceProps) => {
  const [selectedKeys, setSelectedKeys] = useState<Array<string>>()
  return (
    <Card className='py-4'>
      <TableToolBar
        setPagination={setPagination}
        selectedKeys={selectedKeys}
        getData={getData}
        data={data}
      />
      <Table
        selectionMode='multiple'
        isHeaderSticky
        isCompact
        onSelectionChange={keys => {
          console.log('key')
          setSelectedKeys([...Object(keys)])
          console.log(selectedKeys)
        }}
        shadow='none'
        className='my-4 overflox-scroll rounded-none'
        border={0}
      >
        <TableHeader>
          {columns.map((data, index) => {
            return (
              <TableColumn key={index} className={data.className ?? ''}>
                {data.name}
              </TableColumn>
            )
          })}
        </TableHeader>
        <TableBody
          className=''
          isLoading={loading ?? true}
          emptyContent={'No data to display.'}
        >
          {rows ?? []}
        </TableBody>
      </Table>
      <Pagination
        showControls
        total={10}
        initialPage={1}
        variant='flat'
        className='w-full ml-2'
      />
    </Card>
  )
}

export default AppTable
