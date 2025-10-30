import React from 'react'

const PublicFooter = () => {
  return (
    <div>
      {/* Footer */}
      <footer className='bg-stone-900 text-stone-300 py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
          <div className='grid md:grid-cols-4 gap-8 mb-8'>
            <div>
              <h3 className='text-white text-xl font-bold mb-4'>
                WoodLook PVC
              </h3>
              <p className='text-sm'>
                Premium PVC doors with authentic wood finishes for modern homes.
              </p>
            </div>
            <div>
              <h4 className='text-white font-semibold mb-4'>Products</h4>
              <ul className='space-y-2 text-sm'>
                <li>
                  <a href='#' className='hover:text-white transition'>
                    Teak Finish
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition'>
                    Walnut Finish
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition'>
                    Oak Finish
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-white font-semibold mb-4'>Company</h4>
              <ul className='space-y-2 text-sm'>
                <li>
                  <a href='#' className='hover:text-white transition'>
                    About Us
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition'>
                    Warranty
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition'>
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-white font-semibold mb-4'>Service Areas</h4>
              <ul className='space-y-2 text-sm'>
                <li>Kochi</li>
                <li>Ernakulam</li>
                <li>Thrissur</li>
                <li>Nearby Regions</li>
              </ul>
            </div>
          </div>
          <div className='border-t border-stone-700 pt-8 text-center text-sm'>
            <p>&copy; 2025 WoodLook PVC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PublicFooter
