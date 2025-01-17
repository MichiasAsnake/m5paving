'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-sm">TOP CONCRETE SERVICE</div>
          <div className="flex items-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-red-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-red-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-red-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
              </svg>
            </a>
            <a href="https://yelp.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-red-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l3.206-4.712c.667-.98 2.143-.615 2.298.57l.397 3.042c.105.799-.73 1.297-1.73.997zm-7.025 1.728l4.942 1.606c.97.316 1.137 1.617.276 2.16l-2.634 1.66c-.757.477-1.76.09-1.897-.734l-.897-5.408c-.197-1.19 1.076-1.695 2.21-.884zm-.57-3.737l.86-5.413c.135-.824 1.14-1.21 1.896-.733l2.634 1.66c.86.542.694 1.843-.277 2.16l-4.942 1.605c-1.135.81-2.408-.305-2.21-1.495l.04-.784zm-1.724-.39L8.683 3.8c-.445-.962.37-1.99 1.276-1.616l3.733 1.544c.73.303.87 1.29.24 1.677l-4.652 2.558c-1.006.553-2.096-.273-1.74-1.468zm-1.723 3.475l-4.995-1.433c-1-.3-1.835.198-1.73.997l.397 3.042c.155 1.185 1.63 1.55 2.298.57L8.09 12.13c.565-.83-.217-1.907-1.177-1.63z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`bg-black text-white ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Contact Info */}
            <div className="text-xl font-bold">
              <a href="tel:(970) 420-9040" className="hover:text-red-600">(970) 420-9040</a>
            </div>

            {/* Logo */}
            <Link href="/" className="relative">
              <Image
                src="/logom5 1.png"
                alt="M5 Paving Logo"
                width={200}
                height={80}
                className="object-contain"
                priority
              />
            </Link>

            {/* CTA Button */}
            <Link 
              href="#quote"
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
            >
              REQUEST AN ESTIMATE
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex justify-center space-x-8 py-4">
            <Link href="/" className="hover:text-gray-200 transition-colors">HOME</Link>
            <Link href="#about" className="hover:text-gray-200 transition-colors">ABOUT</Link>
            <div className="relative group">
              <Link href="#services" className="hover:text-gray-200 transition-colors">
                RESIDENTIAL SERVICES
              </Link>
            </div>
            <div className="relative group">
              <Link href="#services" className="hover:text-gray-200 transition-colors">
                COMMERCIAL SERVICES
              </Link>
            </div>
            <Link href="#lighting" className="hover:text-gray-200 transition-colors">
              PERMANENT OUTDOOR LIGHTING
            </Link>
            <Link href="/blog" className="hover:text-gray-200 transition-colors">BLOG</Link>
            <Link href="/gallery" className="hover:text-gray-200 transition-colors">GALLERIES</Link>
            <Link href="/contact" className="hover:text-gray-200 transition-colors">CONTACT</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden py-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-red-600 text-white md:hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link href="/" className="block hover:text-gray-200">HOME</Link>
              <Link href="#about" className="block hover:text-gray-200">ABOUT</Link>
              <Link href="#services" className="block hover:text-gray-200">RESIDENTIAL SERVICES</Link>
              <Link href="#services" className="block hover:text-gray-200">COMMERCIAL SERVICES</Link>
              <Link href="#lighting" className="block hover:text-gray-200">PERMANENT OUTDOOR LIGHTING</Link>
              <Link href="/blog" className="block hover:text-gray-200">BLOG</Link>
              <Link href="/gallery" className="block hover:text-gray-200">GALLERIES</Link>
              <Link href="/contact" className="block hover:text-gray-200">CONTACT</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 