import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/lib/components/ui/sheet'
import AppButton from '../button/appButtons'
import { Menu } from 'lucide-react'
import ProjectItems from './menu-items/project-item'
import AboutMeItem from './menu-items/about-me-item'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
} from '../ui/navigation-menu'
import { ScrollArea } from '../ui/scroll-area'
import Logo from '@/assets/icon.svg'
import Image from 'next/image'
import Link from 'next/link'
import { NO_AUTH_LOGIN } from '@/lib/config/constants/routes/routes'
import { useRouter } from 'next/navigation'
import RequestDemoDialog from '@/lib/utilities/providers/overlays/dialog/request-demo/request-demo'
import ContactMeDialog from '@/lib/utilities/providers/overlays/dialog/contact-me/contact-me.dialog'
const HeaderDrawer = () => {
  const router = useRouter()
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
        <SheetHeader>
          <Link href={'/'} className='flex gap-2 items-center'>
            <Image src={Logo} alt='Workflow logo' width={30} height={30} />
            <label className='text-white  mix-blend-difference font-bold text-md'>
              Workflow
            </label>
          </Link>
          <div className=' block md:hidden py-2 space-y-2'>
            <div className='  backdrop-blur-lg grid space-y-2'>
              <AppButton
                label='Login'
                block
                onClick={() => {
                  router.push(NO_AUTH_LOGIN)
                }}
              />
              <RequestDemoDialog>
                <AppButton
                  variant={'outline'}
                  label='Request demo'
                  block={true}
                  className=' bg-transparent text-white  mix-blend-difference'
                />
              </RequestDemoDialog>
            </div>
            <ContactMeDialog>
              <AppButton
                variant={'ghost'}
                label='Contact me'
                block={true}
                className='text-white  mix-blend-difference'
              />
            </ContactMeDialog>
          </div>
        </SheetHeader>
        <ScrollArea className='h-full'>
          <ProjectItems />
          <AboutMeItem />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

export default HeaderDrawer
