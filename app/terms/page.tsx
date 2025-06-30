import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Visskan Aviation',
  description: 'Visskan Aviation Terms of Service - Legal terms and conditions for our ground handling and aviation support services.',
  robots: { index: true, follow: true },
}

export default function TermsOfService() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-primary text-center mb-12">
            Terms of <span className="text-gradient">Service</span>
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-aviation-grey-600 mb-8">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">1. Agreement to Terms</h2>
              <p className="text-aviation-grey-700 mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and Visskan Aviation Pvt. Ltd. 
                ("Company," "we," "our," or "us") concerning your use of our website and aviation ground handling services.
              </p>
              <p className="text-aviation-grey-700">
                By accessing our website or engaging our services, you agree to be bound by these Terms and all applicable laws 
                and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">2. Services Description</h2>
              <p className="text-aviation-grey-700 mb-4">
                Visskan Aviation provides comprehensive ground handling and aviation support services including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-aviation-grey-700">
                <li>Aircraft ground handling services</li>
                <li>Passenger and crew handling</li>
                <li>Cargo and freight handling</li>
                <li>Ramp services and aircraft servicing</li>
                <li>Loading and unloading services</li>
                <li>Aviation logistics and coordination</li>
                <li>Fuel coordination services</li>
                <li>Aircraft cleaning and maintenance support</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">3. Service Agreements</h2>
              
              <h3 className="text-xl font-semibold text-aviation-grey-900 mb-4">3.1 Service Requests</h3>
              <p className="text-aviation-grey-700 mb-4">
                All service requests must be submitted in writing through our authorized channels. Service confirmation 
                is subject to availability, regulatory approval, and compliance with airport operating procedures.
              </p>

              <h3 className="text-xl font-semibold text-aviation-grey-900 mb-4">3.2 Service Standards</h3>
              <p className="text-aviation-grey-700 mb-4">
                We maintain high service standards in accordance with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-aviation-grey-700">
                <li>DGCA (Directorate General of Civil Aviation) regulations</li>
                <li>IATA (International Air Transport Association) standards</li>
                <li>Airport Authority of India (AAI) guidelines</li>
                <li>International aviation safety protocols</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">4. Client Obligations</h2>
              <p className="text-aviation-grey-700 mb-4">
                As our client, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-aviation-grey-700">
                <li>Provide accurate flight and cargo information</li>
                <li>Comply with all aviation regulations and safety requirements</li>
                <li>Maintain valid insurance coverage for aircraft and operations</li>
                <li>Provide necessary documentation and permits</li>
                <li>Pay all fees and charges in accordance with agreed terms</li>
                <li>Notify us of any changes to service requirements in advance</li>
                <li>Ensure compliance with customs and immigration regulations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">5. Payment Terms</h2>
              
              <h3 className="text-xl font-semibold text-aviation-grey-900 mb-4">5.1 Fees and Charges</h3>
              <p className="text-aviation-grey-700 mb-4">
                Service fees are based on our current rate schedule and may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-aviation-grey-700 mb-6">
                <li>Ground handling charges</li>
                <li>Equipment usage fees</li>
                <li>Labor and supervision costs</li>
                <li>Third-party service charges</li>
                <li>Airport taxes and fees (where applicable)</li>
              </ul>

              <h3 className="text-xl font-semibold text-aviation-grey-900 mb-4">5.2 Payment Schedule</h3>
              <p className="text-aviation-grey-700">
                Payment terms are typically net 30 days from invoice date unless otherwise agreed in writing. 
                Late payments may incur interest charges and may result in suspension of services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">6. Liability and Insurance</h2>
              
              <h3 className="text-xl font-semibold text-aviation-grey-900 mb-4">6.1 Limitation of Liability</h3>
              <p className="text-aviation-grey-700 mb-4">
                Our liability for any claim arising from our services is limited to the direct costs of the services 
                provided, except where prohibited by law. We shall not be liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-aviation-grey-700 mb-6">
                <li>Indirect, consequential, or special damages</li>
                <li>Loss of profits or business interruption</li>
                <li>Delays caused by factors beyond our control</li>
                <li>Third-party actions or omissions</li>
              </ul>

              <h3 className="text-xl font-semibold text-aviation-grey-900 mb-4">6.2 Insurance Requirements</h3>
              <p className="text-aviation-grey-700">
                We maintain comprehensive insurance coverage for our operations. Clients are responsible for maintaining 
                adequate insurance for their aircraft, cargo, and operations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">7. Force Majeure</h2>
              <p className="text-aviation-grey-700">
                We shall not be liable for any failure to perform our obligations due to circumstances beyond our reasonable 
                control, including but not limited to weather conditions, natural disasters, labor strikes, government actions, 
                airport closures, or other force majeure events.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">8. Safety and Security</h2>
              <p className="text-aviation-grey-700 mb-4">
                Safety is our top priority. We reserve the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-aviation-grey-700">
                <li>Refuse service if safety standards cannot be met</li>
                <li>Require additional safety measures when necessary</li>
                <li>Comply with all security directives from authorities</li>
                <li>Conduct security screenings as required</li>
                <li>Report safety or security incidents to appropriate authorities</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">9. Intellectual Property</h2>
              <p className="text-aviation-grey-700">
                All content on our website, including text, graphics, logos, and software, is the property of Visskan Aviation 
                or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, 
                distribute, or create derivative works without our written permission.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">10. Confidentiality</h2>
              <p className="text-aviation-grey-700">
                We maintain strict confidentiality regarding client information, flight details, and operational data. 
                Both parties agree to protect confidential information disclosed during the course of business relations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">11. Termination</h2>
              <p className="text-aviation-grey-700">
                Either party may terminate service agreements with appropriate notice as specified in individual service contracts. 
                Termination does not relieve either party of obligations incurred prior to termination.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">12. Governing Law</h2>
              <p className="text-aviation-grey-700">
                These Terms are governed by and construed in accordance with the laws of India. Any disputes arising from 
                these Terms or our services shall be subject to the jurisdiction of the courts in [Jurisdiction], India.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">13. Contact Information</h2>
              <p className="text-aviation-grey-700 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-aviation-grey-50 p-6 rounded-lg">
                <p className="text-aviation-grey-700"><strong>Visskan Aviation Pvt. Ltd.</strong></p>
                <p className="text-aviation-grey-700">Email: legal@visskanaviation.com</p>
                <p className="text-aviation-grey-700">Phone: +91-XXX-XXX-XXXX</p>
                <p className="text-aviation-grey-700">Address: [Company Address]</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">14. Changes to Terms</h2>
              <p className="text-aviation-grey-700">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting 
                on our website. Your continued use of our services constitutes acceptance of any modified Terms.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 