import type { Metadata } from 'next'
import { Inter, Roboto_Mono, Barlow } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const barlow = Barlow({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-barlow',
})

/*
const onest = Onest({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-onest'
})
*/

export const metadata: Metadata = {
  title: 'Sprocket Riggs',
  description: `Sprocket's personal site.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  )
}
