import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Gallery - Visskan Aviation | Ground Handling Operations',
  description: 'View our ground handling operations, facilities, and service excellence across major Indian airports.',
  openGraph: {
    title: 'Gallery - Visskan Aviation',
    description: 'View our ground handling operations and facilities across India.',
    images: ['/images/gallery-og.jpg'],
  },
}

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3',
    alt: 'Aircraft Ground Operations',
    category: 'Ground Handling'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3',
    alt: 'Airport Ground Support Equipment',
    category: 'Equipment'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?ixlib=rb-4.0.3',
    alt: 'Cargo Handling Operations',
    category: 'Cargo Handling'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3',
    alt: 'Aircraft Maintenance',
    category: 'Maintenance'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1583489542343-3ad0e0e4a4e0?ixlib=rb-4.0.3',
    alt: 'Passenger Services',
    category: 'Passenger Services'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3',
    alt: 'Airport Terminal Operations',
    category: 'Terminal Operations'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3',
    alt: 'Freight Forwarding',
    category: 'Freight'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3',
    alt: 'Training Programs',
    category: 'Training'
  }
]

const categories = ['All', 'Ground Handling', 'Cargo Handling', 'Equipment', 'Maintenance', 'Passenger Services', 'Terminal Operations', 'Freight', 'Training']

export default function Gallery() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-aviation py-20">
        <div className="absolute inset-0 bg-aviation-grey-900/80"></div>
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="heading-primary text-white mb-6">
            Operations <span className="text-gradient">Gallery</span>
          </h1>
          <p className="text-large text-aviation-grey-200 max-w-3xl mx-auto">
            Explore our comprehensive ground handling operations, state-of-the-art facilities, 
            and service excellence across major Indian airports.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-aviation-blue-600 text-aviation-blue-600 
                         hover:bg-aviation-blue-600 hover:text-white transition-colors duration-300
                         focus:bg-aviation-blue-600 focus:text-white"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl 
                          transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-square relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-aviation-grey-900/80 via-transparent 
                                 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium mb-1">{image.category}</p>
                      <p className="text-xs text-aviation-grey-300">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Operations Highlights */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-secondary mb-6">
                Excellence in <span className="text-gradient">Operations</span>
              </h2>
              <p className="text-large mb-8">
                Since 1999, Visskan Aviation has been delivering world-class ground handling and cargo handling 
                services across major Indian airports including Bangalore, Hyderabad, Chennai, and more.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-aviation-grey-50 rounded-lg">
                  <div className="text-3xl font-bold text-aviation-blue-600 mb-2">25+</div>
                  <div className="text-sm text-aviation-grey-600">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-aviation-grey-50 rounded-lg">
                  <div className="text-3xl font-bold text-aviation-blue-600 mb-2">10+</div>
                  <div className="text-sm text-aviation-grey-600">Airport Locations</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                alt="Visskan Aviation Operations"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 