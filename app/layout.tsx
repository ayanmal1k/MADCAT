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
  metadataBase: new URL('https://madcat.sol'),
  title: {
    default: '$MADCAT | Built for the Pack - Solana Meme Movement',
    template: '%s | MADCAT',
  },
  description:
    'MADCAT isn\'t just a meme. It\'s a movement on Solana. Aggressive by nature, loyal to the community, and built to dominate the crypto universe.',
  keywords: [
    'MADCAT',
    'MADCAT Solana',
    'Solana Meme Coin',
    'Crypto',
    'Raydium',
    'Pump.fun',
    'Solana Crypto',
    'Meme Coin Movement',
    'Web3',
    'Solana Ecosystem',
  ],
  authors: [{ name: 'MADCAT Community' }],
  creator: 'MADCAT',
  publisher: 'MADCAT',
  icons: {
    icon: [
      { url: '/face.png' },
      { url: '/face.png', type: 'image/png' },
    ],
    shortcut: '/face.png',
    apple: '/face.png',
  },
  openGraph: {
    title: 'MADCAT | Built for the Pack - Solana Meme Movement',
    description:
      'Join the MADCAT pack on Solana. Aggressive by nature, loyal to the community, and built to dominate.',
    url: 'https://madcat.sol',
    siteName: 'MADCAT',
    images: [
      {
        url: '/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'MADCAT - Built for the Pack',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MADCAT | Built for the Pack - Solana Meme Movement',
    description:
      'Join the MADCAT pack on Solana. Aggressive by nature, loyal to the community, and built to dominate.',
    images: ['/hero-bg.png'],
    creator: '@MADCAT_SOL',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${ultraFresh.variable} ${basicFont.variable}`}>
      <head>
        <link rel="icon" href="/face.png" type="image/png" />
        <link rel="shortcut icon" href="/face.png" />
        <link rel="apple-touch-icon" href="/face.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${ultraFresh.variable} ${basicFont.variable} font-sans antialiased`}>
        <LenisProvider>
          {children}
        </LenisProvider>
        <Analytics />
      </body>
    </html>
  )
}
