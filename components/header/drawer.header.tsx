import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import AppButton from '../button/appButtons'
import { Menu } from 'lucide-react'
const HeaderDrawer = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className='place-items-center'>
        <AppButton
          variant={'ghost'}
          icon={<Menu />}
          className=' inline xl:hidden'
        />
      </SheetTrigger>
      <SheetContent side={'left'}>
        <h1>App Drawer</h1>
      </SheetContent>
    </Sheet>
  )
}

export default HeaderDrawer
