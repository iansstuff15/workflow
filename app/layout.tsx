import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { appMetadata } from '@/lib/config/constants/metadata/metadata'
import AuthProvider from '@/lib/utilities/providers/auth/auth.provider.components'
import { NextUIProvider } from '@nextui-org/system'
import CoreProvider from '@/lib/utilities/providers/core.provider'
import { SupabaseProvider } from '@/lib/utilities/providers/backend/supabase'
import AppHeader from '@/lib/components/header/header.component'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { migrateDB } from '@/lib/migration/migration'

export const metadata: Metadata = appMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  migrateDB()
  return (
    <html lang='en'>
      <body>
        <main>
          <SpeedInsights />
          <SupabaseProvider>
            <CoreProvider>
              <AuthProvider>
                <AppHeader />
                <div>{children}</div>
              </AuthProvider>
            </CoreProvider>
          </SupabaseProvider>
        </main>
      </body>
    </html>
  )
}
