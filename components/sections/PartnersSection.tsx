'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const partners = [
  {
    name: 'Air India & their International Client Airlines',
    logo: 'https://airhex.com/images/airline-logos/air-india.png',
  },
  {
    name: 'IndiGo',
    logo: 'https://airhex.com/images/airline-logos/indigo.png',
  },
  {
    name: 'SpiceJet',
    logo: 'https://airhex.com/images/airline-logos/spicejet.png',
  },
  {
    name: 'Jet Airways',
    logo: 'https://airhex.com/images/airline-logos/jet-airways.png',
  },
  {
    name: 'Go First (GoAir)',
    logo: 'https://airhex.com/images/airline-logos/go-first.png',
  },
  {
    name: 'Kingfisher',
    logo: 'https://airhex.com/images/airline-logos/kingfisher-airlines.png',
  },
]

const airports = [
  'Bangalore (BLR)',
  'Chennai (MAA)',
  'Hyderabad (HYD)',
  'Calicut (CCJ)',
  'Cochin (COK)',
  'Trichy (TRZ)',
  'Coimbatore (CJB)',
  'Mangalore (IXE)',
  'Trivandrum (TRV)',
  'Pune (PNQ)',
  'Hubballi (HBX)',
  'Madurai (IXM)'
]

export default function PartnersSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-6">
            Trusted by Leading <span className="text-gradient">Airlines</span>
          </h2>
          <p className="text-large max-w-3xl mx-auto mb-12">
            We proudly serve as the ground handling partner for India's top airlines, 
            ensuring seamless operations and exceptional service quality.
          </p>
          
          {/* Partner Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-stretch justify-items-center mb-16">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 w-full h-28 flex flex-col items-center justify-center"
              >
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={100}
                    height={40}
                    className="object-contain max-h-10"
                  />
                ) : null}
                <div className="text-aviation-grey-700 text-sm font-medium text-center mt-3 px-2">
                  {partner.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Airport Presence */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-aviation-grey-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-poppins font-bold text-aviation-grey-900 mb-4">
              Pan-India Airport Presence
            </h3>
            <p className="text-large text-aviation-grey-600">
              Strategic locations across major Indian airports ensuring comprehensive coverage
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {airports.map((airport, index) => (
              <motion.div
                key={airport}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-aviation-grey-700 font-medium">{airport}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/presence" className="btn-primary">
              View All Locations
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 