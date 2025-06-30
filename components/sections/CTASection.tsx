'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function CTASection() {
  return (
    <section className="section-padding bg-aviation-grey-900 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-secondary text-white mb-6">
              Ready to Partner with <span className="text-aviation-blue-300">Excellence?</span>
            </h2>
            <p className="text-large text-aviation-grey-300 mb-8 max-w-2xl mx-auto">
              Join the growing list of airlines that trust Visskan Aviation for their 
              ground handling needs. Get in touch today for a customized solution.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link 
              href="/contact" 
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Get Custom Quote</span>
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <Link 
              href="tel:+91-22-6685-1000" 
              className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-aviation-grey-900 inline-flex items-center space-x-2"
            >
              <PhoneIcon className="h-5 w-5" />
              <span>Call Now</span>
            </Link>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-aviation-grey-800 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-aviation-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-poppins font-semibold mb-2">Call Us</h3>
              <p className="text-aviation-grey-400 text-sm mb-2">Available 24/7</p>
              <p className="text-aviation-blue-300">+91 22 6685 1000</p>
            </div>

            <div className="bg-aviation-grey-800 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-aviation-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-poppins font-semibold mb-2">Email Us</h3>
              <p className="text-aviation-grey-400 text-sm mb-2">Quick Response</p>
              <p className="text-aviation-blue-300">info@visskanaviation.com</p>
            </div>

            <div className="bg-aviation-grey-800 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-aviation-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-poppins font-semibold mb-2">Visit Us</h3>
              <p className="text-aviation-grey-400 text-sm mb-2">Headquarters</p>
              <p className="text-aviation-blue-300">Mumbai Airport T2</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 