'use client'
import Image from 'next/image'
import AppIconWithText from '@/assets/logo-with-text-white.svg'
import { Loader2Icon } from 'lucide-react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AUTH_LOGIN, NO_AUTH_LOGIN } from '@/config/constants/routes/routes'
import { useUser } from '@supabase/auth-helpers-react'
const Splash = () => {
  const router = useRouter()
  const user = useUser()
  const checkUser = async () => {
    if (user) {
      router.push(AUTH_LOGIN)
    } else {
      router.push(NO_AUTH_LOGIN)
    }
  }
  useEffect(() => {
    checkUser()
  }, [])
  return (
    <div className=' background-animate grid place-items-center'>
      {' '}
      <Image
        src={AppIconWithText}
        className='animate-pulse'
        width={450}
        height={450}
        alt='workflow icon with text'
      />
      <Loader2Icon color='white' className='animate-spin w-28' size={60} />
    </div>
  )
}

export default Splash
