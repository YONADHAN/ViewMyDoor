'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import BusinessContactForm from '@/components/resusableComponents/forms/businessContactForm'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'

const EditBusinessPage = () => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        // 🟢 Fetch API here
        // Example: const res = await fetch('/api/business')
        // const result = await res.json()
        // For now, mock data:
        const result = {
          businessName: 'Niki Doors',
          email: 'info@nikidoors.com',
          address: 'MG Road, Bangalore',
          contacts: [
            { type: 'whatsapp', label: 'Support', value: '+91 9876543210' },
            {
              type: 'instagram',
              label: 'Official',
              value: 'https://instagram.com/nikidoors',
            },
          ],
          isActive: true,
        }

        // Simulate “no data” scenario by commenting/uncommenting:
        // const result = null

        if (result) {
          setData(result)
        } else {
          // No previous data → route to add
          toast.info('No business contact found. Redirecting to add page...')
          router.push('/admin/business/add')
        }
      } catch (error) {
        console.error(error)
        toast.error('Failed to fetch business contact')
      } finally {
        setLoading(false)
      }
    }

    fetchBusiness()
  }, [router])

  const handleSubmit = async (updatedData: any) => {
    try {
      // 🟢 Call API here (PUT /api/business)
      console.log('Update Business Contact:', updatedData)
      toast.success('Business contact updated successfully!')
    } catch (err) {
      toast.error('Update failed')
    }
  }

  if (loading)
    return (
      <div className='flex items-center justify-center h-64'>
        <Loader2 className='animate-spin w-6 h-6 text-gray-500' />
      </div>
    )

  if (!data) return null

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-semibold mb-4'>Edit Business Contact</h1>
      <BusinessContactForm initialData={data} onSubmit={handleSubmit} />
    </div>
  )
}

export default EditBusinessPage
