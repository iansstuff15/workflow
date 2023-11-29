'use client';
import AppButton from '@/components/button/appButtons';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Pencil, Plus, Trash } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Kbd } from '@nextui-org/kbd';
import AppDialog from '@/utilities/providers/overlays/dialog/dialog';
import AddRequestForm from '@/components/form/add-request/add-request.form';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { transformPathNameToArrayOfString } from '@/utilities/array/array';
import TableForms from '../add-forms/add-forms.table';
const TableToolBar = () => {
  const [showAddRequestForm, setAddRequestForm] = useState(false);
  const path = usePathname();
  return (
    <>
      <AppDialog
        isOpen={showAddRequestForm}
        setIsOpen={setAddRequestForm}
        title={`Add ${transformPathNameToArrayOfString(path)[1]}`}
      >
        <TableForms />
      </AppDialog>
      <Card className="px-4 py-2 grid grid-cols-10 gap-2 sticky top-20  z-10 bg-white/70  backdrop-blur-lg">
        <Input placeholder="Search" className="col-span-6" />
        <div className="col-end-13 grid grid-cols-4 place-content-center">
          <Select defaultValue="infinite">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Rows</SelectLabel>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="30">30</SelectItem>
                <SelectItem value="40">40</SelectItem>
                <SelectItem value="infinite">Infinite</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <AppButton
            variant={'ghost'}
            onClick={() => {}}
            label="Edit"
            disabled
            icon={<Pencil className="text-slate-300" />}
          />
          <AppButton
            variant={'ghost'}
            onClick={() => {}}
            label="Delete"
            disabled
            loading={false}
            icon={<Trash className="text-slate-300" />}
          />
          <AppButton
            onClick={() => setAddRequestForm(true)}
            label="Add Item"
            icon={<Plus />}
            keybinding={
              <Kbd keys={['command', 'shift']} className="bg-transparent">
                A
              </Kbd>
            }
            className=""
          />
        </div>
      </Card>
    </>
  );
};
export default TableToolBar;
