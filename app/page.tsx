import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Visskan Aviation - Leading Ground Handling Services in India',
  description: 'Professional ground handling and aviation support services across major Indian airports.',
}

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-blue-900 mb-6">
          Visskan Aviation
        </h1>
        <p className="text-xl text-blue-700 mb-8">
          Leading Ground Handling Services in India
        </p>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-700">
            Professional ground handling and aviation support services across major Indian airports. 
            Trusted by airlines worldwide for safe, efficient operations.
          </p>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          Deployment Test - {new Date().toISOString()}
        </div>
      </div>
    </div>
  )
} 