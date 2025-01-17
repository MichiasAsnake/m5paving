'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const services = [
  {
    title: 'Asphalt Paving',
    description: 'Professional asphalt paving services for driveways, parking lots, and roads.',
    image: 'https://images.unsplash.com/photo-1617973059591-c4aa14f4c88a?w=800&auto=format'
  },
  {
    title: 'Concrete Work',
    description: 'Expert concrete installation and repair for sidewalks, patios, and foundations.',
    image: 'https://images.unsplash.com/photo-1578575737417-7f4c6c7012cc?w=800&auto=format'
  },
  {
    title: 'Sealcoating',
    description: 'Protect and extend the life of your asphalt with our professional sealcoating.',
    image: 'https://images.unsplash.com/photo-1584463623578-44c729e46e88?w=800&auto=format'
  }
]

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=1600&auto=format"
              alt="Concrete Driveway"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Hero Content */}
          <div className="relative container mx-auto px-4 h-screen flex flex-col justify-center text-center text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-5xl mx-auto"
            >
              Trusted Concrete Company
              <br />
              in Loveland, CO and
              <br />
              surrounding areas
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl mb-8"
            >
              | PATIOS | DRIVEWAYS | WALKWAYS |
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
            >
              <Link 
                href="#quote"
                className="bg-red-600 text-white px-8 py-3 rounded-sm text-lg font-semibold 
                hover:bg-red-700 transition-colors inline-block"
              >
                SCHEDULE A QUOTE
              </Link>
              <Link 
                href="#pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-sm text-lg 
                font-semibold hover:bg-white/10 transition-colors inline-block"
              >
                CONCRETE PRICING GUIDE
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features Cards Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 shadow-lg flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6">
                  <svg className="w-full h-full text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">TRUSTED COMPANY</h3>
                <p className="text-gray-600">
                  With over 25 years in concrete work, Cesar will be able to make sure your project is built to last.
                </p>
              </div>

              <div className="bg-white p-8 shadow-lg flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6">
                  <svg className="w-full h-full text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">OUR SERVICES</h3>
                <p className="text-gray-600">
                  We provide a wide range of concrete flatwork services for both residential & commercial clients.
                </p>
              </div>

              <div className="bg-white p-8 shadow-lg flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6">
                  <svg className="w-full h-full text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">AREAS WE SERVE</h3>
                <p className="text-gray-600">
                  We proudly serve all areas across Northern Colorado. Let us know where you're located!
                </p>
              </div>

              <div className="bg-white p-8 shadow-lg flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6">
                  <svg className="w-full h-full text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">CONTACT US</h3>
                <p className="text-gray-600">
                  Contact us at any time for a free quote or suggestions on how to handle your next concrete project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Northern Colorado Concrete Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Side - Image */}
              <div className="relative h-[400px] bg-red-600">
                <Image
                  src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&auto=format"
                  alt="Concrete Steps"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right Side - Content */}
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-6">
                  NORTHERN COLORADO
                  <br />
                  CONCRETE COMPANY
                </h2>
                <h3 className="text-red-600 text-xl font-semibold mb-6">
                  CESAR'S COLORADO CONCRETE SOLUTIONS
                </h3>
                <p className="text-gray-700 mb-6">
                  Gentle sunlight flickers through the leaves of the plains cottonwood 
                  in your backyard. The sweet smell of BBQ smoke hangs thick in the 
                  air, the chicken legs sizzling on the grill are drowned out by the song 
                  of a distant red-winged blackbird. It's a typical Colorado day in the 
                  summer, with temperatures in the low 80s and not a cloud in the 
                  sky. Hungry guests and family members are gathered in the living 
                  room, and you wish you had a better space for them outside.
                </p>
                <p className="text-gray-700">
                  It isn't difficult to transform your outdoor space into a fantastic 
                  living space; all you really need is a grill, some patio furniture, and a 
                  place to put everything. Extending your indoor space to the 
                  backyard starts with the <span className="text-red-600">perfect concrete patio</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Residential and Commercial Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&auto=format"
              alt="Modern House Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-white/90" />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                RESIDENTIAL AND COMMERCIAL
                <br />
                CONCRETE COMPANY
              </h2>
              <p className="text-gray-700 max-w-4xl mx-auto">
                Concrete can upgrade your home or business in so many ways. A sturdy driveway, a beautiful patio, or a 
                custom design can add both function and style to your property. At Cesar's Concrete, we're here to make it 
                happen for you!
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Driveway Installation */}
              <div className="relative group">
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format"
                    alt="Driveway Installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-white p-6 text-center">
                  <h3 className="text-xl font-bold">DRIVEWAY INSTALLATION &</h3>
                  <h3 className="text-xl font-bold">REPAIR</h3>
                </div>
              </div>

              {/* Stamped & Colored Concrete */}
              <div className="relative group">
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1604169859836-4415d5bfad91?w=800&auto=format"
                    alt="Stamped & Colored Concrete"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-white p-6 text-center">
                  <h3 className="text-xl font-bold">STAMPED & COLORED</h3>
                  <h3 className="text-xl font-bold">CONCRETE</h3>
                </div>
              </div>

              {/* Concrete Patio Designs */}
              <div className="relative group">
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1597294303708-b920751015bc?w=800&auto=format"
                    alt="Concrete Patio Designs"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-white p-6 text-center">
                  <h3 className="text-xl font-bold">CONCRETE PATIO DESIGNS</h3>
                </div>
              </div>

              {/* Additional Images */}
              <div className="relative group">
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1604167504016-6d7b03b016ee?w=800&auto=format"
                    alt="Additional Concrete Work"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="relative group">
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1578575737417-7f4c6c7012cc?w=800&auto=format"
                    alt="More Concrete Services"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="relative group">
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1584463623578-44c729e46e88?w=800&auto=format"
                    alt="Concrete Solutions"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Professional paving and concrete services for residential and commercial properties
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link 
                      href="#quote" 
                      className="text-red-600 font-semibold hover:text-red-700"
                    >
                      Learn more →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[500px]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&auto=format"
                  alt="M5 Paving Team"
                  fill
                  className="object-cover rounded-lg"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-bold">About M5 Paving</h2>
                <p className="text-xl text-gray-600">
                  With over 20 years of experience in the paving industry, M5 Paving has established 
                  itself as the leading asphalt and concrete contractor in the North Denver Metro area.
                </p>
                <p className="text-gray-600">
                  Our commitment to quality workmanship, attention to detail, and exceptional customer 
                  service has earned us a reputation as the most trusted paving company in the region.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-red-600">20+</h3>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-red-600">1000+</h3>
                    <p className="text-gray-600">Projects Completed</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-red-600">100%</h3>
                    <p className="text-gray-600">Satisfaction Rate</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-red-600">24/7</h3>
                    <p className="text-gray-600">Customer Support</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our satisfied customers have to say.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-8 rounded-lg shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M18 6.59V1h-4.59l-3 3H6.59l-3-3H0v5.59l3 3v5.82l-3 3V19h4.59l3-3h3.82l3 3H19v-4.59l-3-3V9.59l3-3zM8 14H6v-4h2v4zm4 0h-2v-4h2v4z"/>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold">John Doe</h3>
                      <p className="text-gray-600">Homeowner</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "M5 Paving did an amazing job on our driveway. The team was professional, 
                    efficient, and the quality of work exceeded our expectations."
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section id="quote" className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6">Get Your Free Quote Today</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you with a detailed quote 
                  for your project. We serve the entire North Denver Metro area.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold">Professional Service</h3>
                      <p className="text-gray-600">Expert contractors with years of experience</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold">Quick Response</h3>
                      <p className="text-gray-600">Fast quotes and project turnaround</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold">Quality Guaranteed</h3>
                      <p className="text-gray-600">Satisfaction guaranteed on every project</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <form 
                  action="/api/submit-quote" 
                  method="POST"
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // You'll need to implement the form submission handler
                    alert('Thank you for your inquiry! We will contact you shortly.');
                  }}
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                      required
                      minLength={2}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number*</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                      required
                      pattern="[0-9]{3}[-. ]?[0-9]{3}[-. ]?[0-9]{4}"
                      title="Please enter a valid phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Project Details*</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                      required
                      minLength={10}
                    ></textarea>
                  </div>
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                      required
                    />
                    <label htmlFor="consent" className="ml-2 block text-sm text-gray-600">
                      By checking this box, you agree to receive promotional and informational messages from us. 
                      You can opt out at any time. *
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-red-700 
                    transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Get Your Free Quote
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
