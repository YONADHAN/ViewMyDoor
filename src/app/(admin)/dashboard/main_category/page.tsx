'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

interface MainCategory {
  _id?: string
  name: string
  description: string
  status: 'Active' | 'Inactive'
  image?: string
}

const MainCategoryListPage = () => {
  const [mainCategories, setMainCategories] = useState<MainCategory[]>([])
  const router = useRouter()

  // Fetch all main categories
  const fetchCategories = async () => {
    try {
      // Uncomment when backend API is ready
      // const { data } = await axios.get('/api/main-category')

      const data = [
        {
          _id: '1',
          name: 'Top Products',
          description: 'Our best-selling PVC doors loved by customers.',
          status: 'Active',
          image: '/uploads/top-products.jpg',
        },
        {
          _id: '2',
          name: 'Latest',
          description: 'Newly added PVC door designs this month.',
          status: 'Active',
          image: '/uploads/latest.jpg',
        },
        {
          _id: '3',
          name: 'Trendy',
          description: 'Most popular styles currently trending.',
          status: 'Active',
          image: '/uploads/trendy.jpg',
        },
        {
          _id: '4',
          name: 'Recommended',
          description: 'PVC doors recommended by our experts.',
          status: 'Active',
          image: '/uploads/recommended.jpg',
        },
        {
          _id: '5',
          name: 'Featured',
          description: 'Specially highlighted PVC doors for premium customers.',
          status: 'Active',
          image: '/uploads/featured.jpg',
        },
      ]

      setMainCategories(data)
    } catch (error) {
      console.error(error)
      toast.error('Failed to load categories')
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  // Handle delete
  const handleDelete = async (id?: string) => {
    if (!id) return
    if (!confirm('Are you sure you want to delete this category?')) return

    try {
      // Uncomment when backend is ready
      // await axios.delete(`/api/main-category/${id}`)
      toast.success('Category deleted successfully')
      setMainCategories((prev) => prev.filter((c) => c._id !== id))
    } catch {
      toast.error('Failed to delete category')
    }
  }

  return (
    <div className='p-8'>
      <div className='flex items-center justify-between mb-6'>
        <h1 className='text-2xl font-semibold'>Main Category List</h1>
        <Button onClick={() => router.push('/dashboard/main_category/add')}>
          + Add Category
        </Button>
      </div>

      {mainCategories.length === 0 ? (
        <p className='text-gray-500'>No categories found.</p>
      ) : (
        <div className='grid grid-cols-3 gap-4'>
          {mainCategories.map((cat) => (
            <div
              key={cat._id}
              className='p-4 border rounded-lg shadow-sm bg-gray-50 flex flex-col items-center'
            >
              <img
                src={cat.image || '/placeholder.jpg'}
                alt={cat.name}
                className='w-24 h-24 object-cover rounded mb-3'
              />
              <h3 className='font-bold text-lg'>{cat.name}</h3>
              <p className='text-sm text-gray-600 text-center mb-2'>
                {cat.description}
              </p>
              <p
                className={`text-xs mb-2 px-2 py-1 rounded ${
                  cat.status === 'Active' ? 'bg-green-200' : 'bg-red-200'
                }`}
              >
                {cat.status}
              </p>
              <div className='flex gap-2 mt-2'>
                <Button
                  size='sm'
                  variant='outline'
                  onClick={() =>
                    router.push(`/dashboard/main_category/${cat._id}/edit/`)
                  }
                >
                  Edit
                </Button>
                <Button
                  size='sm'
                  variant='default'
                  onClick={() => handleDelete(cat._id)}
                >
                  Block
                </Button>
                <Button
                  size='sm'
                  variant='destructive'
                  onClick={() => handleDelete(cat._id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MainCategoryListPage
