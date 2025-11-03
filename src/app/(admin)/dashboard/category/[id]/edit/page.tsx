'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CategoryForm from '@/components/resusableComponents/forms/categoryForm'
import { useParams } from 'next/navigation'

const EditCategoryPage = () => {
  const { id } = useParams()
  const [initialData, setInitialData] = useState<any>(null)

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get(`/api/category/${id}`)
        setInitialData(res.data)
      } catch (error) {
        console.error('Error fetching category:', error)
      }
    }
    if (id) fetchCategory()
  }, [id])

  const handleSubmit = async (formData: FormData) => {
    try {
      await axios.put(`/api/category/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      alert('✅ Category updated successfully!')
    } catch (error) {
      console.error('Error updating category:', error)
      alert('❌ Failed to update category.')
    }
  }

  if (!initialData) return <p>Loading...</p>

  return (
    <div className='max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-md'>
      <h1 className='text-xl font-bold mb-4 text-gray-800'>Edit Category</h1>
      <CategoryForm
        initialData={initialData}
        onSubmit={handleSubmit}
        isEdit={true}
      />
    </div>
  )
}

export default EditCategoryPage
