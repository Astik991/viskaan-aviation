import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Airport Presence - Visskan Aviation',
  description: 'Visskan Aviation operates across major airports in India including Bangalore, Chennai, Hyderabad and more.',
  openGraph: {
    title: 'Airport Presence - Visskan Aviation',
    description: 'Our strategic presence across major Indian airports ensures comprehensive coverage.',
  },
}

const airports = [
  { name: 'Bangalore', code: 'BLR', city: 'Bengaluru', state: 'Karnataka' },
  { name: 'Chennai', code: 'MAA', city: 'Chennai', state: 'Tamil Nadu' },
  { name: 'Hyderabad', code: 'HYD', city: 'Hyderabad', state: 'Telangana' },
  { name: 'Calicut', code: 'CCJ', city: 'Kozhikode', state: 'Kerala' },
  { name: 'Cochin', code: 'COK', city: 'Kochi', state: 'Kerala' },
  { name: 'Trichy', code: 'TRZ', city: 'Tiruchirappalli', state: 'Tamil Nadu' },
  { name: 'Coimbatore', code: 'CJB', city: 'Coimbatore', state: 'Tamil Nadu' },
  { name: 'Mangalore', code: 'IXE', city: 'Mangaluru', state: 'Karnataka' },
  { name: 'Trivandrum', code: 'TRV', city: 'Thiruvananthapuram', state: 'Kerala' },
  { name: 'Pune', code: 'PNQ', city: 'Pune', state: 'Maharashtra' },
  { name: 'Hubballi', code: 'HBX', city: 'Hubballi', state: 'Karnataka' },
  { name: 'Madurai', code: 'IXM', city: 'Madurai', state: 'Tamil Nadu' },
]

export default function Presence() {
  return (
    <div className="pt-20">
        <section className="section-padding">
          <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="heading-primary mb-6">
              Our <span className="text-gradient">Presence</span>
            </h1>
            <p className="text-large">
              Strategic operations across 25+ major airports in India, ensuring 
              comprehensive coverage and seamless connectivity nationwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {airports.map((airport, index) => (
              <div key={airport.code} className="card p-6 text-center">
                <div className="w-16 h-16 bg-aviation-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-aviation-blue-600">
                    {airport.code}
                  </span>
                </div>
                <h3 className="text-lg font-poppins font-semibold text-aviation-grey-900 mb-2">
                  {airport.name} Airport
                </h3>
                <p className="text-aviation-grey-600 text-sm">
                  {airport.city}, {airport.state}
                </p>
              </div>
            ))}
          </div>
          </div>
        </section>
      
      <section className="section-padding bg-aviation-grey-50">
        <div className="container-custom text-center">
          <h2 className="heading-secondary mb-8">
            Expanding Our <span className="text-gradient">Network</span>
          </h2>
          <p className="text-large mb-8 max-w-3xl mx-auto">
            We are continuously expanding our operations to serve more airports 
            across India. Contact us to discuss establishing services at your location.
          </p>
          <a href="/contact" className="btn-primary">
            Discuss New Location
          </a>
        </div>
      </section>
    </div>
  )
} 