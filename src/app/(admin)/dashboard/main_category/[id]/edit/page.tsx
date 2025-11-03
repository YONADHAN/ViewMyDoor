'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'
import { toast } from 'sonner'
import MainCategoryForm from '@/components/resusableComponents/forms/mainCategoryForm'

interface MainCategory {
  _id: string
  name: string
  description: string
  status: 'Active' | 'Inactive'
  image?: string
}

const EditMainCategoryPage = () => {
  const { id } = useParams()
  const router = useRouter()
  const [category, setCategory] = useState<MainCategory | null>(null)

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const { data } = await axios.get(`/api/main-category/${id}`)
        setCategory(data)
      } catch {
        toast.error('Failed to fetch category details')
      }
    }

    if (id) fetchCategory()
  }, [id])

  const handleUpdate = async (formData: FormData) => {
    try {
      await axios.put(`/api/main-category/${id}`, formData)
      toast.success('Main category updated successfully')
      router.push('/admin/dashboard/main-category')
    } catch {
      toast.error('Update failed!')
    }
  }

  if (!category) return <p className='p-8'>Loading...</p>

  return (
    <div className='p-8'>
      <h1 className='text-2xl font-semibold mb-4'>Edit Main Category</h1>
      <MainCategoryForm
        initialData={category}
        onSubmit={handleUpdate}
        isEditing
      />
    </div>
  )
}

export default EditMainCategoryPage
