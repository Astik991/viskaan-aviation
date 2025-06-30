import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers - Visskan Aviation',
  description: 'Join the Visskan Aviation team and build a career in the dynamic aviation industry. Explore opportunities across India.',
  openGraph: {
    title: 'Careers - Visskan Aviation',
    description: 'Join our team and build a career in aviation industry.',
  },
}

const positions = [
  {
    title: 'Ground Handling Supervisor',
    location: 'Mumbai Airport',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Lead ground handling operations and ensure safety compliance.'
  },
  {
    title: 'Cargo Operations Executive',
    location: 'Delhi Airport',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Manage cargo handling operations and documentation.'
  },
  {
    title: 'Customer Service Representative',
    location: 'Bangalore Airport',
    type: 'Full-time',
    experience: '1-3 years',
    description: 'Provide excellent passenger assistance and support services.'
  },
  {
    title: 'Aircraft Maintenance Technician',
    location: 'Chennai Airport',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Perform aircraft maintenance and technical inspections.'
  }
]

const benefits = [
  'Competitive salary packages',
  'Health and medical insurance',
  'Professional development opportunities',
  'Performance-based bonuses',
  'Flexible working arrangements',
  'Career advancement paths'
]

export default function Careers() {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="heading-primary mb-6">
              Build Your Career with <span className="text-gradient">Us</span>
            </h1>
            <p className="text-large">
              Join the Visskan Aviation team and be part of India's leading 
              aviation services company. Shape the future of aviation with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {positions.map((position, index) => (
              <div key={position.title} className="card p-8">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-poppins font-bold text-aviation-grey-900">
                    {position.title}
                  </h2>
                  <span className="bg-aviation-blue-100 text-aviation-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {position.type}
                  </span>
                </div>
                <p className="text-aviation-grey-600 mb-4">
                  {position.description}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-aviation-grey-600 mb-6">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {position.location}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {position.experience}
                  </span>
                </div>
                <button className="btn-primary w-full">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-aviation-grey-600 mb-4">
              Don't see the right position? We're always looking for talented individuals.
            </p>
            <a href="/contact" className="btn-secondary">
              Send Your Resume
            </a>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-aviation-grey-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-6">
              Why Work <span className="text-gradient">With Us?</span>
            </h2>
            <p className="text-large max-w-3xl mx-auto">
              We offer a dynamic work environment with opportunities for growth 
              and development in the exciting aviation industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-aviation-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-aviation-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-aviation-grey-700 font-medium">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 