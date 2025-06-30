import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import ServicesOverview from '@/components/sections/ServicesOverview'
import AboutSection from '@/components/sections/AboutSection'
import StatsSection from '@/components/sections/StatsSection'
import PartnersSection from '@/components/sections/PartnersSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Visskan Aviation - Leading Ground Handling Services in India',
  description: 'Professional ground handling and aviation support services across major Indian airports. Trusted by airlines worldwide for safe, efficient operations.',
  openGraph: {
    title: 'Visskan Aviation - Leading Ground Handling Services in India',
    description: 'Professional ground handling and aviation support services across major Indian airports.',
    images: ['/images/homepage-og.jpg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Visskan Aviation - Home',
  description: 'Professional ground handling and aviation support services across major Indian airports.',
  url: 'https://www.visskanaviation.com',
  mainEntity: {
    '@type': 'Organization',
    name: 'Visskan Aviation Pvt. Ltd.',
    description: 'Leading provider of ground handling services in India'
  }
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <AboutSection />
      <ServicesOverview />
      <StatsSection />
      <PartnersSection />
      <CTASection />
    </>
  )
} 