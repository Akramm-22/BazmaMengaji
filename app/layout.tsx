import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ 
  variable: '--font-geist-sans', 
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

// Konfigurasi Viewport untuk UI yang lebih responsif di mobile
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0f0f' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'BAZMA Mengaji - Learn Quran Online Terpercaya',
  description: 'Belajar mengaji Al-Quran dengan metode terpercaya. Program pendidikan Al-Quran untuk semua usia dengan guru berpengalaman dan sistem belajar yang adaptif.',
  generator: 'v0.app',
  keywords: ['mengaji online', 'belajar quran', 'tahsin online', 'tahfidz anak', 'bazma mengaji'],
  authors: [{ name: 'BAZMA Mengaji' }],
  metadataBase: new URL('https://bazmamengaji.com'),
  openGraph: {
    title: 'BAZMA Mengaji - Learn Quran Online',
    description: 'Belajar mengaji Al-Quran online interaktif dengan metode terpercaya untuk semua tingkat usia.',
    type: 'website',
    url: 'https://bazmamengaji.com',
    siteName: 'BAZMA Mengaji',
    locale: 'id_ID',
    images: [
      {
        url: '/logo.jpg', // Update logo untuk OpenGraph
        width: 1200,
        height: 630,
        alt: 'BAZMA Mengaji Logo',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/logo.jpg' }, // Menggunakan logo sebagai favicon utama jika diperlukan
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'BAZMA Mengaji',
    description: 'Platform pembelajaran Al-Quran online terpercaya dengan metode berkualitas tinggi',
    url: 'https://bazmamengaji.com',
    logo: 'https://bazmamengaji.com/logo.jpg', // Update logo di Schema SEO
    telephone: '+62-878-8123-4567',
    email: 'info@bazmamengaji.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID',
    },
    sameAs: [
      'https://www.facebook.com/bazmamengaji', 
      'https://www.instagram.com/bazmamengaji'
    ],
  }

  return (
    <html 
      lang="id" 
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`} // Tambahkan scroll-smooth untuk UI yang lebih fluid
      suppressHydrationWarning
    >
      <head>
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} 
        />
        <link rel="canonical" href="https://bazmamengaji.com" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen selection:bg-primary selection:text-primary-foreground">
        {/* 
          UI Update: 
          1. selection:bg-primary -> Mengubah warna highlight teks saat di-select agar sesuai brand.
          2. Antialiased ditingkatkan untuk rendering font yang lebih tajam.
        */}
        <div className="relative flex min-h-screen flex-col">
          {children}
        </div>
        
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}