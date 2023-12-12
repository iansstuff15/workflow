import Image from 'next/image'
import nextIcon from '@/assets/nextjs-icon.svg'
import { Icons } from '@/components/ui/icons'
import supabase from '@/assets/supabase-logo-icon.png'
import pnpm from '@/assets/pnpm_icon.svg'
const ToolsSection = () => {
  return (
    <div className='px-4 sm:px-60 h-32 py-4 space-y-4 '>
      <h1 className='font-bold text-xl'>Built with</h1>
      <div className='grid grid-cols-7 gap-4 place-items-center mx-auto'>
        <Image src={nextIcon} alt='nextjs icon' width={30} height={30} />
        <Icons.react color='#38b1e5' style={{ width: 30, height: 30 }} />
        <Icons.radix style={{ width: 30, height: 30 }} />
        <Icons.logo style={{ width: 30, height: 30 }} />
        <Icons.tailwind color='#38b1e5' style={{ width: 30, height: 30 }} />
        <Image src={pnpm} alt='pnpm icon' width={60} height={30} />
        <Image src={supabase} alt='supabase icon' width={30} height={30} />
      </div>
    </div>
  )
}

export default ToolsSection
