'use client';
import { wrapperProps } from '@/data/interface/layout/layout';
import { NextUIProvider } from '@nextui-org/system';
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';
import { usePathname } from 'next/navigation';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { useState } from 'react';

const CoreProvider = ({ children }: wrapperProps) => {
  const path = usePathname();
  const [supabaseClient] = useState(() => createPagesBrowserClient());

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      <NextUIProvider>
        {/* <ProgressBar
        height="2px"
        color={path == '/' ? 'white' : '#1a71ff'}
        options={{ showSpinner: false }}
        shallowRouting
      />{' '} */}
        {children}
      </NextUIProvider>
    </SessionContextProvider>
  );
};
export default CoreProvider;
