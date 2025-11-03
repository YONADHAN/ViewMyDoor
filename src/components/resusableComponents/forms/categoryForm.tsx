'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

interface CategoryFormProps {
  initialData?: {
    name: string
    description: string
    availability: string
    status: string
    mainCategory: string
    image?: string
  }
  onSubmit: (formData: FormData) => Promise<void>
  isEdit?: boolean
}

const CategoryForm: React.FC<CategoryFormProps> = ({
  initialData,
  onSubmit,
  isEdit = false,
}) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    description: initialData?.description || '',
    availability: initialData?.availability || '',
    status: initialData?.status || 'UnBlock',
    mainCategory: initialData?.mainCategory || 'Top Products',
    image: null as File | null,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, image: e.target.files![0] }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const form = new FormData()
    form.append('name', formData.name)
    form.append('description', formData.description)
    form.append('availability', formData.availability)
    form.append('status', formData.status)
    form.append('mainCategory', formData.mainCategory)
    if (formData.image) form.append('image', formData.image)

    await onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      {/* Category Name */}
      <div>
        <label
          htmlFor='name'
          className='block text-sm font-medium text-gray-700'
        >
          Category Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Category name'
          className='w-full border rounded-md p-2 mt-1'
          required
        />
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor='description'
          className='block text-sm font-medium text-gray-700'
        >
          Description
        </label>
        <input
          type='text'
          id='description'
          name='description'
          value={formData.description}
          onChange={handleChange}
          placeholder='Description...'
          className='w-full border rounded-md p-2 mt-1'
          required
        />
      </div>

      {/* Availability */}
      <div>
        <label
          htmlFor='availability'
          className='block text-sm font-medium text-gray-700'
        >
          Availability
        </label>
        <input
          type='number'
          id='availability'
          name='availability'
          value={formData.availability}
          onChange={handleChange}
          placeholder='e.g., 32'
          className='w-full border rounded-md p-2 mt-1'
          required
        />
      </div>

      {/* Main Category */}
      <div>
        <label
          htmlFor='mainCategory'
          className='block text-sm font-medium text-gray-700'
        >
          Main Category
        </label>
        <select
          id='mainCategory'
          name='mainCategory'
          value={formData.mainCategory}
          onChange={handleChange}
          className='w-full border rounded-md p-2 mt-1'
          required
        >
          <option value='Top Products'>Top Products</option>
          <option value='Latest'>Latest</option>
          <option value='Trendy'>Trendy</option>
          <option value='Recommended'>Recommended</option>
          <option value='Featured'>Featured</option>
        </select>
      </div>

      {/* Upload Image */}
      <div>
        <label
          htmlFor='image'
          className='block text-sm font-medium text-gray-700'
        >
          Upload Image
        </label>
        <input
          type='file'
          id='image'
          accept='image/*'
          onChange={handleFileChange}
          className='w-full border rounded-md p-2 mt-1'
        />
        {isEdit && initialData?.image && (
          <p className='text-xs text-gray-500 mt-1'>
            Current image:{' '}
            <span className='underline'>{initialData.image}</span>
          </p>
        )}
      </div>

      {/* Status */}
      <div>
        <label
          htmlFor='status'
          className='block text-sm font-medium text-gray-700'
        >
          Status
        </label>
        <select
          id='status'
          name='status'
          value={formData.status}
          onChange={handleChange}
          className='w-full border rounded-md p-2 mt-1'
        >
          <option value='Block'>Block</option>
          <option value='UnBlock'>UnBlock</option>
        </select>
      </div>

      <Button
        type='submit'
        className='bg-yellow-900 hover:bg-yellow-950 text-white font-semibold mt-4'
      >
        {isEdit ? 'Update Category' : 'Add Category'}
      </Button>
    </form>
  )
}

export default CategoryForm
