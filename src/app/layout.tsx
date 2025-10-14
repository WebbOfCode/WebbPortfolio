import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Demarick Webb-Rivera | Full Stack Developer & Army Veteran',
  description: 'Army Veteran and Computer Science student specializing in full-stack development, cybersecurity, and network systems. View projects including TrafficWiz and Chat-Room MTSU.',
  icons: {
    icon: '/logo dwr com.png',
    apple: '/logo dwr com.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}