import type { Metadata } from 'next'

import './globals.css'

import { Toaster } from 'sonner'

import Header from '@/components/sections/Header'
import ScrollProgress from '@/components/ui/ScrollProgress'
import AuroraBackground from '@/components/ui/AuroraBackground'

export const metadata: Metadata = {
  title: 'abdulrahman.dev - Backend Engineer',
  description: 'Backend developer focused on building robust, secure, and high-performance server-side solutions with Node.js, TypeScript, and NestJS.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col relative">
        <AuroraBackground />
        <ScrollProgress />
        <Header />
        {children}
        <Toaster theme="dark" />
      </body>
    </html>
  )
}
