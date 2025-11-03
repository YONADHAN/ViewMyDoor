'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface DoorCardProps {
  category: {
    name: string
    description: string
    image: string
    DoorsAvailable: number
    isActive: boolean
  }
  onClick: (data: any) => void
}

const DoorCard: React.FC<DoorCardProps> = ({ category, onClick }) => {
  return (
    <div className='flex flex-col items-center border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all bg-white'>
      {/* Door Image */}
      <div className='relative w-full h-72 bg-gray-100'>
        <Image
          src={category.image}
          alt={category.name}
          fill
          className='object-cover object-center'
        />
      </div>

      {/* Card Content */}
      <div className='w-full p-4 flex flex-col justify-between flex-1'>
        <div>
          <h2 className='text-lg font-semibold text-gray-800 mb-1'>
            {category.name}
          </h2>
          <p className='text-sm text-gray-600 line-clamp-2 mb-2'>
            {category.description}
          </p>

          <div className='flex items-center justify-between text-sm mt-2'>
            <span className='font-medium text-blue-600'>
              {category.DoorsAvailable} Doors
            </span>
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                category.isActive
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {category.isActive ? 'Active' : 'Inactive'}
            </span>
          </div>
        </div>

        {/* View More Button */}
        <div className='mt-4'>
          <Button
            variant='outline'
            className='w-full border-yellow-950 text-yellow-950 hover:bg-yellow-900 hover:border-none hover:text-white transition-all'
            onClick={() => onClick(category)} // ✅ Correct usage
          >
            Edit Category
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DoorCard
