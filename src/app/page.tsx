'use client'
import React, { useState, useEffect } from 'react'
import {
  Menu,
  X,
  ChevronRight,
  Star,
  Shield,
  Droplets,
  Leaf,
  Lock,
  Wrench,
  Check,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react'
import PublicNavbar from '@/components/layout/PublicNavbar'
export default function PVCDoorLanding() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const products = [
    {
      id: 1,
      name: 'Teak Wood-Finish PVC Door',
      description:
        'Warm teak grain finished surface with matte hardware. Ideal for living room entrances — aesthetic, sturdy, and fade-resistant.',
      image:
        'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600&h=800&fit=crop',
    },
    {
      id: 2,
      name: 'Walnut Modern Panel PVC Door',
      description:
        'Sleek walnut finish with horizontal grooves and concealed hinges. Great for modern condos and minimalist interiors.',
      image:
        'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&h=800&fit=crop',
    },
    {
      id: 3,
      name: 'MoistureSafe Bathroom PVC Door',
      description:
        'Engineered for wet areas — water resistant core with wood-look exterior. Perfect for bathrooms and laundry rooms.',
      image:
        'https://images.unsplash.com/photo-1604076913837-52ab5629fba9?w=600&h=800&fit=crop',
    },
  ]

  const features = [
    {
      icon: Leaf,
      title: 'Real Wood-Look Finishes',
      desc: 'Teak • Walnut • Oak',
    },
    {
      icon: Droplets,
      title: 'Waterproof & Termite-Proof',
      desc: "Built for Kerala's climate",
    },
    {
      icon: Shield,
      title: 'Zero Maintenance',
      desc: 'No polishing or repainting',
    },
    {
      icon: Wrench,
      title: 'Precision Installation',
      desc: 'Silent hinges & secure fit',
    },
    { icon: Lock, title: 'Secure Locking', desc: 'Advanced security systems' },
    { icon: Leaf, title: 'Eco-Friendly', desc: 'Recyclable materials' },
  ]

  const testimonials = [
    {
      text: 'Our new PVC door looks like real wood — zero maintenance and the finish is flawless.',
      author: 'Asha K.',
      location: 'Kochi',
      rating: 5,
    },
    {
      text: 'Perfect for our coastal home. No warping, no termites. Best investment we made!',
      author: 'Rajesh M.',
      location: 'Ernakulam',
      rating: 5,
    },
    {
      text: 'The installation was seamless and the quality exceeded our expectations.',
      author: 'Priya S.',
      location: 'Thrissur',
      rating: 5,
    },
  ]

  const comparisons = [
    {
      problem: 'Warps & swells in humidity',
      solution: 'Waterproof & stable',
      icon: Droplets,
    },
    {
      problem: 'Termites & rot damage',
      solution: 'Termite-proof forever',
      icon: Shield,
    },
    {
      problem: 'Needs polish & paint',
      solution: 'Wipe-clean, no maintenance',
      icon: Check,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='min-h-screen bg-stone-50 text-stone-900'>
      {/* Header */}

      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-stone-100 to-emerald-50'>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 py-32 text-center'>
          <div className='inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 text-sm'>
            <Star className='w-4 h-4 text-amber-500 fill-amber-500' />
            <span className='font-medium'>
              5,000+ Installations • 4.9★ Rating
            </span>
          </div>

          <h1 className='text-5xl md:text-7xl font-bold mb-6 text-stone-900'>
            Wooden Look.
            <br />
            <span className='text-emerald-700'>PVC Strength.</span>
          </h1>

          <p className='text-xl md:text-2xl text-stone-700 mb-10 max-w-3xl mx-auto'>
            Get the warmth of wood with the durability of premium PVC — stylish,
            waterproof, and maintenance-free doors for modern homes.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='#contact'
              className='bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-800 transition shadow-lg'
            >
              Search Your Doors
            </a>
            <a
              href='#products'
              className='bg-white text-stone-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-stone-100 transition border-2 border-stone-200'
            >
              See Door Styles
            </a>
          </div>

          <div className='mt-12 text-sm text-stone-600'>
            Free measurement & installation across Kochi, Ernakulam and nearby
            regions
          </div>
        </div>
      </section>

      {/* Problem-Solution Strip */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
          <div className='grid md:grid-cols-3 gap-8'>
            {comparisons.map((item, index) => (
              <div
                key={index}
                className='text-center p-6 rounded-xl bg-stone-50 hover:shadow-lg transition'
              >
                <item.icon className='w-12 h-12 mx-auto mb-4 text-emerald-600' />
                <div className='text-stone-500 line-through mb-2'>
                  {item.problem}
                </div>
                <div className='text-emerald-700 font-semibold text-lg flex items-center justify-center gap-2'>
                  <Check className='w-5 h-5' />
                  {item.solution}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id='products' className='py-20 bg-stone-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Our Premium Collection
            </h2>
            <p className='text-xl text-stone-600'>
              Choose the perfect finish for your home
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {products.map((product) => (
              <div
                key={product.id}
                className='bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group'
              >
                <div className='aspect-[3/4] overflow-hidden'>
                  <img
                    src={product.image}
                    alt={product.name}
                    className='w-full h-full object-cover group-hover:scale-105 transition duration-500'
                  />
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-bold mb-3'>{product.name}</h3>
                  <p className='text-stone-600 mb-4'>{product.description}</p>
                  <button className='text-emerald-700 font-semibold flex items-center gap-2 hover:gap-3 transition-all'>
                    View Details <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Proof Section */}
      <section className='py-20 bg-gradient-to-r from-amber-900 to-stone-900 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                Feel the Difference
              </h2>
              <p className='text-xl text-stone-200 mb-8'>
                Our premium PVC captures authentic wood grain textures with
                advanced embossing — indistinguishable from real wood, but
                engineered to last.
              </p>
              <div className='flex flex-wrap gap-4'>
                <span className='bg-white/10 px-4 py-2 rounded-full'>
                  UV-Resistant
                </span>
                <span className='bg-white/10 px-4 py-2 rounded-full'>
                  Fade-Proof
                </span>
                <span className='bg-white/10 px-4 py-2 rounded-full'>
                  Scratch-Resistant
                </span>
              </div>
            </div>
            <div className='rounded-2xl overflow-hidden shadow-2xl'>
              <img
                src='https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800&h=600&fit=crop'
                alt='Wood grain texture detail'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id='features' className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Why Choose PVC Doors?
            </h2>
            <p className='text-xl text-stone-600'>
              Engineered for modern living
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='p-8 rounded-xl bg-stone-50 hover:bg-emerald-50 transition group'
              >
                <feature.icon className='w-12 h-12 mb-4 text-emerald-600 group-hover:scale-110 transition' />
                <h3 className='text-xl font-bold mb-2'>{feature.title}</h3>
                <p className='text-stone-600'>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id='testimonials' className='py-20 bg-stone-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 text-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            What Our Customers Say
          </h2>
          <p className='text-xl text-stone-600 mb-12'>
            Join thousands of happy homeowners
          </p>

          <div className='bg-white rounded-2xl p-8 md:p-12 shadow-lg'>
            <div className='flex justify-center mb-4'>
              {[...Array(testimonials[activeTestimonial].rating)].map(
                (_, i) => (
                  <Star
                    key={i}
                    className='w-6 h-6 text-amber-500 fill-amber-500'
                  />
                )
              )}
            </div>
            <p className='text-2xl text-stone-700 mb-6 italic'>
              &quot;{testimonials[activeTestimonial].text}&quot;
            </p>
            <p className='font-semibold text-lg'>
              — {testimonials[activeTestimonial].author},{' '}
              {testimonials[activeTestimonial].location}
            </p>
          </div>

          <div className='flex justify-center gap-2 mt-8'>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition ${
                  activeTestimonial === index
                    ? 'bg-emerald-600 w-8'
                    : 'bg-stone-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        id='contact'
        className='py-20 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white'
      >
        <div className='max-w-4xl mx-auto px-4 sm:px-6 text-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            Ready to Upgrade Your Home?
          </h2>
          <p className='text-xl mb-8 text-emerald-100'>
            Free measurement & installation across Kochi, Ernakulam and nearby
            regions
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
            <a
              href='tel:+919876543210'
              className='bg-white text-emerald-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-stone-100 transition flex items-center justify-center gap-2'
            >
              <Phone size={20} /> Call Now
            </a>
            <a
              href='https://wa.me/919876543210'
              className='bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-500 transition'
            >
              WhatsApp Us
            </a>
          </div>

          <div className='flex flex-col md:flex-row gap-6 justify-center text-emerald-100'>
            <div className='flex items-center gap-2 justify-center'>
              <Phone size={18} /> +91 98765 43210
            </div>
            <div className='flex items-center gap-2 justify-center'>
              <Mail size={18} /> info@woodlookpvc.com
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
