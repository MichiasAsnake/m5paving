"use client"

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Cesar's Concrete</h3>
            <p className="text-gray-400">
              Professional concrete services for residential and commercial properties 
              in Loveland and surrounding areas. Quality craftsmanship since 1998.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#quote" className="text-gray-400 hover:text-white transition-colors">
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Driveways
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Patios
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Walkways
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Commercial Concrete
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Loveland, Colorado</li>
              <li>
                <a href="tel:(970) 420-9040" className="hover:text-white transition-colors">
                  Phone: (970) 420-9040
                </a>
              </li>
              <li>
                <a href="mailto:info@cesarsconcrete.com" className="hover:text-white transition-colors">
                  Email: info@cesarsconcrete.com
                </a>
              </li>
              <li>Available 24/7 for emergencies</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Cesar's Concrete. All rights reserved.</p>
          <p className="mt-2 text-sm">Licensed and Insured</p>
        </div>
      </div>
    </footer>
  )
} 