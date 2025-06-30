import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Clients - Visskan Aviation',
  description: 'Trusted by leading airlines including Air India, IndiGo, SpiceJet, Vistara, and more for professional ground handling services.',
  openGraph: {
    title: 'Our Clients - Visskan Aviation',
    description: 'Trusted aviation partner for leading airlines across India.',
  },
}

const clients = [
  { name: 'Air India', description: 'National flag carrier of India' },
  { name: 'IndiGo', description: 'Largest airline in India by passengers carried' },
  { name: 'SpiceJet', description: 'Low-cost airline headquartered in Gurugram' },
  { name: 'Vistara', description: 'Full-service carrier joint venture' },
  { name: 'GoAir', description: 'Ultra low-cost airline' },
  { name: 'AirAsia India', description: 'Low-cost airline subsidiary' },
  { name: 'Alliance Air', description: 'Regional subsidiary of Air India' },
  { name: 'Blue Dart Aviation', description: 'Cargo airline' }
]

const testimonials = [
  {
    quote: "Visskan Aviation has been instrumental in our ground operations. Their professional team and commitment to safety standards make them our preferred ground handling partner.",
    author: "Operations Director",
    company: "Major Indian Airline",
    rating: 5
  },
  {
    quote: "The level of service and reliability provided by Visskan Aviation is exceptional. They have consistently delivered on-time performance across all our operations.",
    author: "Ground Operations Manager",
    company: "International Carrier",
    rating: 5
  },
  {
    quote: "Working with Visskan Aviation has streamlined our operations significantly. Their expertise in cargo handling has been particularly valuable for our freight operations.",
    author: "Cargo Operations Head",
    company: "Cargo Airline",
    rating: 5
  }
]

export default function Clients() {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="heading-primary mb-6">
              Our <span className="text-gradient">Clients</span>
            </h1>
            <p className="text-large">
              Trusted by leading airlines across India for professional ground handling 
              and aviation support services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div key={client.name} className="card p-6 text-center">
                <div className="w-20 h-20 bg-aviation-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-aviation-blue-600">
                    {client.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-poppins font-semibold text-aviation-grey-900 mb-2">
                  {client.name}
                </h3>
                <p className="text-aviation-grey-600 text-sm">
                  {client.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-aviation-grey-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">
              Client <span className="text-gradient">Testimonials</span>
            </h2>
            <p className="text-large max-w-3xl mx-auto">
              Hear what our airline partners have to say about our services 
              and commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-aviation-grey-600 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold text-aviation-grey-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-aviation-grey-600">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="heading-secondary mb-8">
            Join Our <span className="text-gradient">Partner Network</span>
          </h2>
          <p className="text-large mb-8 max-w-2xl mx-auto">
            Ready to experience world-class ground handling services? 
            Join the growing list of airlines that trust Visskan Aviation.
          </p>
          <a href="/contact" className="btn-primary">
            Become a Partner
          </a>
        </div>
      </section>
    </div>
  )
} 