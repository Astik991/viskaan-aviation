import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Visskan Aviation',
  description: 'Visskan Aviation Privacy Policy - How we collect, use, and protect your personal information in compliance with data protection regulations.',
  robots: { index: true, follow: true },
}

export default function PrivacyPolicy() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-primary text-center mb-12">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-aviation-grey-600 mb-8">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">1. Introduction</h2>
              <p className="text-aviation-grey-700 mb-4">
                Visskan Aviation Pvt. Ltd. ("we," "our," or "us") is committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, 
                use our ground handling services, or engage with us in any capacity.
              </p>
              <p className="text-aviation-grey-700">
                As a leading provider of aviation ground handling services across major Indian airports, we understand the importance 
                of maintaining the confidentiality and security of personal and operational data in the aviation industry.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-aviation-grey-900 mb-4">2.1 Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-aviation-grey-700 mb-6">
                <li>Contact information (name, email address, phone number, mailing address)</li>
                <li>Company information and job title</li>
                <li>Flight and cargo handling requests</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-aviation-grey-900 mb-4">2.2 Operational Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-aviation-grey-700 mb-6">
                <li>Aircraft registration and flight details</li>
                <li>Cargo and passenger handling requirements</li>
                <li>Service schedules and operational timings</li>
                <li>Safety and security-related information</li>
              </ul>

              <h3 className="text-xl font-semibold text-aviation-grey-900 mb-4">2.3 Technical Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-aviation-grey-700">
                <li>IP address and browser type</li>
                <li>Website usage patterns and analytics</li>
                <li>Device information and operating system</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-aviation-grey-700">
                <li>Provide and improve our ground handling services</li>
                <li>Process service requests and manage operations</li>
                <li>Communicate with you about services and updates</li>
                <li>Ensure compliance with aviation regulations and safety standards</li>
                <li>Process payments and manage billing</li>
                <li>Analyze and improve our website and services</li>
                <li>Respond to inquiries and provide customer support</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">4. Information Sharing and Disclosure</h2>
              <p className="text-aviation-grey-700 mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-aviation-grey-700">
                <li><strong>Aviation Authorities:</strong> When required for regulatory compliance (DGCA, AAI, customs)</li>
                <li><strong>Service Partners:</strong> With airlines, airports, and other aviation service providers</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Operations:</strong> With trusted third-party service providers under confidentiality agreements</li>
                <li><strong>Emergency Situations:</strong> When necessary for safety or security purposes</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">5. Data Security</h2>
              <p className="text-aviation-grey-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-aviation-grey-700">
                <li>Unauthorized access, use, or disclosure</li>
                <li>Accidental loss or destruction</li>
                <li>Malicious attacks and data breaches</li>
                <li>Alteration or corruption of data</li>
              </ul>
              <p className="text-aviation-grey-700 mt-4">
                Our security measures include encryption, access controls, regular security assessments, and employee training 
                on data protection best practices.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">6. Your Rights</h2>
              <p className="text-aviation-grey-700 mb-4">
                Under applicable data protection laws, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-aviation-grey-700">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Restrict or object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent for marketing communications</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">7. Data Retention</h2>
              <p className="text-aviation-grey-700">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, 
                comply with aviation regulations, resolve disputes, and enforce our agreements. Operational data may be retained 
                for extended periods as required by aviation authorities and safety regulations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">8. International Transfers</h2>
              <p className="text-aviation-grey-700">
                As part of our international aviation services, your information may be transferred to and processed in countries 
                outside of India. We ensure appropriate safeguards are in place to protect your data during such transfers.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">9. Contact Us</h2>
              <p className="text-aviation-grey-700 mb-4">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="bg-aviation-grey-50 p-6 rounded-lg">
                <p className="text-aviation-grey-700"><strong>Visskan Aviation Pvt. Ltd.</strong></p>
                <p className="text-aviation-grey-700">Email: privacy@visskanaviation.com</p>
                <p className="text-aviation-grey-700">Phone: +91-XXX-XXX-XXXX</p>
                <p className="text-aviation-grey-700">Address: [Company Address]</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">10. Changes to This Policy</h2>
              <p className="text-aviation-grey-700">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. 
                We will notify you of any material changes by posting the updated policy on our website and updating the 
                "Last Updated" date above.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 