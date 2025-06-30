import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - Visskan Aviation',
  description: 'Visskan Aviation Cookie Policy - Information about how we use cookies and similar technologies on our website.',
  robots: { index: true, follow: true },
}

export default function CookiePolicy() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-primary text-center mb-12">
            Cookie <span className="text-gradient">Policy</span>
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-aviation-grey-600 mb-8">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">1. What Are Cookies?</h2>
              <p className="text-aviation-grey-700 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
              <p className="text-aviation-grey-700">
                Visskan Aviation uses cookies to enhance your browsing experience, analyze website performance, and provide 
                personalized content related to our aviation ground handling services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">2. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-aviation-grey-900 mb-4">2.1 Essential Cookies</h3>
              <p className="text-aviation-grey-700 mb-4">
                These cookies are necessary for the website to function properly. They enable basic functions such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-aviation-grey-700 mb-6">
                <li>Page navigation and access to secure areas</li>
                <li>Session management for service requests</li>
                <li>Security features and authentication</li>
                <li>Form submission and data validation</li>
              </ul>

              <h3 className="text-xl font-semibold text-aviation-grey-900 mb-4">2.2 Performance Cookies</h3>
              <p className="text-aviation-grey-700 mb-4">
                These cookies collect information about how you use our website, helping us improve performance:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-aviation-grey-700 mb-6">
                <li>Page load times and site performance metrics</li>
                <li>Most visited pages and popular content</li>
                <li>Error tracking and debugging information</li>
                <li>User interaction patterns</li>
              </ul>

              <h3 className="text-xl font-semibold text-aviation-grey-900 mb-4">2.3 Functional Cookies</h3>
              <p className="text-aviation-grey-700 mb-4">
                These cookies enable enhanced functionality and personalization:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-aviation-grey-700 mb-6">
                <li>Language and region preferences</li>
                <li>User interface customizations</li>
                <li>Remembered form data</li>
                <li>Display preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-aviation-grey-900 mb-4">2.4 Analytics Cookies</h3>
              <p className="text-aviation-grey-700 mb-4">
                We use analytics cookies to understand how visitors interact with our website:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-aviation-grey-700">
                <li>Google Analytics for website traffic analysis</li>
                <li>User behavior tracking and heatmaps</li>
                <li>Conversion tracking for service inquiries</li>
                <li>A/B testing for website optimization</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">3. How We Use Cookies</h2>
              <p className="text-aviation-grey-700 mb-4">
                Visskan Aviation uses cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-aviation-grey-700">
                <li><strong>Website Functionality:</strong> To ensure our website works properly and securely</li>
                <li><strong>User Experience:</strong> To remember your preferences and customize your experience</li>
                <li><strong>Performance Monitoring:</strong> To analyze website performance and identify improvements</li>
                <li><strong>Service Enhancement:</strong> To understand how our aviation services are accessed and used</li>
                <li><strong>Security:</strong> To protect against fraud and ensure secure transactions</li>
                <li><strong>Communication:</strong> To enable contact forms and service request functionality</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">4. Third-Party Cookies</h2>
              <p className="text-aviation-grey-700 mb-4">
                We may also use third-party services that set cookies on our website:
              </p>
              
              <h3 className="text-xl font-semibold text-aviation-grey-900 mb-4">4.1 Google Analytics</h3>
              <p className="text-aviation-grey-700 mb-4">
                We use Google Analytics to analyze website traffic and user behavior. These cookies help us understand:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-aviation-grey-700 mb-6">
                <li>Number of visitors and page views</li>
                <li>Traffic sources and referral information</li>
                <li>User demographics and interests</li>
                <li>Website performance metrics</li>
              </ul>

              <h3 className="text-xl font-semibold text-aviation-grey-900 mb-4">4.2 Social Media Cookies</h3>
              <p className="text-aviation-grey-700 mb-4">
                If you share our content on social media platforms, they may set cookies to track engagement.
              </p>

              <h3 className="text-xl font-semibold text-aviation-grey-900 mb-4">4.3 Content Delivery Networks</h3>
              <p className="text-aviation-grey-700">
                We use CDNs to deliver website content efficiently, which may set performance-related cookies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">5. Managing Your Cookie Preferences</h2>
              
              <h3 className="text-xl font-semibold text-aviation-grey-900 mb-4">5.1 Browser Settings</h3>
              <p className="text-aviation-grey-700 mb-4">
                You can control cookies through your browser settings:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-aviation-grey-700 mb-6">
                <li><strong>Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies and other site data</li>
                <li><strong>Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies and website data</li>
                <li><strong>Edge:</strong> Settings &gt; Cookies and site permissions</li>
              </ul>

              <h3 className="text-xl font-semibold text-aviation-grey-900 mb-4">5.2 Opt-Out Options</h3>
              <p className="text-aviation-grey-700 mb-4">
                You can opt out of specific tracking:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-aviation-grey-700">
                <li><strong>Google Analytics:</strong> Use the Google Analytics Opt-out Browser Add-on</li>
                <li><strong>Advertising Cookies:</strong> Visit your browser's privacy settings</li>
                <li><strong>All Cookies:</strong> Block all cookies in your browser settings</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">6. Cookie Duration</h2>
              <p className="text-aviation-grey-700 mb-4">
                Cookies have different lifespans:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-aviation-grey-700">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for a set period (up to 2 years)</li>
                <li><strong>Analytics Cookies:</strong> Typically expire after 24 months</li>
                <li><strong>Functional Cookies:</strong> May persist for 1 year to remember your preferences</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">7. Impact of Disabling Cookies</h2>
              <p className="text-aviation-grey-700 mb-4">
                Disabling cookies may affect your website experience:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-aviation-grey-700">
                <li>Some website features may not function properly</li>
                <li>You may need to re-enter information on each visit</li>
                <li>Personalization features will be disabled</li>
                <li>Service request forms may not work correctly</li>
                <li>Website performance monitoring will be limited</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">8. Mobile Apps and Cookies</h2>
              <p className="text-aviation-grey-700">
                If you access our website through a mobile app or mobile browser, similar tracking technologies 
                may be used. You can manage these settings through your device's privacy controls.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">9. Updates to This Policy</h2>
              <p className="text-aviation-grey-700">
                We may update this Cookie Policy from time to time to reflect changes in our practices or 
                applicable laws. Any changes will be posted on this page with an updated "Last Updated" date.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">10. Contact Us</h2>
              <p className="text-aviation-grey-700 mb-4">
                If you have questions about our use of cookies or this policy, please contact us:
              </p>
              <div className="bg-aviation-grey-50 p-6 rounded-lg">
                <p className="text-aviation-grey-700"><strong>Visskan Aviation Pvt. Ltd.</strong></p>
                <p className="text-aviation-grey-700">Email: privacy@visskanaviation.com</p>
                <p className="text-aviation-grey-700">Phone: +91-XXX-XXX-XXXX</p>
                <p className="text-aviation-grey-700">Address: [Company Address]</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-aviation-grey-900 mb-6">11. Consent</h2>
              <p className="text-aviation-grey-700">
                By continuing to use our website, you consent to our use of cookies as described in this policy. 
                You can withdraw your consent at any time by adjusting your browser settings or contacting us directly.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 