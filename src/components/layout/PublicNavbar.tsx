'use client'
import React from 'react'
import { Menu, X, Phone } from 'lucide-react'

interface NavbarProps {
  isScrolled: boolean
  isMenuOpen: boolean
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PublicNavbar({
  isScrolled,
  isMenuOpen,
  setIsMenuOpen,
}: NavbarProps) {
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between '>
        <div className='text-2xl font-bold text-amber-800'>WoodLook PVC</div>

        {/* Desktop Menu */}
        <nav className='hidden md:flex items-center gap-8 text-black'>
          <a href='/doors' className='hover:text-amber-700 transition'>
            Find Your Doors
          </a>
          <a href='/category' className='hover:text-amber-700 transition'>
            Explore our Door Collections
          </a>
          <a
            href='#testimonials'
            className='hover:text-amber-700 transition flex place-items-center gap-1'
          >
            <Phone size={16} /> 9349474463
          </a>
          <a
            href='#contact'
            className='bg-emerald-700 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-800 transition'
          >
            Whatsapp Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-white border-t shadow-lg'>
          <nav className='flex flex-col p-4 gap-4'>
            <a
              href='/doors'
              className='hover:text-amber-700 transition'
              onClick={() => setIsMenuOpen(false)}
            >
              Find Your Doors
            </a>
            <a
              href='/category'
              className='hover:text-amber-700 transition'
              onClick={() => setIsMenuOpen(false)}
            >
              Explore our Door Collections
            </a>
            <a
              href='#testimonials'
              className='hover:text-amber-700 transition flex place-items-center gap-1'
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone size={16} /> 9349474463
            </a>
            <a
              href='#contact'
              className='bg-emerald-700 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-800 transition text-center'
              onClick={() => setIsMenuOpen(false)}
            >
              Whatsapp us
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
