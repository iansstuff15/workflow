'use client'
import { wrapperProps } from '@/data/interface/layout/layout'
import { NextUIProvider } from '@nextui-org/system'

import { usePathname } from 'next/navigation'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'

const CoreProvider = ({ children }: wrapperProps) => {
  const path = usePathname()
  const [supabaseClient] = useState(() => createPagesBrowserClient())

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      <NextUIProvider>{children}</NextUIProvider>
    </SessionContextProvider>
  )
}
export default CoreProvider
