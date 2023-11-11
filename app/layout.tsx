import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { appMetadata } from '@/config/constants/metadata/metadata';
import AuthProvider from '@/components/providers/auth/auth.provider.components';
import { NextUIProvider } from '@nextui-org/system';
import CoreProvider from '@/components/providers/auth/core.provider';

export const metadata: Metadata = appMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="overflow-hidden">
          <CoreProvider>
            <AuthProvider>{children}</AuthProvider>
          </CoreProvider>
        </main>
      </body>
    </html>
  );
}
