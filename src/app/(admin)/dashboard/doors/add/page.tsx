'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import DoorForm from '@/components/resusableComponents/forms/doorForm'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { toast } from 'sonner'
import axios from 'axios'

export default function AddDoorPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState<{ _id: string; name: string }[]>(
    []
  )

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get('/api/categories')
        setCategories(res.data)
      } catch (error) {
        console.error(error)
        toast.error('Failed to load categories')
      }
    }
    fetchCategories()
  }, [])

  const handleSubmit = async (formData: any) => {
    try {
      setLoading(true)
      await axios.post('/api/doors', formData)
      toast.success('Door added successfully!')
      router.push('/admin/dashboard/doors')
    } catch (error: any) {
      console.error(error)
      toast.error(error.response?.data?.message || 'Failed to add door')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='p-6'>
      <Card className='max-w-4xl mx-auto shadow-md'>
        <CardHeader>
          <CardTitle className='text-xl font-semibold'>Add New Door</CardTitle>
        </CardHeader>
        <CardContent>
          <DoorForm
            onSubmit={handleSubmit}
            loading={loading}
            categories={categories}
          />
          <div className='flex justify-end mt-6'>
            <Button
              onClick={() => router.push('/admin/dashboard/doors')}
              variant='outline'
              disabled={loading}
            >
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
