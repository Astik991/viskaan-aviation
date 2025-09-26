'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  CogIcon, 
  TruckIcon, 
  UserGroupIcon, 
  WrenchScrewdriverIcon,
  BeakerIcon,
  ClipboardDocumentCheckIcon 
} from '@heroicons/react/24/outline'

const services = [
  {
    icon: CogIcon,
    title: 'Ground Handling',
    // description: 'Complete aircraft ground handling services including ramp operations, baggage handling, and aircraft marshalling.',
    features: ['GSE Operation and Maintenance', 'Baggage Handling Services', 'Cabin Cleaning and Preparation', 'Potable Water and Lavatory Services', 'Cargo Loading and Offloading', 'Passenger & Crew Movement', 'Aircraft Pushback Operations']
  },
  {
    icon: TruckIcon,
    title: 'Cargo Services',
    // description: 'Specialized cargo handling and logistics solutions for both domestic and international shipments.',
    features: [
      "Dock Operations for Inbound and Outbound Cargo",
      "Security Screening of Cargo",
      "Palletization/De-Palletization",
      "Storage and Staging of Cargo",
      "Weight and Balance Coordination",
      "ULD Handling and Management",
      "Special Cargo Handling ",
      "Customs Coordination and Clearance Support",
      "Damage Inspection and Reporting"
      ]
  },
  {
    icon: UserGroupIcon,
    title: 'Passenger Services',
    // description: 'Comprehensive passenger assistance and customer service solutions at terminal facilities.',
    features: [ "Check-in Services",
      "Immigration and Customs Support",
      "Boarding Assistance",
      "Passenger Guidance and Information Services",
      "Special Assistance for PRMs & UMs ",
      "Flight Announcements",
      "Baggage Claim Assistance",
      "Transit and Transfer Support",
      "Customer Service Desks",
      "Meet and Greet Services",
      "VIP and Protocol Services",
      "Ground Transportation Assistance ",
      "Load & Trim"
    ]
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Aircraft Maintenance',
    description: 'Professional aircraft maintenance support services ensuring safety and compliance.”',
    features: [
      'Line Maintenance',
      'Airframe and Structural Repairs',
      'Component Repair and Replacement',
      'Cabin Maintenance and Interior Repairs',
      'Aircraft Cleaning and Detailing (Interior & Exterior)'
    ]
  },
  {
    icon: BeakerIcon,
    title: 'Fuel Services',
    description: 'Manpower support for Reliable aircraft refuelling services with strict safety protocols and quality assurance.',
    features: ['Aircraft Refueling', 'Fuel Quality Control', 'Safety Protocols']
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: 'Operations Support',
    description: 'Comprehensive operational support and coordination.”',
    features: ['Operations Coordination', 'Documentation']
  }
]

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-aviation-grey-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-6">
            Comprehensive Aviation <span className="text-gradient">Services</span>
          </h2>
          <p className="text-large max-w-3xl mx-auto">
            From ground handling to passenger services, we provide end-to-end aviation 
            support solutions that ensure safe, efficient, and reliable operations across 
            all major Indian airports.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 group"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-aviation-blue-100 rounded-lg group-hover:bg-aviation-blue-600 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-aviation-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              
              <h3 className="text-xl font-poppins font-semibold text-aviation-grey-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-aviation-grey-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-aviation-grey-600">
                    <div className="w-1.5 h-1.5 bg-aviation-blue-600 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link 
                href="/services" 
                className="text-aviation-blue-600 hover:text-aviation-blue-700 font-medium inline-flex items-center group"
              >
                Learn More
                <svg 
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 