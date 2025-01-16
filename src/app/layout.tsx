import './globals.css'

import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Script from 'next/script'
import { StoreProvider } from '@/store/StoreProvider'
import { Toaster } from 'react-hot-toast'
import { classNames } from '@/utils/classNames'

const inter = Inter({ subsets: ['latin'] })

const metaDescription =
  'Manage your time efficiently with a simple timer app. Track and review past sessions easily with a built-in history log'
const titleAndDefault = 'Timer app with history tracker'
const appUrl = 'https://timer.rb2.fr'

export const metadata: Metadata = {
  title: titleAndDefault,
  description: metaDescription,
  keywords:
    'timer app, history tracker, time management, timer with history, productivity tool, session tracker, stopwatch app, track time, timer log, efficient time tracking',
  metadataBase: new URL(appUrl),
  openGraph: {
    title: titleAndDefault,
    description: metaDescription,
    url: appUrl,
    siteName: titleAndDefault,
    images: [
      {
        url: '/hero-profile.jpeg',
        width: 500,
        height: 500,
      },
    ],
    type: 'website',
  },
  twitter: {
    title: titleAndDefault,
    card: 'summary',
    description: metaDescription,
    images: [
      {
        url: `${appUrl}/hero-profile.png`,
        alt: titleAndDefault,
      },
    ],
  },
  alternates: {
    canonical: appUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StoreProvider>
      <html lang="en" className="scroll-smooth">
        <body
          className={classNames(
            inter.className,
            'mx-auto my-12 max-w-6xl bg-gray-950 px-4 text-gray-50'
          )}
        >
          <Script
            defer
            src={process.env.UMAMI_URL ?? ''}
            data-website-id={process.env.UMAMI_SITE_ID ?? ''}
            strategy="afterInteractive"
          />
          <Toaster position="bottom-right" reverseOrder={true} />
          {children}
        </body>
      </html>
    </StoreProvider>
  )
}
