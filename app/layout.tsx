import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { appMetadata } from '@/config/constants/metadata/metadata'
import AuthProvider from '@/utilities/providers/auth/auth.provider.components'
import { NextUIProvider } from '@nextui-org/system'
import CoreProvider from '@/utilities/providers/core.provider'
import { SupabaseProvider } from '@/utilities/providers/backend/supabase'

export const metadata: Metadata = appMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <main>
          <SupabaseProvider>
            <CoreProvider>
              <AuthProvider>
                <div>{children}</div>
              </AuthProvider>
            </CoreProvider>
          </SupabaseProvider>
        </main>
      </body>
    </html>
  )
}
