import type { Metadata } from 'next'
import StyledJsxRegistry from '@/lib/register'
import localFont from 'next/font/local'
import 'leaflet/dist/leaflet.css'

import './globals.css'
import Head from 'next/head'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'BovControl',
  description: 'BovControl FrontEnd',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  )
}
