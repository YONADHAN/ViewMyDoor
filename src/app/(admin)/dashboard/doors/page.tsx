'use client'

import React, { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Edit, Eye, Trash, Ban } from 'lucide-react'

// 🔹 Replace this with your API call
// Example: const { data, isLoading } = useQuery(['doors'], fetchDoors)
const data = [
  {
    _id: '1',
    title: 'Classic Walnut Door',
    category: 'Bedroom',
    priceRange: '₹3,500 - ₹5,000',
    status: 'Active',
  },
  {
    _id: '2',
    title: 'Premium White PVC Door',
    category: 'Bathroom',
    priceRange: '₹2,800 - ₹4,200',
    status: 'Blocked',
  },
  {
    _id: '3',
    title: 'WPC Designer Door',
    category: 'Main Entrance',
    priceRange: '₹4,000 - ₹6,000',
    status: 'Active',
  },
]

const DoorListPage = () => {
  const [search, setSearch] = useState('')

  const filteredDoors = useMemo(() => {
    return data.filter(
      (door) =>
        door.title.toLowerCase().includes(search.toLowerCase()) ||
        door.category.toLowerCase().includes(search.toLowerCase())
    )
  }, [search])

  return (
    <div className='p-6'>
      {/* Header */}
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl font-semibold'>Doors List</h1>
        <Button className='bg-blue-600 text-white'>+ Add New Door</Button>
      </div>

      {/* Search Bar */}
      <div className='mb-4'>
        <Input
          placeholder='Search doors by title or category...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-[300px]'
        />
      </div>

      {/* Table */}
      <div className='bg-white shadow-md rounded-lg overflow-hidden'>
        <table className='w-full text-left border-collapse'>
          <thead>
            <tr className='bg-gray-100 text-sm uppercase'>
              <th className='p-3 border-b'>Title</th>
              <th className='p-3 border-b'>Category</th>
              <th className='p-3 border-b'>Price Range</th>
              <th className='p-3 border-b'>Status</th>
              <th className='p-3 border-b text-center'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDoors.length > 0 ? (
              filteredDoors.map((door) => (
                <tr
                  key={door._id}
                  className='hover:bg-gray-50 transition-all text-sm'
                >
                  <td className='p-3 border-b'>{door.title}</td>
                  <td className='p-3 border-b'>{door.category}</td>
                  <td className='p-3 border-b'>{door.priceRange}</td>
                  <td
                    className={`p-3 border-b font-medium ${
                      door.status === 'Active'
                        ? 'text-green-600'
                        : 'text-red-500'
                    }`}
                  >
                    {door.status}
                  </td>
                  <td className='p-3 border-b flex justify-center gap-2'>
                    <Button size='sm' variant='outline'>
                      <Eye className='h-4 w-4' />
                    </Button>
                    <Button size='sm' variant='secondary'>
                      <Edit className='h-4 w-4' />
                    </Button>
                    <Button size='sm' variant='destructive'>
                      <Trash className='h-4 w-4' />
                    </Button>
                    <Button
                      size='sm'
                      variant='outline'
                      className='text-yellow-600 border-yellow-600'
                    >
                      <Ban className='h-4 w-4' />
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className='text-center text-gray-500 py-6 text-sm'
                >
                  No doors found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DoorListPage
