'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const partners = [
  { name: 'Air India', logo: '/images/partners/air-india.png' },
  { name: 'IndiGo', logo: '/images/partners/indigo.png' },
  { name: 'SpiceJet', logo: '/images/partners/spicejet.png' },
  { name: 'Vistara', logo: '/images/partners/vistara.png' },
  { name: 'GoAir', logo: '/images/partners/goair.png' },
  { name: 'AirAsia India', logo: '/images/partners/airasia.png' }
]

const airports = [
  'Mumbai (BOM)', 'Delhi (DEL)', 'Bangalore (BLR)', 'Chennai (MAA)',
  'Kolkata (CCU)', 'Hyderabad (HYD)', 'Pune (PNQ)', 'Ahmedabad (AMD)',
  'Kochi (COK)', 'Goa (GOI)', 'Jaipur (JAI)', 'Lucknow (LKO)'
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center mb-16">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-full h-24 flex items-center justify-center"
              >
                {/* Placeholder for partner logos */}
                <div className="text-aviation-grey-600 font-medium text-center">
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