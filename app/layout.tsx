import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Visskan Aviation - Professional Ground Handling Services',
    template: '%s | Visskan Aviation'
  },
  description: 'Visskan Aviation Pvt. Ltd. provides comprehensive ground handling and aviation support services across major Indian airports. Trusted partner for airlines worldwide.',
  keywords: ['aviation', 'ground handling', 'airport services', 'airline support', 'India aviation', 'aircraft handling'],
  authors: [{ name: 'Visskan Aviation Pvt. Ltd.' }],
  creator: 'Visskan Aviation',
  publisher: 'Visskan Aviation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.visskanaviation.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.visskanaviation.com',
    title: 'Visskan Aviation - Professional Ground Handling Services',
    description: 'Comprehensive ground handling and aviation support services across major Indian airports.',
    siteName: 'Visskan Aviation',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Visskan Aviation - Professional Ground Handling Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visskan Aviation - Professional Ground Handling Services',
    description: 'Comprehensive ground handling and aviation support services across major Indian airports.',
    images: ['/images/twitter-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Visskan Aviation Pvt. Ltd.',
  url: 'https://www.visskanaviation.com',
  logo: 'https://www.visskanaviation.com/images/logo.svg',
  description: 'Professional ground handling and aviation support services across major Indian airports.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-XXX-XXX-XXXX',
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi']
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressRegion: 'India'
  },
  sameAs: [
    'https://www.linkedin.com/company/visskan-aviation',
    'https://twitter.com/visskanaviation'
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-inter antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 