import Image from 'next/image'
import nextIcon from '@/assets/nextjs-icon.svg'
import { Icons } from '@/components/ui/icons'
import supabase from '@/assets/supabase-logo-icon.png'
const ToolsSection = () => {
  return (
    <div className='bg-gradient-to-r from-blue-600 to-indigo-600  px-60 h-32 py-4'>
      {/* <h1 className='text-white font-bold text-xl'>Built with</h1>
      <div className='grid grid-cols-12'>
        <Image src={nextIcon} alt='nextjs icon' width={50} height={50} />
        <Icons.react color='white' style={{ width: 50, height: 50 }} />
        <Icons.radix color='white' style={{ width: 50, height: 50 }} />
        <Icons.logo color='white' style={{ width: 50, height: 50 }} />
        <Icons.tailwind color='white' style={{ width: 50, height: 50 }} />
        <Icons.pnpm color='white' style={{ width: 50, height: 50 }} />
        <Image src={supabase} alt='nextjs icon' width={50} height={50} />
      </div> */}
    </div>
  )
}

export default ToolsSection
