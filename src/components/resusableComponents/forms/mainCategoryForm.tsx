'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

interface MainCategoryFormProps {
  initialData?: {
    name: string
    description: string
    status: 'Active' | 'Inactive'
    image?: string
  }
  onSubmit: (formData: FormData) => Promise<void>
  isEditing?: boolean
}

const MainCategoryForm: React.FC<MainCategoryFormProps> = ({
  initialData,
  onSubmit,
  isEditing = false,
}) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    description: initialData?.description || '',
    status: initialData?.status || 'Active',
  })
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  // Load initial image preview if editing
  useEffect(() => {
    if (initialData?.image) {
      setPreview(initialData.image)
    }
  }, [initialData])

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Handle file select + preview
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setPreview(URL.createObjectURL(selectedFile)) // Temporary preview
    }
  }

  // Submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const data = new FormData()
    data.append('name', formData.name)
    data.append('description', formData.description)
    data.append('status', formData.status)
    if (file) data.append('image', file)

    await onSubmit(data)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white p-6 rounded-xl shadow-md flex flex-col gap-3 w-[400px]'
    >
      <input
        type='text'
        name='name'
        value={formData.name}
        onChange={handleChange}
        placeholder='Category name'
        className='border p-2 rounded'
        required
      />

      <textarea
        name='description'
        value={formData.description}
        onChange={handleChange}
        placeholder='Description...'
        className='border p-2 rounded'
      />

      <select
        name='status'
        value={formData.status}
        onChange={handleChange}
        className='border p-2 rounded'
      >
        <option value='Active'>Active</option>
        <option value='Inactive'>Inactive</option>
      </select>

      {/* Image Upload + Preview */}
      <div className='flex flex-col gap-2'>
        <label className='font-medium'>Upload Image</label>
        {preview && (
          <img
            src={preview}
            alt='Preview'
            className='w-32 h-32 object-cover rounded border'
          />
        )}
        <input type='file' accept='image/*' onChange={handleFileChange} />
      </div>

      <Button type='submit' className='bg-yellow-950 text-white'>
        {isEditing ? 'Update Category' : 'Add Category'}
      </Button>
    </form>
  )
}

export default MainCategoryForm
