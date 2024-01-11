'use client'
import AppButton from '@/components/button/appButtons'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Pencil, Plus, Trash } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Kbd } from '@nextui-org/kbd'
import AppDialog from '@/utilities/providers/overlays/dialog/dialog'
import RequestForm from '@/components/form/add-request/add-request.form'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { transformPathNameToArrayOfString } from '@/utilities/array/array'
import TableForms from '../add-forms/add-forms.table'
import { toolbarProps } from '@/data/interface/toolbar/toolbar.interface'
const TableToolBar = ({
  setPagination,
  selectedKeys,
  data,
  getData,
}: toolbarProps) => {
  const [showForm, setShowForm] = useState(false)
  const path = usePathname()
  const [mode, setMode] = useState<'view' | 'add' | 'edit' | 'delete'>('add')
  return (
    <div className='px-4 py-2 xl:grid grid-cols-10 gap-2 space-y-2 sticky top-0  z-0 bg-white/70  backdrop-blur-lg'>
      <Input placeholder='Search' className='col-span-6' />
      <div className='sm:col-end-13 sm:flex grid grid-cols-2 gap-2 place-content-center'>
        <Select
          defaultValue='49'
          onValueChange={value => {
            if (setPagination) {
              setPagination(parseInt(value))
              if (getData) {
                getData()
              }
            }
          }}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Rows</SelectLabel>
              <SelectItem value='9'>10</SelectItem>
              <SelectItem value='19'>20</SelectItem>
              <SelectItem value='29'>30</SelectItem>
              <SelectItem value='39'>40</SelectItem>
              <SelectItem value='49'>50</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <AppDialog
          trigger={
            <AppButton
              variant={'outline'}
              onClick={() => {
                setMode('edit')
                setShowForm(true)
              }}
              label='Edit'
              disabled={selectedKeys?.length != 0 ? false : true}
              keybinding={
                <Kbd
                  keys={['command', 'shift']}
                  className='bg-transparent ml-2'
                >
                  U
                </Kbd>
              }
              icon={
                <Pencil
                  size={18}
                  className={
                    selectedKeys?.length != 0
                      ? 'text-slate-800'
                      : 'text-slate-300'
                  }
                />
              }
            />
          }
        >
          <TableForms mode={'edit'} data={data} selectedKeys={selectedKeys} />
        </AppDialog>
        <AppDialog
          trigger={
            <AppButton
              variant={'outline'}
              onClick={() => {
                setMode('delete')
                setShowForm(true)
              }}
              label='Delete'
              disabled={selectedKeys?.length != 0 ? false : true}
              loading={false}
              keybinding={
                <Kbd
                  keys={['command', 'shift']}
                  className='bg-transparent ml-2'
                >
                  D
                </Kbd>
              }
              icon={
                <Trash
                  size={18}
                  className={
                    selectedKeys?.length != 0
                      ? 'text-slate-800'
                      : 'text-slate-300'
                  }
                />
              }
            />
          }
        >
          <TableForms mode={'delete'} data={data} selectedKeys={selectedKeys} />
        </AppDialog>

        <AppDialog
          trigger={
            <AppButton
              onClick={() => {
                setMode('add')
                setShowForm(true)
              }}
              label='Add'
              icon={<Plus />}
              keybinding={
                <Kbd
                  keys={['command', 'shift']}
                  className='bg-transparent text-white ml-2'
                >
                  A
                </Kbd>
              }
              className=''
            />
          }
        >
          <TableForms mode={'add'} data={data} selectedKeys={selectedKeys} />
        </AppDialog>
      </div>
    </div>
  )
}
export default TableToolBar
