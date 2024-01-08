'use client'
import { WrapperProps } from '@/data/interface/layout/layout'
import LoginCard from '@/components/cards/login/auth-card/auth-login.card'
import AppIcon from '@/assets/icon.svg'
import Image from 'next/image'
import { fetchBackground } from './auth.layout.controller'
import { useQuery } from 'react-query'
const Layout = ({ children }: WrapperProps) => {
  const { status, data, error } = useQuery({
    queryKey: ['background'],
    queryFn: fetchBackground,
    staleTime: Infinity,
    cacheTime: Infinity,
  })
  const coloredGradient =
    'linear-gradient(rgba(3,152,216,1), rgba(0,51,133,0.7)) bg-blend-color-burn'
  const monoGradient = 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,1))'
  return (
    <div
      className={`h-screen ${
        (status == 'idle' || status == 'error') && data ? 'bg-slate-800' : null
      } bg-cover bg-center`}
      style={{
        background:
          data && status == 'success'
            ? `${monoGradient}, url(${data}) no-repeat center center fixed`
            : 'bg-slate-800',
      }}
    >
      <div className='h-screen grid md:grid-cols-2 content-center'>
        <div>
          <Image
            src={AppIcon}
            width={80}
            height={80}
            alt='workflow-icon'
            className={'absolute bottom-0 left-0 m-6 invisible md:visible'}
          />
        </div>
        <div className={'py-5'}>{children}</div>
      </div>
    </div>
  )
}

export default Layout
