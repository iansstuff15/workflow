'use client'
import { WrapperProps } from '@/lib/data/interface/layout/layout'
import { NextUIProvider } from '@nextui-org/system'
import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'
import { usePathname } from 'next/navigation'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import { Toaster } from '@/lib/components/ui/sonner'
import { showError } from '@/lib/config/message/message.config'
import { checkIfEnvirontmentVariablesAreSet } from '../check-env'
import { migrateDB } from '@/lib/migration/migration'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

const CoreProvider = ({ children }: WrapperProps) => {
  const path = usePathname()
  const [supabaseClient] = useState(() => createPagesBrowserClient())

  useEffect(() => {
    if (checkIfEnvirontmentVariablesAreSet()) {
    }
  }, [])

  gsap.registerPlugin(ScrollTrigger)
  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      <Toaster richColors={true} />
      <NextUIProvider>
        <NextThemeProvider attribute='class' enableSystem>
          {children}
        </NextThemeProvider>
      </NextUIProvider>
    </SessionContextProvider>
  )
}
export default CoreProvider
