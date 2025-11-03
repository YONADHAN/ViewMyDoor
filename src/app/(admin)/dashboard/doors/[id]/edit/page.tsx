'use client'

import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import DoorForm from '@/components/resusableComponents/forms/doorForm'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { toast } from 'sonner'
import axios from 'axios'

export default function EditDoorPage() {
  const router = useRouter()
  const params = useParams()
  const doorId = params?.id as string

  const [doorData, setDoorData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState(false)

  // ✅ Fetch door by ID
  useEffect(() => {
    const fetchDoor = async () => {
      try {
        const res = await axios.get(`/api/doors/${doorId}`)
        setDoorData(res.data)
      } catch (error) {
        console.error(error)
        toast.error('Failed to load door details')
      } finally {
        setLoading(false)
      }
    }

    if (doorId) fetchDoor()
  }, [doorId])

  // ✅ Handle update
  const handleUpdate = async (formData: any) => {
    try {
      setUpdating(true)
      await axios.put(`/api/doors/${doorId}`, formData)
      toast.success('Door updated successfully!')
      router.push('/admin/dashboard/doors')
    } catch (error: any) {
      console.error(error)
      toast.error(error.response?.data?.message || 'Failed to update door')
    } finally {
      setUpdating(false)
    }
  }

  if (loading) {
    return (
      <div className='p-6 text-center text-gray-500'>
        Loading door details...
      </div>
    )
  }

  if (!doorData) {
    return <div className='p-6 text-center text-red-500'>Door not found.</div>
  }

  return (
    <div className='p-6'>
      <Card className='max-w-4xl mx-auto shadow-md'>
        <CardHeader>
          <CardTitle className='text-xl font-semibold'>Edit Door</CardTitle>
        </CardHeader>
        <CardContent>
          <DoorForm
            initialValues={doorData}
            onSubmit={handleUpdate}
            loading={updating}
          />

          <div className='flex justify-end mt-6'>
            <Button
              onClick={() => router.push('/admin/dashboard/doors')}
              variant='outline'
              disabled={updating}
            >
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
