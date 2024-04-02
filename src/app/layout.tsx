import type { Metadata, Viewport } from 'next'
import { Exo_2 } from 'next/font/google'
import '../styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SessionWrapper from '@/components/SessionWrapper'
import { Toaster } from '@/components/ui/toaster'

const inter = Exo_2({ subsets: ['latin'] })

export const viewport: Viewport = {
  themeColor: '#ffffff',
}
export const metadata: Metadata = {
  title: 'Klip Store',
  description: 'Klip Store - The Best Online Store in the World',
  keywords: 'Klip Store, Online Store, Best Online Store',
  icons: {
    icon: [
      {
        rel: 'icon',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      { rel: 'icon', sizes: '16x16', url: '/favicon-16x16.png' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: '/apple-touch-icon.png',
      },
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#2ba133',
      },
    ],
  },
  applicationName: 'Klip Store',
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'Klip Store',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): React.ReactElement {
  return (
    <html lang="en">
      <SessionWrapper>
        <body className={`${inter.className} grid grid-rows-main text-text`}>
          <Header />
          {children}
          <Toaster />
          <Footer />
        </body>
      </SessionWrapper>
    </html>
  )
}
