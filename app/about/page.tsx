import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Visskan Aviation',
  description: 'Learn about Visskan Aviation\'s 25+ years of experience since 1999 in providing comprehensive ground handling and aviation support services across major Indian airports.',
  openGraph: {
    title: 'About Us - Visskan Aviation',
    description: 'Learn about Visskan Aviation\'s experience in aviation ground handling services.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'About Visskan Aviation',
  description: 'Learn about our company history, mission, and aviation expertise.',
  url: 'https://www.visskanaviation.com/about',
}

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-20">
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="heading-primary mb-6">
                About <span className="text-gradient">Visskan Aviation</span>
              </h1>
              <p className="text-large mb-12">
                Since commencing operations in 1999, Visskan Aviation has established itself as the trusted and
                reliable provider of world-class ground handling and cargo handling services to leading airlines
                and airports across India.
              </p>
            </div>
          </div>
        </section>
        
        <section className="section-padding bg-aviation-grey-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="heading-secondary mb-6">Our Mission</h2>
                <p className="text-large mb-6">
                  To provide world-class ground handling and aviation support services 
                  that ensure safe, efficient, and reliable operations for airlines 
                  across India.
                </p>
                <p className="text-aviation-grey-600">
                  We are committed to maintaining the highest standards of safety, 
                  quality, and customer service while continuously innovating to 
                  meet the evolving needs of the aviation industry.
                </p>
              </div>
              
              <div>
                <h2 className="heading-secondary mb-6">Our Vision</h2>
                <p className="text-large mb-6">
                  To be the leading aviation services provider in India, recognized 
                  for our commitment to excellence, innovation, and sustainable growth.
                </p>
                <p className="text-aviation-grey-600">
                  We envision a future where our services enable seamless connectivity 
                  across India and contribute to the growth of the aviation sector.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section-padding">
          <div className="container-custom text-center">
            <h2 className="heading-secondary mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-8">
                <div className="w-16 h-16 bg-aviation-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-aviation-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-poppins font-semibold mb-4">BCAS Cleared</h3>
                <p className="text-aviation-grey-600">Ensuring trusted and compliant aviation services</p>
              </div>

              <div className="card p-8">
                <div className="w-16 h-16 bg-aviation-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-aviation-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-poppins font-semibold mb-4">10+ Airports</h3>
                <p className="text-aviation-grey-600">Strategic presence across major Indian airports nationwide</p>
              </div>

              <div className="card p-8">
                <div className="w-16 h-16 bg-aviation-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-aviation-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-poppins font-semibold mb-4">24/7 Service</h3>
                <p className="text-aviation-grey-600">Round-the-clock operations ensuring continuous support</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
} 