'use client'

import React from 'react'
import BusinessContactForm from '@/components/resusableComponents/forms/businessContactForm'

const AddBusinessPage = () => {
  const handleSubmit = async (data: any) => {
    console.log('Add Business Contact:', data)
  }

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-semibold mb-4 text-center'>
        Add Business Contact
      </h1>
      <BusinessContactForm onSubmit={handleSubmit} />
    </div>
  )
}

export default AddBusinessPage
