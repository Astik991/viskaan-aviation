import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Visskan Aviation',
  description: 'Get in touch with Visskan Aviation for aviation ground handling services. Contact our team for quotes, partnerships, and support.',
  openGraph: {
    title: 'Contact Us - Visskan Aviation',
    description: 'Contact Visskan Aviation for professional aviation ground handling services.',
  },
}

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="heading-primary mb-6">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-large">
              Ready to partner with India's leading aviation services provider? 
              Get in touch with our team today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="card p-8">
              <h2 className="text-2xl font-poppins font-bold text-aviation-grey-900 mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-aviation-grey-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-aviation-grey-300 rounded-lg focus:ring-2 focus:ring-aviation-blue-500 focus:border-aviation-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-aviation-grey-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-aviation-grey-300 rounded-lg focus:ring-2 focus:ring-aviation-blue-500 focus:border-aviation-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-aviation-grey-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-aviation-grey-300 rounded-lg focus:ring-2 focus:ring-aviation-blue-500 focus:border-aviation-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-aviation-grey-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-aviation-grey-300 rounded-lg focus:ring-2 focus:ring-aviation-blue-500 focus:border-aviation-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-aviation-grey-700 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-aviation-grey-300 rounded-lg focus:ring-2 focus:ring-aviation-blue-500 focus:border-aviation-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="ground-handling">Ground Handling</option>
                    <option value="cargo-services">Cargo Services</option>
                    <option value="passenger-services">Passenger Services</option>
                    <option value="aircraft-maintenance">Aircraft Maintenance</option>
                    <option value="fuel-services">Fuel Services</option>
                    <option value="operations-support">Operations Support</option>
                    <option value="custom-solution">Custom Solution</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-aviation-grey-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-aviation-grey-300 rounded-lg focus:ring-2 focus:ring-aviation-blue-500 focus:border-aviation-blue-500"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-poppins font-bold text-aviation-grey-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-aviation-grey-600 mb-6">
                  Our team is available 24/7 to assist you with your aviation service needs. 
                  Reach out through any of the channels below.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-aviation-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-aviation-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-aviation-grey-900 mb-1">Phone</h3>
                    <p className="text-aviation-grey-600">+91 22 6685 1000</p>
                    <p className="text-aviation-grey-600">+91 22 6685 1001</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-aviation-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-aviation-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-aviation-grey-900 mb-1">Email</h3>
                    <p className="text-aviation-grey-600">info@visskanaviation.com</p>
                    <p className="text-aviation-grey-600">support@visskanaviation.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-aviation-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-aviation-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-aviation-grey-900 mb-1">Headquarters</h3>
                    <p className="text-aviation-grey-600">Mumbai Airport</p>
                    <p className="text-aviation-grey-600">Terminal 2, Level 3</p>
                    <p className="text-aviation-grey-600">Mumbai, Maharashtra 400099</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-aviation-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-aviation-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-aviation-grey-900 mb-1">Business Hours</h3>
                    <p className="text-aviation-grey-600">24/7 Operations</p>
                    <p className="text-aviation-grey-600">Office: Mon-Fri 9:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 