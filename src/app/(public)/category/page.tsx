'use client'
import React, { useState, useEffect } from 'react'
import {
  Menu,
  X,
  ChevronRight,
  Star,
  Shield,
  Droplets,
  Home,
  Bath,
  Building2,
  DoorOpen,
  ArrowLeft,
  Heart,
  Share2,
  Ruler,
  Phone,
  CheckCircle,
  Filter,
  Grid3x3,
  List,
} from 'lucide-react'

export default function PVCDoorPages() {
  const [currentPage, setCurrentPage] = useState('category') // 'category' or 'product'
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  const [selectedFilter, setSelectedFilter] = useState('all')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Categories data - Admin would manage this
  const categories = [
    {
      id: 1,
      name: 'Living Room Doors',
      slug: 'living-room',
      icon: Home,
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      description: 'Elegant doors that make a statement in your living spaces',
      productCount: 12,
      featured: true,
      badge: 'Popular',
    },
    {
      id: 2,
      name: 'Bathroom Doors',
      slug: 'bathroom',
      icon: Bath,
      image:
        'https://images.unsplash.com/photo-1604076913837-52ab5629fba9?w=800&h=600&fit=crop',
      description: 'Waterproof doors designed for humid environments',
      productCount: 8,
      featured: true,
      badge: 'Waterproof',
    },
    {
      id: 3,
      name: 'Bedroom Doors',
      slug: 'bedroom',
      icon: DoorOpen,
      image:
        'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=600&fit=crop',
      description: 'Privacy-focused doors with sound insulation',
      productCount: 15,
      featured: false,
      badge: null,
    },
    {
      id: 4,
      name: 'Main Entrance Doors',
      slug: 'main-entrance',
      icon: Building2,
      image:
        'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&h=600&fit=crop',
      description: 'Heavy-duty security doors with premium finishes',
      productCount: 10,
      featured: true,
      badge: 'Premium',
    },
    {
      id: 5,
      name: 'Kitchen Doors',
      slug: 'kitchen',
      icon: Home,
      image:
        'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop',
      description: 'Easy-to-clean doors resistant to grease and moisture',
      productCount: 6,
      featured: false,
      badge: null,
    },
    {
      id: 6,
      name: 'Office Doors',
      slug: 'office',
      icon: Building2,
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      description: 'Professional doors for commercial and home offices',
      productCount: 9,
      featured: false,
      badge: null,
    },
  ]

  // Products data - Admin would manage this per category
  const products = [
    {
      id: 1,
      name: 'Premium Teak Finish Door',
      categoryId: 1,
      price: 12999,
      originalPrice: 15999,
      image:
        'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600&h=800&fit=crop',
      rating: 4.8,
      reviews: 124,
      finish: 'Teak',
      dimensions: '7ft x 3ft',
      thickness: '35mm',
      warranty: '10 Years',
      features: [
        'Waterproof',
        'Termite-proof',
        'UV Resistant',
        'Sound Insulation',
      ],
      inStock: true,
      badge: 'Bestseller',
    },
    {
      id: 2,
      name: 'Modern Walnut Panel Door',
      categoryId: 1,
      price: 14999,
      originalPrice: 17999,
      image:
        'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&h=800&fit=crop',
      rating: 4.9,
      reviews: 89,
      finish: 'Walnut',
      dimensions: '7ft x 3ft',
      thickness: '38mm',
      warranty: '10 Years',
      features: [
        'Premium Finish',
        'Scratch Resistant',
        'Modern Design',
        'Easy Clean',
      ],
      inStock: true,
      badge: 'New Arrival',
    },
    {
      id: 3,
      name: 'Classic Oak Interior Door',
      categoryId: 1,
      price: 11999,
      originalPrice: null,
      image:
        'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&h=800&fit=crop',
      rating: 4.7,
      reviews: 156,
      finish: 'Oak',
      dimensions: '7ft x 2.5ft',
      thickness: '32mm',
      warranty: '8 Years',
      features: ['Natural Look', 'Lightweight', 'Budget Friendly', 'Durable'],
      inStock: true,
      badge: null,
    },
    {
      id: 4,
      name: 'Luxury Mahogany Door',
      categoryId: 1,
      price: 18999,
      originalPrice: 22999,
      image:
        'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&h=800&fit=crop',
      rating: 5.0,
      reviews: 67,
      finish: 'Mahogany',
      dimensions: '7.5ft x 3.5ft',
      thickness: '42mm',
      warranty: '15 Years',
      features: [
        'Luxury Finish',
        'Extra Thick',
        'Premium Hardware',
        'Lifetime Support',
      ],
      inStock: true,
      badge: 'Premium',
    },
  ]

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
    setCurrentPage('product')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleProductClick = (product) => {
    setSelectedProduct(product)
  }

  const handleBackToCategories = () => {
    setCurrentPage('category')
    setSelectedCategory(null)
    setSelectedProduct(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.categoryId === selectedCategory.id)
    : products

  // Category Page Component
  const CategoryPage = () => (
    <div className='min-h-screen bg-stone-50'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-amber-50 via-stone-100 to-emerald-50 py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 text-center'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>
            Explore Our Door Collections
          </h1>
          <p className='text-xl text-stone-600 max-w-2xl mx-auto'>
            Discover premium PVC doors crafted for every room in your home.
            Choose from a wide range of styles, finishes, and designs.
          </p>
        </div>
      </section>

      {/* Featured Categories */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
          <div className='flex items-center justify-between mb-12'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-2'>
                Popular Categories
              </h2>
              <p className='text-stone-600'>Most loved by our customers</p>
            </div>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {categories
              .filter((cat) => cat.featured)
              .map((category) => (
                <div
                  key={category.id}
                  onClick={() => handleCategoryClick(category)}
                  className='group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2'
                >
                  {category.badge && (
                    <div className='absolute top-4 right-4 z-10 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                      {category.badge}
                    </div>
                  )}

                  <div className='aspect-[4/3] overflow-hidden'>
                    <img
                      src={category.image}
                      alt={category.name}
                      className='w-full h-full object-cover group-hover:scale-110 transition duration-500'
                    />
                  </div>

                  <div className='p-6'>
                    <div className='flex items-center gap-3 mb-3'>
                      <category.icon className='w-6 h-6 text-emerald-600' />
                      <h3 className='text-2xl font-bold'>{category.name}</h3>
                    </div>
                    <p className='text-stone-600 mb-4'>
                      {category.description}
                    </p>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm text-stone-500'>
                        {category.productCount} Products
                      </span>
                      <button className='text-emerald-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all'>
                        Browse <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* All Categories */}
      <section className='py-16 bg-stone-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
          <h2 className='text-3xl md:text-4xl font-bold mb-12'>
            All Categories
          </h2>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                className='group bg-white rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-emerald-500'
              >
                <div className='flex items-start gap-4'>
                  <div className='bg-emerald-50 p-3 rounded-lg group-hover:bg-emerald-100 transition'>
                    <category.icon className='w-8 h-8 text-emerald-600' />
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-xl font-bold mb-2 group-hover:text-emerald-700 transition'>
                      {category.name}
                    </h3>
                    <p className='text-stone-600 text-sm mb-3'>
                      {category.description}
                    </p>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm text-stone-500'>
                        {category.productCount} options
                      </span>
                      <ChevronRight className='w-5 h-5 text-emerald-600 group-hover:translate-x-1 transition' />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 text-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            Can't Find What You're Looking For?
          </h2>
          <p className='text-xl mb-8 text-emerald-100'>
            Our experts can help you choose the perfect door for your needs
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='tel:+919876543210'
              className='bg-white text-emerald-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-stone-100 transition flex items-center justify-center gap-2'
            >
              <Phone size={20} /> Talk to Expert
            </a>
            <button className='bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-500 transition'>
              Request Catalog
            </button>
          </div>
        </div>
      </section>
    </div>
  )

  // Product Listing Page Component
  const ProductPage = () => (
    <div className='min-h-screen bg-stone-50'>
      {/* Breadcrumb & Header */}
      <section className='bg-white border-b'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 py-6'>
          <button
            onClick={handleBackToCategories}
            className='flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-4 font-semibold'
          >
            <ArrowLeft size={20} /> Back to Categories
          </button>

          <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
            <div>
              <h1 className='text-3xl md:text-4xl font-bold mb-2'>
                {selectedCategory?.name}
              </h1>
              <p className='text-stone-600'>{selectedCategory?.description}</p>
            </div>
            <div className='flex items-center gap-4'>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${
                  viewMode === 'grid'
                    ? 'bg-emerald-100 text-emerald-600'
                    : 'bg-stone-100 text-stone-600'
                }`}
              >
                <Grid3x3 size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${
                  viewMode === 'list'
                    ? 'bg-emerald-100 text-emerald-600'
                    : 'bg-stone-100 text-stone-600'
                }`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className='py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
          <div className='flex flex-col lg:flex-row gap-8'>
            {/* Sidebar Filters */}
            <aside className='lg:w-64 shrink-0'>
              <div className='bg-white rounded-xl p-6 sticky top-24'>
                <h3 className='font-bold text-lg mb-4 flex items-center gap-2'>
                  <Filter size={20} /> Filters
                </h3>

                <div className='space-y-6'>
                  <div>
                    <h4 className='font-semibold mb-3'>Finish Type</h4>
                    <div className='space-y-2'>
                      {['Teak', 'Walnut', 'Oak', 'Mahogany'].map((finish) => (
                        <label
                          key={finish}
                          className='flex items-center gap-2 cursor-pointer'
                        >
                          <input
                            type='checkbox'
                            className='rounded text-emerald-600'
                          />
                          <span className='text-sm'>{finish}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className='font-semibold mb-3'>Price Range</h4>
                    <div className='space-y-2'>
                      {[
                        'Under ₹10,000',
                        '₹10,000 - ₹15,000',
                        '₹15,000 - ₹20,000',
                        'Above ₹20,000',
                      ].map((range) => (
                        <label
                          key={range}
                          className='flex items-center gap-2 cursor-pointer'
                        >
                          <input
                            type='checkbox'
                            className='rounded text-emerald-600'
                          />
                          <span className='text-sm'>{range}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className='font-semibold mb-3'>Features</h4>
                    <div className='space-y-2'>
                      {[
                        'Waterproof',
                        'Sound Insulation',
                        'UV Resistant',
                        'Premium Hardware',
                      ].map((feature) => (
                        <label
                          key={feature}
                          className='flex items-center gap-2 cursor-pointer'
                        >
                          <input
                            type='checkbox'
                            className='rounded text-emerald-600'
                          />
                          <span className='text-sm'>{feature}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <button className='w-full mt-6 bg-stone-100 text-stone-700 py-2 rounded-lg hover:bg-stone-200 transition text-sm font-semibold'>
                  Clear Filters
                </button>
              </div>
            </aside>

            {/* Product Grid */}
            <div className='flex-1'>
              <div className='flex items-center justify-between mb-6'>
                <p className='text-stone-600'>
                  {filteredProducts.length} products found
                </p>
                <select className='border border-stone-300 rounded-lg px-4 py-2 text-sm'>
                  <option>Sort by: Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                  <option>Rating</option>
                </select>
              </div>

              <div
                className={
                  viewMode === 'grid'
                    ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
                    : 'space-y-6'
                }
              >
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className={`group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                  >
                    {product.badge && (
                      <div className='absolute top-4 left-4 z-10 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold'>
                        {product.badge}
                      </div>
                    )}

                    <div
                      className={`relative ${
                        viewMode === 'list' ? 'w-64' : 'aspect-[3/4]'
                      } overflow-hidden`}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className='w-full h-full object-cover group-hover:scale-110 transition duration-500'
                      />
                      <div className='absolute top-4 right-4 flex gap-2'>
                        <button className='bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition'>
                          <Heart size={18} className='text-stone-700' />
                        </button>
                        <button className='bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition'>
                          <Share2 size={18} className='text-stone-700' />
                        </button>
                      </div>
                    </div>

                    <div className='p-6 flex-1'>
                      <div className='flex items-start justify-between mb-2'>
                        <h3 className='text-xl font-bold group-hover:text-emerald-700 transition'>
                          {product.name}
                        </h3>
                      </div>

                      <div className='flex items-center gap-2 mb-3'>
                        <div className='flex items-center gap-1'>
                          <Star className='w-4 h-4 text-amber-500 fill-amber-500' />
                          <span className='font-semibold text-sm'>
                            {product.rating}
                          </span>
                        </div>
                        <span className='text-stone-400 text-sm'>
                          ({product.reviews} reviews)
                        </span>
                      </div>

                      <div className='flex items-baseline gap-2 mb-4'>
                        <span className='text-2xl font-bold text-emerald-700'>
                          ₹{product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className='text-stone-400 line-through'>
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      <div className='grid grid-cols-2 gap-2 mb-4 text-sm'>
                        <div className='flex items-center gap-2 text-stone-600'>
                          <Ruler size={16} />
                          <span>{product.dimensions}</span>
                        </div>
                        <div className='flex items-center gap-2 text-stone-600'>
                          <Shield size={16} />
                          <span>{product.warranty}</span>
                        </div>
                      </div>

                      <div className='flex flex-wrap gap-2 mb-4'>
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className='text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full'
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className='flex gap-2'>
                        <button className='flex-1 bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition'>
                          View Details
                        </button>
                        <button className='bg-stone-100 text-stone-700 p-3 rounded-lg hover:bg-stone-200 transition'>
                          <Phone size={20} />
                        </button>
                      </div>

                      {product.inStock && (
                        <div className='flex items-center gap-2 mt-3 text-emerald-600 text-sm font-semibold'>
                          <CheckCircle size={16} />
                          In Stock
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

  return (
    <div className='min-h-screen bg-stone-50 text-stone-900'>
      <div className='pt-20'>
        {currentPage === 'category' ? <CategoryPage /> : <ProductPage />}
      </div>
    </div>
  )
}
