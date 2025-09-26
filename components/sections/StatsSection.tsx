'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const stats = [
  {
    number: '500+',
    label: 'Daily Flights Handled',
    description: 'Comprehensive ground handling services for domestic and international flights'
  },
  {
    number: '10+',
    label: 'Airport Locations',
    description: 'Strategic presence across major Indian airports nationwide'
  },
  {
    number: '25+',
    label: 'Years Experience',
    description: 'Proven track record in aviation ground handling excellence'
  },
  {
    number: '99.9%',
    label: 'On-Time Performance',
    description: 'Industry-leading reliability and operational efficiency'
  }
]

export default function StatsSection() {
  return (
    <section className="section-padding bg-gradient-aviation text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 relative">
              <Image
                src="/visskan-stacked-logo.svg"
                alt="Visskan Aviation Logo"
                fill
                className="object-contain filter brightness-0 invert"
              />
            </div>
          </motion.div>
          
          <h2 className="heading-secondary text-white mb-6">
            Trusted by Airlines <span className="text-aviation-blue-200">Worldwide</span>
          </h2>
          <p className="text-large text-aviation-blue-100 max-w-3xl mx-auto">
            Our commitment to excellence and operational efficiency has made us the 
            preferred ground handling partner for leading airlines across India.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
                className="text-5xl lg:text-6xl font-bold text-aviation-blue-200 mb-4"
              >
                {stat.number}
              </motion.div>
              <h3 className="text-xl font-poppins font-semibold mb-3">
                {stat.label}
              </h3>
              <p className="text-aviation-blue-100 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 