'use client'

import React from 'react'
import axios from 'axios'
import CategoryForm from '@/components/resusableComponents/forms/categoryForm'

const AddCategoryPage = () => {
  const handleSubmit = async (formData: FormData) => {
    try {
      const response = await axios.post('/api/category', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      alert('✅ Category added successfully!')
      console.log('Response:', response.data)
    } catch (error) {
      console.error('Error adding category:', error)
      alert('❌ Failed to add category.')
    }
  }

  return (
    <div className='max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-md'>
      <h1 className='text-xl font-bold mb-4 text-gray-800'>Add New Category</h1>
      <CategoryForm onSubmit={handleSubmit} />
    </div>
  )
}

export default AddCategoryPage
