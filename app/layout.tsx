import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Basic } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LenisProvider } from '@/components/lenis-provider'
import './globals.css'

const ultraFresh = localFont({
  src: '../public/font/Ultra Fresh - Demo.ttf',
  variable: '--font-ultra-fresh',
  display: 'swap',
})

const basicFont = Basic({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-basic',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'App',
  description: 'App with GSAP, Framer Motion, Lenis and Tailwind CSS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${ultraFresh.variable} ${basicFont.variable}`}>
      <body className={`${ultraFresh.variable} ${basicFont.variable} font-sans antialiased`}>
        <LenisProvider>
          {children}
        </LenisProvider>
        <Analytics />
      </body>
    </html>
  )
}
