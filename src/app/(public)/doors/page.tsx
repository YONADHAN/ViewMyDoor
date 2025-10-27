'use client'
import React, { useState, useEffect } from 'react'
import {
  Menu,
  X,
  Search,
  SlidersHorizontal,
  Grid3x3,
  List,
  Star,
  Heart,
  Share2,
  ShoppingCart,
  Phone,
  Eye,
  ChevronLeft,
  ChevronRight,
  Percent,
  Shield,
  Droplets,
  Flame,
  Lock,
  TrendingUp,
  Award,
} from 'lucide-react'

export default function PVCDoorSearch() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [viewMode, setViewMode] = useState('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilters, setShowFilters] = useState(true)
  const itemsPerPage = 9

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mock products data
  const allProducts = [
    {
      id: 1,
      name: 'Premium Teak Finish Door',
      category: 'Living Room',
      price: 12999,
      originalPrice: 15999,
      discount: 19,
      image:
        'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600&h=800&fit=crop',
      rating: 4.8,
      reviews: 124,
      finish: 'Teak',
      dimensions: '7ft x 3ft',
      thickness: '35mm',
      features: ['Waterproof', 'Termite-proof', 'UV Resistant'],
      inStock: true,
      badge: 'Bestseller',
      trending: true,
    },
    {
      id: 2,
      name: 'Modern Walnut Panel Door',
      category: 'Bedroom',
      price: 14999,
      originalPrice: 17999,
      discount: 17,
      image:
        'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&h=800&fit=crop',
      rating: 4.9,
      reviews: 89,
      finish: 'Walnut',
      dimensions: '7ft x 3ft',
      thickness: '38mm',
      features: ['Sound Insulation', 'Scratch Resistant', 'Premium Finish'],
      inStock: true,
      badge: 'New',
      trending: false,
    },
    {
      id: 3,
      name: 'Classic Oak Interior Door',
      category: 'Living Room',
      price: 11999,
      originalPrice: null,
      discount: 0,
      image:
        'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&h=800&fit=crop',
      rating: 4.7,
      reviews: 156,
      finish: 'Oak',
      dimensions: '7ft x 2.5ft',
      thickness: '32mm',
      features: ['Natural Look', 'Lightweight', 'Budget Friendly'],
      inStock: true,
      badge: null,
      trending: true,
    },
    {
      id: 4,
      name: 'Luxury Mahogany Door',
      category: 'Main Entrance',
      price: 18999,
      originalPrice: 22999,
      discount: 17,
      image:
        'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&h=800&fit=crop',
      rating: 5.0,
      reviews: 67,
      finish: 'Mahogany',
      dimensions: '7.5ft x 3.5ft',
      thickness: '42mm',
      features: ['Premium Hardware', 'Extra Security', 'Luxury Finish'],
      inStock: true,
      badge: 'Premium',
      trending: false,
    },
    {
      id: 5,
      name: 'MoistureSafe Bathroom Door',
      category: 'Bathroom',
      price: 9999,
      originalPrice: 11999,
      discount: 17,
      image:
        'https://images.unsplash.com/photo-1604076913837-52ab5629fba9?w=600&h=800&fit=crop',
      rating: 4.6,
      reviews: 203,
      finish: 'White Oak',
      dimensions: '7ft x 2.5ft',
      thickness: '32mm',
      features: ['100% Waterproof', 'Anti-Fungal', 'Easy Clean'],
      inStock: true,
      badge: 'Sale',
      trending: false,
    },
    {
      id: 6,
      name: 'Contemporary Ash Wood Door',
      category: 'Office',
      price: 13499,
      originalPrice: 15999,
      discount: 16,
      image:
        'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600&h=800&fit=crop',
      rating: 4.8,
      reviews: 92,
      finish: 'Ash',
      dimensions: '7ft x 3ft',
      thickness: '35mm',
      features: ['Professional Look', 'Noise Reduction', 'Durable'],
      inStock: true,
      badge: null,
      trending: true,
    },
    {
      id: 7,
      name: 'Rustic Pine Finish Door',
      category: 'Bedroom',
      price: 10999,
      originalPrice: 13499,
      discount: 19,
      image:
        'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=800&fit=crop',
      rating: 4.5,
      reviews: 178,
      finish: 'Pine',
      dimensions: '6.5ft x 2.5ft',
      thickness: '30mm',
      features: ['Rustic Charm', 'Lightweight', 'Cost Effective'],
      inStock: false,
      badge: null,
      trending: false,
    },
    {
      id: 8,
      name: 'Elite Cherry Wood Door',
      category: 'Main Entrance',
      price: 21999,
      originalPrice: 25999,
      discount: 15,
      image:
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=800&fit=crop',
      rating: 4.9,
      reviews: 45,
      finish: 'Cherry',
      dimensions: '8ft x 4ft',
      thickness: '45mm',
      features: ['Extra Thick', 'Premium Security', 'Lifetime Warranty'],
      inStock: true,
      badge: 'Premium',
      trending: true,
    },
    {
      id: 9,
      name: 'Minimalist White Door',
      category: 'Kitchen',
      price: 8999,
      originalPrice: 10999,
      discount: 18,
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=800&fit=crop',
      rating: 4.7,
      reviews: 134,
      finish: 'White',
      dimensions: '7ft x 2.5ft',
      thickness: '32mm',
      features: ['Modern Design', 'Easy Clean', 'Moisture Resistant'],
      inStock: true,
      badge: 'Bestseller',
      trending: false,
    },
    {
      id: 10,
      name: 'Urban Grey Panel Door',
      category: 'Office',
      price: 12499,
      originalPrice: null,
      discount: 0,
      image:
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=800&fit=crop',
      rating: 4.6,
      reviews: 88,
      finish: 'Grey',
      dimensions: '7ft x 3ft',
      thickness: '35mm',
      features: ['Contemporary', 'Scratch Resistant', 'Low Maintenance'],
      inStock: true,
      badge: 'New',
      trending: true,
    },
    {
      id: 11,
      name: 'Traditional Rosewood Door',
      category: 'Living Room',
      price: 16999,
      originalPrice: 19999,
      discount: 15,
      image:
        'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&h=800&fit=crop',
      rating: 4.8,
      reviews: 112,
      finish: 'Rosewood',
      dimensions: '7.5ft x 3ft',
      thickness: '38mm',
      features: ['Classic Design', 'Rich Texture', 'UV Protected'],
      inStock: true,
      badge: null,
      trending: false,
    },
    {
      id: 12,
      name: 'Modern Maple Sliding Door',
      category: 'Bedroom',
      price: 15999,
      originalPrice: 18999,
      discount: 16,
      image:
        'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=600&h=800&fit=crop',
      rating: 4.9,
      reviews: 76,
      finish: 'Maple',
      dimensions: '7ft x 3ft',
      thickness: '35mm',
      features: ['Space Saving', 'Smooth Sliding', 'Modern Hardware'],
      inStock: true,
      badge: 'Sale',
      trending: true,
    },
  ]

  const [filters, setFilters] = useState({
    category: [],
    finish: [],
    priceRange: 'all',
    rating: 0,
    inStock: false,
    discount: false,
    trending: false,
  })

  const [sortBy, setSortBy] = useState('popular')

  const categories = [
    'Living Room',
    'Bedroom',
    'Bathroom',
    'Main Entrance',
    'Kitchen',
    'Office',
  ]
  const finishes = [
    'Teak',
    'Walnut',
    'Oak',
    'Mahogany',
    'White Oak',
    'Ash',
    'Pine',
    'Cherry',
    'White',
    'Grey',
    'Rosewood',
    'Maple',
  ]
  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under ₹10,000', value: '0-10000' },
    { label: '₹10,000 - ₹15,000', value: '10000-15000' },
    { label: '₹15,000 - ₹20,000', value: '15000-20000' },
    { label: 'Above ₹20,000', value: '20000-999999' },
  ]

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => {
      if (filterType === 'category' || filterType === 'finish') {
        const currentValues = prev[filterType]
        const newValues = currentValues.includes(value)
          ? currentValues.filter((v) => v !== value)
          : [...currentValues, value]
        return { ...prev, [filterType]: newValues }
      }
      return { ...prev, [filterType]: value }
    })
    setCurrentPage(1)
  }

  const clearFilters = () => {
    setFilters({
      category: [],
      finish: [],
      priceRange: 'all',
      rating: 0,
      inStock: false,
      discount: false,
      trending: false,
    })
    setSearchQuery('')
  }

  let filteredProducts = allProducts.filter((product) => {
    if (
      searchQuery &&
      !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !product.category.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !product.finish.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    if (
      filters.category.length > 0 &&
      !filters.category.includes(product.category)
    ) {
      return false
    }

    if (filters.finish.length > 0 && !filters.finish.includes(product.finish)) {
      return false
    }

    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number)
      if (product.price < min || product.price > max) {
        return false
      }
    }

    if (filters.rating > 0 && product.rating < filters.rating) {
      return false
    }

    if (filters.inStock && !product.inStock) {
      return false
    }

    if (filters.discount && product.discount === 0) {
      return false
    }

    if (filters.trending && !product.trending) {
      return false
    }

    return true
  })

  filteredProducts.sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'discount':
        return b.discount - a.discount
      case 'newest':
        return b.id - a.id
      default:
        return b.reviews - a.reviews
    }
  })

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='min-h-screen bg-stone-50 text-stone-900'>
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'
        }`}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between'>
          <div className='text-2xl font-bold text-amber-800'>WoodLook PVC</div>

          <nav className='hidden md:flex items-center gap-8'>
            <a href='#' className='hover:text-amber-700 transition'>
              Home
            </a>
            <a href='#' className='hover:text-amber-700 transition'>
              Categories
            </a>
            <a
              href='#'
              className='hover:text-amber-700 transition font-semibold text-emerald-700'
            >
              Search
            </a>
            <a
              href='#'
              className='bg-emerald-700 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-800 transition'
            >
              Get Quote
            </a>
          </nav>

          <button
            className='md:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <div className='pt-24 pb-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
          {/* Search Bar & Controls */}
          <div className='bg-white rounded-xl shadow-md p-4 mb-6'>
            <div className='flex flex-col lg:flex-row gap-4 items-center'>
              <div className='flex-1 w-full relative'>
                <Search
                  className='absolute left-4 top-1/2 -translate-y-1/2 text-stone-400'
                  size={20}
                />
                <input
                  type='text'
                  placeholder='Search by name, category, or finish...'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='w-full pl-12 pr-4 py-3 border-2 border-stone-200 rounded-lg focus:border-emerald-500 focus:outline-none text-lg'
                />
              </div>

              <div className='flex items-center gap-2'>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className='lg:hidden flex items-center gap-2 px-4 py-3 bg-stone-100 rounded-lg hover:bg-stone-200 transition'
                >
                  <SlidersHorizontal size={20} />
                  Filters
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-lg transition ${
                    viewMode === 'grid'
                      ? 'bg-emerald-100 text-emerald-600'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  <Grid3x3 size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-lg transition ${
                    viewMode === 'list'
                      ? 'bg-emerald-100 text-emerald-600'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  <List size={20} />
                </button>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className='px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-emerald-500 focus:outline-none bg-white font-semibold cursor-pointer'
              >
                <option value='popular'>Sort by: Popular</option>
                <option value='price-low'>Price: Low to High</option>
                <option value='price-high'>Price: High to Low</option>
                <option value='rating'>Highest Rating</option>
                <option value='discount'>Best Discount</option>
                <option value='newest'>Newest First</option>
              </select>
            </div>
          </div>

          <main className='flex flex-col lg:flex-row gap-6'>
            {/* Sidebar Filters */}
            <aside
              className={`lg:w-80 shrink-0 ${
                showFilters ? 'block' : 'hidden lg:block'
              }`}
            >
              <div className='bg-white rounded-xl shadow-md p-6 sticky top-28'>
                <div className='flex items-center justify-between mb-6'>
                  <h3 className='font-bold text-xl flex items-center gap-2'>
                    <SlidersHorizontal size={22} className='text-emerald-600' />
                    Filters
                  </h3>
                  <button
                    onClick={clearFilters}
                    className='text-sm text-emerald-600 hover:text-emerald-700 font-semibold'
                  >
                    Clear All
                  </button>
                </div>

                <div className='space-y-6'>
                  {/* Category Filter */}
                  <div className='border-b border-stone-200 pb-6'>
                    <h4 className='font-semibold mb-3 text-stone-800'>
                      Category
                    </h4>
                    <div className='space-y-2 max-h-48 overflow-y-auto'>
                      {categories.map((category) => (
                        <label
                          key={category}
                          className='flex items-center gap-3 cursor-pointer hover:bg-stone-50 p-2 rounded-lg transition'
                        >
                          <input
                            type='checkbox'
                            checked={filters.category.includes(category)}
                            onChange={() =>
                              handleFilterChange('category', category)
                            }
                            className='w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500'
                          />
                          <span className='text-sm text-stone-700'>
                            {category}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Finish Filter */}
                  <div className='border-b border-stone-200 pb-6'>
                    <h4 className='font-semibold mb-3 text-stone-800'>
                      Finish Type
                    </h4>
                    <div className='space-y-2 max-h-48 overflow-y-auto'>
                      {finishes.map((finish) => (
                        <label
                          key={finish}
                          className='flex items-center gap-3 cursor-pointer hover:bg-stone-50 p-2 rounded-lg transition'
                        >
                          <input
                            type='checkbox'
                            checked={filters.finish.includes(finish)}
                            onChange={() =>
                              handleFilterChange('finish', finish)
                            }
                            className='w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500'
                          />
                          <span className='text-sm text-stone-700'>
                            {finish}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range Filter */}
                  <div className='border-b border-stone-200 pb-6'>
                    <h4 className='font-semibold mb-3 text-stone-800'>
                      Price Range
                    </h4>
                    <div className='space-y-2'>
                      {priceRanges.map((range) => (
                        <label
                          key={range.value}
                          className='flex items-center gap-3 cursor-pointer hover:bg-stone-50 p-2 rounded-lg transition'
                        >
                          <input
                            type='radio'
                            name='priceRange'
                            checked={filters.priceRange === range.value}
                            onChange={() =>
                              handleFilterChange('priceRange', range.value)
                            }
                            className='w-4 h-4 text-emerald-600 focus:ring-emerald-500'
                          />
                          <span className='text-sm text-stone-700'>
                            {range.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Rating Filter */}
                  <div className='border-b border-stone-200 pb-6'>
                    <h4 className='font-semibold mb-3 text-stone-800'>
                      Minimum Rating
                    </h4>
                    <div className='space-y-2'>
                      {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                        <label
                          key={rating}
                          className='flex items-center gap-3 cursor-pointer hover:bg-stone-50 p-2 rounded-lg transition'
                        >
                          <input
                            type='radio'
                            name='rating'
                            checked={filters.rating === rating}
                            onChange={() =>
                              handleFilterChange('rating', rating)
                            }
                            className='w-4 h-4 text-emerald-600 focus:ring-emerald-500'
                          />
                          <div className='flex items-center gap-1'>
                            <Star className='w-4 h-4 text-amber-500 fill-amber-500' />
                            <span className='text-sm text-stone-700'>
                              {rating} & above
                            </span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Quick Filters */}
                  <div>
                    <h4 className='font-semibold mb-3 text-stone-800'>
                      Quick Filters
                    </h4>
                    <div className='space-y-2'>
                      <label className='flex items-center gap-3 cursor-pointer hover:bg-stone-50 p-2 rounded-lg transition'>
                        <input
                          type='checkbox'
                          checked={filters.inStock}
                          onChange={() =>
                            handleFilterChange('inStock', !filters.inStock)
                          }
                          className='w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500'
                        />
                        <span className='text-sm text-stone-700'>
                          In Stock Only
                        </span>
                      </label>
                      <label className='flex items-center gap-3 cursor-pointer hover:bg-stone-50 p-2 rounded-lg transition'>
                        <input
                          type='checkbox'
                          checked={filters.discount}
                          onChange={() =>
                            handleFilterChange('discount', !filters.discount)
                          }
                          className='w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500'
                        />
                        <span className='text-sm text-stone-700 flex items-center gap-2'>
                          <Percent size={14} className='text-red-500' /> On
                          Discount
                        </span>
                      </label>
                      <label className='flex items-center gap-3 cursor-pointer hover:bg-stone-50 p-2 rounded-lg transition'>
                        <input
                          type='checkbox'
                          checked={filters.trending}
                          onChange={() =>
                            handleFilterChange('trending', !filters.trending)
                          }
                          className='w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500'
                        />
                        <span className='text-sm text-stone-700 flex items-center gap-2'>
                          <TrendingUp size={14} className='text-emerald-500' />{' '}
                          Trending
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className='flex-1'>
              <div className='mb-6 flex items-center justify-between'>
                <p className='text-stone-600'>
                  Showing{' '}
                  <span className='font-semibold text-stone-900'>
                    {startIndex + 1}-
                    {Math.min(
                      startIndex + itemsPerPage,
                      filteredProducts.length
                    )}
                  </span>{' '}
                  of{' '}
                  <span className='font-semibold text-stone-900'>
                    {filteredProducts.length}
                  </span>{' '}
                  products
                </p>
                {(filters.category.length > 0 ||
                  filters.finish.length > 0 ||
                  filters.priceRange !== 'all' ||
                  searchQuery) && (
                  <button
                    onClick={clearFilters}
                    className='text-sm text-emerald-600 hover:text-emerald-700 font-semibold flex items-center gap-2'
                  >
                    <X size={16} /> Clear Filters
                  </button>
                )}
              </div>

              {paginatedProducts.length === 0 ? (
                <div className='bg-white rounded-xl p-12 text-center'>
                  <div className='text-6xl mb-4'>🔍</div>
                  <h2 className='text-2xl font-bold mb-2'>No products found</h2>
                  <p className='text-stone-600 mb-6'>
                    Try adjusting your filters or search query
                  </p>
                  <button
                    onClick={clearFilters}
                    className='bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition'
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                <div
                  className={
                    viewMode === 'grid'
                      ? 'grid md:grid-cols-2 xl:grid-cols-3 gap-6'
                      : 'space-y-6'
                  }
                >
                  {paginatedProducts.map((product) => (
                    <div
                      key={product.id}
                      className={`group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 ${
                        viewMode === 'list' ? 'flex' : ''
                      } ${!product.inStock ? 'opacity-75' : ''}`}
                    >
                      <div
                        className={`relative ${
                          viewMode === 'list' ? 'w-64 shrink-0' : 'aspect-[3/4]'
                        } overflow-hidden`}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className='w-full h-full object-cover group-hover:scale-110 transition duration-500'
                        />

                        <div className='absolute top-3 left-3 flex flex-col gap-2'>
                          {product.badge && (
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-bold ${
                                product.badge === 'Bestseller'
                                  ? 'bg-amber-500 text-white'
                                  : product.badge === 'New'
                                  ? 'bg-blue-500 text-white'
                                  : product.badge === 'Premium'
                                  ? 'bg-purple-500 text-white'
                                  : 'bg-red-500 text-white'
                              }`}
                            >
                              {product.badge}
                            </span>
                          )}
                          {product.discount > 0 && (
                            <span className='bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1'>
                              <Percent size={12} /> {product.discount}% OFF
                            </span>
                          )}
                          {product.trending && (
                            <span className='bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1'>
                              <TrendingUp size={12} /> Trending
                            </span>
                          )}
                        </div>

                        <div className='absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                          <button className='bg-white/90 backdrop-blur-sm p-2.5 rounded-full hover:bg-white transition shadow-lg'>
                            <Heart
                              size={18}
                              className='text-stone-700 hover:text-red-500 transition'
                            />
                          </button>
                          <button className='bg-white/90 backdrop-blur-sm p-2.5 rounded-full hover:bg-white transition shadow-lg'>
                            <Share2 size={18} className='text-stone-700' />
                          </button>
                        </div>

                        {!product.inStock && (
                          <div className='absolute inset-0 bg-black/50 flex items-center justify-center'>
                            <span className='bg-white text-stone-900 px-4 py-2 rounded-lg font-bold'>
                              Out of Stock
                            </span>
                          </div>
                        )}
                      </div>

                      <div className='p-5 flex-1 flex flex-col'>
                        <div className='mb-2'>
                          <span className='text-xs text-emerald-600 font-semibold uppercase tracking-wide'>
                            {product.category}
                          </span>
                        </div>

                        <h3 className='font-bold text-lg mb-2 text-stone-900 group-hover:text-emerald-700 transition line-clamp-2'>
                          {product.name}
                        </h3>

                        <div className='flex items-center gap-2 mb-3'>
                          <div className='flex items-center gap-1'>
                            <Star className='w-4 h-4 text-yellow-400' />
                            <span className='text-sm font-medium text-stone-700'>
                              {product.rating}
                            </span>
                          </div>
                          <span className='text-xs text-stone-500'>
                            ({product.reviews} reviews)
                          </span>
                        </div>

                        <div className='mt-auto'>
                          <div className='flex items-center justify-between'>
                            <div>
                              {product.discount > 0 ? (
                                <div className='flex items-center gap-2'>
                                  <span className='text-lg font-bold text-emerald-600'>
                                    ₹
                                    {(
                                      product.price -
                                      (product.price * product.discount) / 100
                                    ).toFixed(0)}
                                  </span>
                                  <span className='text-sm text-stone-400 line-through'>
                                    ₹{product.price}
                                  </span>
                                </div>
                              ) : (
                                <span className='text-lg font-bold text-emerald-600'>
                                  ₹{product.price}
                                </span>
                              )}
                            </div>

                            <button className='bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition'>
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
