'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  GlobeAltIcon, 
  ClockIcon, 
  StarIcon 
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: ShieldCheckIcon,
    title: 'Safety First',
    description: 'IATA certified operations with stringent safety protocols'
  },
  {
    icon: GlobeAltIcon,
    title: 'Pan-India Coverage',
    description: 'Services across 25+ major airports in India'
  },
  {
    icon: ClockIcon,
    title: '24/7 Operations',
    description: 'Round-the-clock service availability'
  },
  {
    icon: StarIcon,
    title: 'Excellence Assured',
    description: '99.9% on-time performance record'
  }
]

export default function AboutSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-secondary mb-6">
              Your Trusted <span className="text-gradient">Aviation Partner</span>
            </h2>
            <p className="text-large mb-8">
              With over 15 years of experience, Visskan Aviation has established itself as 
              India's premier ground handling service provider. We combine cutting-edge 
              technology with experienced professionals to deliver exceptional aviation 
              support services.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="p-2 bg-aviation-blue-100 rounded-lg flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-aviation-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-aviation-grey-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-aviation-grey-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Aviation Ground Operations"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-aviation-blue-600/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-aviation-blue-600 mb-1">15+</div>
                <div className="text-sm text-aviation-grey-600">Years Experience</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-6"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-aviation-blue-600 mb-1">500+</div>
                <div className="text-sm text-aviation-grey-600">Daily Flights</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 