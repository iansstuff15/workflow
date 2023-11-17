'use client';
import { wrapperProps } from '@/data/interface/layout/layout';
import { NextUIProvider } from '@nextui-org/system';
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';
import { usePathname } from 'next/navigation';

const CoreProvider = ({ children }: wrapperProps) => {
  const path = usePathname();
  return (
    <NextUIProvider>
      <ProgressBar
        height="2px"
        color={path == '/' ? 'white' : '#1a71ff'}
        options={{ showSpinner: false }}
        shallowRouting
      />{' '}
      {children}
    </NextUIProvider>
  );
};
export default CoreProvider;
