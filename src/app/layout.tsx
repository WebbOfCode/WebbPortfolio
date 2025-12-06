import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Demarick Webb-Rivera | Full Stack Developer & Army Veteran',
  description: 'Full Stack Developer with cybersecurity focus and 4+ years Army IT experience. Building secure, scalable web applications with React, Python, and modern tech. Based in Nashville, TN.',
  keywords: ['Full Stack Developer', 'Cybersecurity', 'Army Veteran', 'React', 'Python', 'Nashville Developer', 'Junior Developer', 'Software Engineer'],
  authors: [{ name: 'Demarick Webb-Rivera' }],
  creator: 'Demarick Webb-Rivera',
  icons: {
    icon: '/logo dwr com.png',
    apple: '/logo dwr com.png',
  },
  metadataBase: new URL('https://demarickwebb.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://demarickwebb.dev',
    title: 'Demarick Webb-Rivera | Full Stack Developer & Army Veteran',
    description: 'Full Stack Developer with cybersecurity focus and 4+ years Army IT experience. Building secure, scalable web applications. Based in Nashville, TN.',
    siteName: 'Demarick Webb-Rivera Portfolio',
    images: [
      {
        url: '/logo dwr com.png',
        width: 1200,
        height: 630,
        alt: 'Demarick Webb-Rivera - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Demarick Webb-Rivera | Full Stack Developer & Army Veteran',
    description: 'Full Stack Developer with cybersecurity focus. Building secure, scalable web applications.',
    images: ['/logo dwr com.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}