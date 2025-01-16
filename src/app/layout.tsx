import './globals.css'

import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Script from 'next/script'
import { StoreProvider } from '@/store/StoreProvider'
import { Toaster } from 'react-hot-toast'
import { classNames } from '@/utils/classNames'

const inter = Inter({ subsets: ['latin'] })

const metaDescription = 'Generate this using ChatGPT'
const titleAndDefault = 'Generate this using ChatGPT'
const appUrl = 'https://my-app-name.rb2.fr'

export const metadata: Metadata = {
  title: {
    template: titleAndDefault,
    default: titleAndDefault,
  },
  description: metaDescription,
  keywords: 'Generate this using ChatGPT',
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
    canonical: `${process.env.NEXT_PUBLIC_URL!}`,
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
