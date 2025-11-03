'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import DoorCard from '@/components/resusableComponents/DoorCard'
import { useRouter } from 'next/navigation'
const Page = () => {
  const router = useRouter()
  const categoryList = [
    {
      id: '123',
      name: 'Bathroom Doors',
      DoorsAvailable: 34,
      description: 'Waterproof and durable doors ideal for bathroom areas.',
      image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11',
      isActive: true,
    },
    {
      id: '345',
      name: 'Bedroom Doors',
      DoorsAvailable: 28,
      description:
        'Elegant PVC doors that provide privacy and style for bedrooms.',
      image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11',
      isActive: true,
    },
    {
      id: '678',
      name: 'Kitchen Doors',
      DoorsAvailable: 22,
      description:
        'Heat-resistant and easy-to-clean PVC doors perfect for kitchens.',
      image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11',
      isActive: true,
    },
    {
      id: '901',
      name: 'Designer Doors',
      DoorsAvailable: 15,
      description:
        'Stylish and modern PVC doors with designer patterns and finishes.',
      image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11',
      isActive: true,
    },
    {
      id: '234',
      name: 'Office Doors',
      DoorsAvailable: 18,
      description:
        'Professional and noise-resistant PVC doors suited for offices.',
      image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11',
      isActive: true,
    },
  ]

  const handleAddCategory = () => {
    console.log('Add new category clicked')
  }

  const onClick = (category: any) => {
    router.push(`/dashboard/category/${category.id}/edit`)
  }

  return (
    <div className='p-6'>
      {/* Header */}
      <div className='flex items-center justify-between mb-6'>
        <h1 className='text-2xl font-bold text-gray-800'>Categories</h1>
        <Button
          onClick={handleAddCategory}
          className='flex items-center gap-2 bg-yellow-900 hover:bg-yellow-950'
        >
          <Plus size={18} />
          Add New Category
        </Button>
      </div>

      {/* Category Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {categoryList.map((category, index) => (
          <DoorCard key={index} category={category} onClick={onClick} />
        ))}
      </div>
    </div>
  )
}

export default Page
