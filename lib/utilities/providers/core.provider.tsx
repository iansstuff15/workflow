'use client'
import { WrapperProps } from '@/lib/data/interface/layout/layout'
import { NextUIProvider } from '@nextui-org/system'

import { usePathname } from 'next/navigation'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import { Toaster } from '@/lib/components/ui/sonner'
const CoreProvider = ({ children }: WrapperProps) => {
  const path = usePathname()
  const [supabaseClient] = useState(() => createPagesBrowserClient())
  gsap.registerPlugin(ScrollTrigger)
  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      <Toaster />
      <NextUIProvider>{children}</NextUIProvider>
    </SessionContextProvider>
  )
}
export default CoreProvider
