'use client';
import { wrapperProps } from '@/data/interface/layout/layout';
import LoginCard from '@/components/cards/login/auth-card/auth-login.card';
import AppIcon from '@/assets/icon.svg';
import Image from 'next/image';
import { fetchBackground } from './auth.layout.controller';
import { useQuery } from 'react-query';
const Layout = ({ children }: wrapperProps) => {
  const { status, data, error } = useQuery({
    queryKey: ['background'],
    queryFn: fetchBackground,
    staleTime: Infinity,
    cacheTime: Infinity,
  });
  return (
    <div
      className={`h-screen ${
        status == 'idle' || status == 'error' ? 'bg-slate-800' : null
      }`}
      style={{
        background:
          data && status == 'success'
            ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${data}) no-repeat center center fixed`
            : '',
        backgroundSize: 'cover',
      }}
    >
      <div className="h-screen grid md:grid-cols-2 content-center">
        <div>
          <Image
            src={AppIcon}
            width={80}
            height={80}
            alt="workflow-icon"
            className={'absolute bottom-0 left-0 m-6 invisible md:visible'}
          />
        </div>
        <div className={'py-5'}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
