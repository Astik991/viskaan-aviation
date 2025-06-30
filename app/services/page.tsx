import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviation Services - Visskan Aviation',
  description: 'Comprehensive ground handling, cargo services, passenger assistance, aircraft maintenance, and fuel services across major Indian airports.',
  openGraph: {
    title: 'Aviation Services - Visskan Aviation',
    description: 'Complete range of aviation support services including ground handling, cargo, and passenger services.',
  },
}

const services = [
  {
    title: 'Ground Handling',
    description: 'Complete aircraft ground handling operations including ramp services, baggage handling, and aircraft marshalling.',
    features: [
      'Aircraft Marshalling & Guidance',
      'Baggage Loading & Unloading',
      'Cargo Handling Operations',
      'Aircraft Cleaning Services',
      'Ramp Operations Management',
      'Ground Power Unit (GPU) Services'
    ]
  },
  {
    title: 'Cargo Handling',
    description: 'Specialized cargo handling and logistics solutions for domestic and international freight operations.',
    features: [
      'Cargo Loading & Unloading',
      'Freight Documentation',
      'Warehouse Management',
      'Customs Clearance Support',
      'Special Cargo Handling',
      'Cold Chain Management'
    ]
  },
  {
    title: 'Training & Development',
    description: 'Professional training programs for aviation personnel and ground handling staff.',
    features: [
      'Ground Handling Training',
      'Safety & Security Training',
      'Equipment Operation Training',
      'Regulatory Compliance Training',
      'Customer Service Training',
      'Certification Programs'
    ]
  },
  {
    title: 'Logistics & Warehousing',
    description: 'Complete logistics solutions and warehousing services for cargo and freight management.',
    features: [
      'Warehouse Management',
      'Inventory Control',
      'Distribution Services',
      'Cross-docking Operations',
      'Cold Storage Facilities',
      'Supply Chain Management'
    ]
  },
  {
    title: 'Facility Management',
    description: 'Comprehensive facility management services for airport infrastructure and operations.',
    features: [
      'Infrastructure Maintenance',
      'Facility Security',
      'Cleaning & Housekeeping',
      'Equipment Management',
      'Utility Services',
      'Vendor Coordination'
    ]
  },
  {
    title: 'Freight Forwarding',
    description: 'International and domestic freight forwarding services with end-to-end logistics support.',
    features: [
      'Air Freight Services',
      'Customs Documentation',
      'Multi-modal Transportation',
      'Door-to-door Delivery',
      'Insurance Services',
      'Tracking & Monitoring'
    ]
  }
]

export default function Services() {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="heading-primary mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-large">
              Comprehensive aviation support services designed to ensure safe, 
              efficient, and reliable operations across all major Indian airports.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="card p-8">
                <h2 className="text-2xl font-poppins font-bold text-aviation-grey-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-aviation-grey-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-aviation-blue-600 rounded-full mt-2.5 mr-3 flex-shrink-0" />
                      <span className="text-aviation-grey-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-aviation-grey-50">
        <div className="container-custom text-center">
          <h2 className="heading-secondary mb-8">
            Need Custom Aviation <span className="text-gradient">Solutions?</span>
          </h2>
          <p className="text-large mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your specific requirements and get a 
            customized aviation services package tailored to your needs.
          </p>
          <a href="/contact" className="btn-primary">
            Get Custom Quote
          </a>
        </div>
      </section>
    </div>
  )
} 