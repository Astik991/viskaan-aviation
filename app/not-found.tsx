import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found | Visskan Aviation',
  description: 'The page you are looking for could not be found.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-aviation-grey-50 flex items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-aviation-blue-600">404</h1>
        </div>
        
        <h2 className="text-3xl font-bold text-aviation-grey-900 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-lg text-aviation-grey-600 mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block bg-aviation-blue-600 text-white px-8 py-3 rounded-lg 
                     hover:bg-aviation-blue-700 transition-colors duration-300 font-medium"
          >
            Go Home
          </Link>
          
          <div className="text-sm text-aviation-grey-500">
            <p>If you believe this is an error, please contact our support team.</p>
          </div>
        </div>
      </div>
    </div>
  )
} 