'use client'

import React from 'react'
import axios from 'axios'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import MainCategoryForm from '@/components/resusableComponents/forms/mainCategoryForm'

const AddMainCategoryPage = () => {
  const router = useRouter()

  const handleAdd = async (formData: FormData) => {
    try {
      await axios.post('/api/main-category', formData)
      toast.success('Main category added successfully')
      router.push('/admin/dashboard/main-category')
    } catch {
      toast.error('Failed to add main category')
    }
  }

  return (
    <div className='p-8 '>
      <h1 className='text-2xl font-semibold mb-4 text-center'>
        Add Main Category
      </h1>
      <div className='flex place-items-center justify-center w-full '>
        <MainCategoryForm onSubmit={handleAdd} />
      </div>
    </div>
  )
}

export default AddMainCategoryPage
