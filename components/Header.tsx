'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Presence', href: '/presence' },
  { name: 'Clients', href: '/clients' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Visshanaviation logo.svg"
            alt="Visskan Aviation Logo"
            width={50}
            height={50}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-aviation-grey-700 hover:text-aviation-blue-600 font-medium transition-colors duration-200 relative group"
            >
              {item.name}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-aviation-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
            </Link>
          ))}
          <Link href="/contact" className="btn-primary">
            Get Quote
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-md text-aviation-grey-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl lg:hidden"
            >
              <div className="flex items-center justify-between p-6 border-b">
                <span className="text-lg font-poppins font-bold text-aviation-grey-900">
                  Menu
                </span>
                <button
                  type="button"
                  className="p-2 rounded-md text-aviation-grey-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-3 text-aviation-grey-700 hover:text-aviation-blue-600 hover:bg-aviation-grey-50 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-6 pt-4">
                  <Link 
                    href="/contact" 
                    className="btn-primary w-full text-center block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
} 