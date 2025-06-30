import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Airport Presence - Visskan Aviation',
  description: 'Visskan Aviation operates across 25+ major airports in India including Mumbai, Delhi, Bangalore, Chennai, and more.',
  openGraph: {
    title: 'Airport Presence - Visskan Aviation',
    description: 'Our strategic presence across major Indian airports ensures comprehensive coverage.',
  },
}

const airports = [
  { name: 'Mumbai', code: 'BOM', city: 'Mumbai', state: 'Maharashtra' },
  { name: 'Delhi', code: 'DEL', city: 'Delhi', state: 'Delhi' },
  { name: 'Bangalore', code: 'BLR', city: 'Bangalore', state: 'Karnataka' },
  { name: 'Chennai', code: 'MAA', city: 'Chennai', state: 'Tamil Nadu' },
  { name: 'Kolkata', code: 'CCU', city: 'Kolkata', state: 'West Bengal' },
  { name: 'Hyderabad', code: 'HYD', city: 'Hyderabad', state: 'Telangana' },
  { name: 'Pune', code: 'PNQ', city: 'Pune', state: 'Maharashtra' },
  { name: 'Ahmedabad', code: 'AMD', city: 'Ahmedabad', state: 'Gujarat' },
  { name: 'Kochi', code: 'COK', city: 'Kochi', state: 'Kerala' },
  { name: 'Goa', code: 'GOI', city: 'Goa', state: 'Goa' },
  { name: 'Jaipur', code: 'JAI', city: 'Jaipur', state: 'Rajasthan' },
  { name: 'Lucknow', code: 'LKO', city: 'Lucknow', state: 'Uttar Pradesh' },
  { name: 'Indore', code: 'IDR', city: 'Indore', state: 'Madhya Pradesh' },
  { name: 'Bhubaneswar', code: 'BBI', city: 'Bhubaneswar', state: 'Odisha' },
  { name: 'Coimbatore', code: 'CJB', city: 'Coimbatore', state: 'Tamil Nadu' },
  { name: 'Nagpur', code: 'NAG', city: 'Nagpur', state: 'Maharashtra' }
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