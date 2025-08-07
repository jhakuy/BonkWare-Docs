import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'BonkWare - Community-Driven AI Evolution Platform',
  description: 'BonkWare combines governance, gaming, and autonomous development through decentralized community participation on the Solana blockchain.',
  keywords: ['BonkWare', 'Solana', 'DeFi', 'Gaming', 'AI', 'Governance', 'NFT', 'Blockchain'],
  authors: [{ name: 'BonkWare Team' }],
  creator: 'BonkWare',
  publisher: 'BonkWare',
  openGraph: {
    title: 'BonkWare - Community-Driven AI Evolution Platform',
    description: 'BonkWare combines governance, gaming, and autonomous development through decentralized community participation on the Solana blockchain.',
    url: 'https://bonkware.com',
    siteName: 'BonkWare',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BonkWare - Community-Driven AI Evolution Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BonkWare - Community-Driven AI Evolution Platform',
    description: 'BonkWare combines governance, gaming, and autonomous development through decentralized community participation on the Solana blockchain.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="relative min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-100">
          <div className="absolute inset-0 bg-mesh-gradient" />
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}