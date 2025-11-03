'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'

const ViewBusinessPage = () => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        // 🟢 Fetch API here
        // const res = await fetch('/api/business')
        // const result = await res.json()

        // Example data
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

        if (!result) {
          toast.info('No business contact found. Redirecting to edit page...')
          router.push('/dashboard/business_contact/edit')
        } else {
          setData(result)
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

  if (loading)
    return (
      <div className='flex items-center justify-center h-64'>
        <Loader2 className='animate-spin w-6 h-6 text-gray-500' />
      </div>
    )

  if (!data) return null

  return (
    <div className='p-6 max-w-2xl mx-auto space-y-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-semibold'>Business Details</h1>
        <Button onClick={() => router.push('/dashboard/business_contact/edit')}>
          Edit
        </Button>
      </div>

      <div className='border rounded-lg p-4 space-y-3 bg-gray-50'>
        <p>
          <strong>Name:</strong> {data.businessName}
        </p>
        <p>
          <strong>Email:</strong> {data.email || '—'}
        </p>
        <p>
          <strong>Address:</strong> {data.address || '—'}
        </p>
        <p>
          <strong>Status:</strong>{' '}
          {data.isActive ? (
            <span className='text-green-600 font-medium'>Active</span>
          ) : (
            <span className='text-red-600 font-medium'>Inactive</span>
          )}
        </p>

        <div>
          <strong>Contacts:</strong>
          <ul className='mt-2 space-y-1'>
            {data.contacts.map((c: any, i: number) => (
              <li key={i} className='pl-2 border-l-2 border-gray-300'>
                <span className='font-medium capitalize'>{c.type}</span> —{' '}
                {c.label && <span>{c.label}: </span>}
                <a
                  href={c.value}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 hover:underline'
                >
                  {c.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ViewBusinessPage
