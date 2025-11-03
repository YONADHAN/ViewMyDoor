'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Plus, Trash2 } from 'lucide-react'
import { toast } from 'sonner'

interface Contact {
  type: string
  label: string
  value: string
}

interface BusinessContactFormProps {
  initialData?: {
    businessName: string
    email?: string
    address?: string
    contacts: Contact[]
    isActive?: boolean
  }
  onSubmit: (data: any) => Promise<void>
  isEditing?: boolean
}

const contactTypes = [
  'whatsapp',
  'phone',
  'email',
  'instagram',
  'facebook',
  'website',
  'telegram',
  'other',
]

const BusinessContactForm: React.FC<BusinessContactFormProps> = ({
  initialData,
  onSubmit,
  isEditing = false,
}) => {
  const [formData, setFormData] = useState({
    businessName: initialData?.businessName || '',
    email: initialData?.email || '',
    address: initialData?.address || '',
    contacts: initialData?.contacts || [
      { type: 'phone', label: '', value: '' },
    ],
    isActive: initialData?.isActive ?? true,
  })

  const [loading, setLoading] = useState(false)

  // Handle text field changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle contact item changes
  const handleContactChange = (
    index: number,
    field: keyof Contact,
    value: string
  ) => {
    const updated = [...formData.contacts]
    updated[index][field] = value
    setFormData((prev) => ({ ...prev, contacts: updated }))
  }

  // Add a new contact field
  const addContact = () => {
    setFormData((prev) => ({
      ...prev,
      contacts: [...prev.contacts, { type: 'phone', label: '', value: '' }],
    }))
  }

  // Remove a contact field
  const removeContact = (index: number) => {
    const updated = formData.contacts.filter((_, i) => i !== index)
    setFormData((prev) => ({ ...prev, contacts: updated }))
  }

  // Submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await onSubmit(formData)
      toast.success(
        isEditing
          ? 'Business contact updated successfully!'
          : 'Business contact added successfully!'
      )
    } catch (error) {
      toast.error('Something went wrong.')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='space-y-6 bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto'
    >
      <div className='space-y-2'>
        <Label>Business Name</Label>
        <Input
          name='businessName'
          value={formData.businessName}
          onChange={handleChange}
          placeholder='Enter business name'
          required
        />
      </div>

      <div className='space-y-2'>
        <Label>Email</Label>
        <Input
          name='email'
          value={formData.email}
          onChange={handleChange}
          type='email'
          placeholder='Enter business email'
        />
      </div>

      <div className='space-y-2'>
        <Label>Address</Label>
        <Input
          name='address'
          value={formData.address}
          onChange={handleChange}
          placeholder='Enter business address'
        />
      </div>

      <div className='space-y-4'>
        <Label>Contacts</Label>
        {formData.contacts.map((contact, index) => (
          <div
            key={index}
            className='flex flex-col md:flex-row items-center gap-3 border p-3 rounded-lg bg-gray-50'
          >
            {/* Contact Type */}
            <select
              value={contact.type}
              onChange={(e) =>
                handleContactChange(index, 'type', e.target.value)
              }
              className='border rounded-md p-2 w-full md:w-1/4'
            >
              {contactTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            {/* Label */}
            <Input
              placeholder='Label (e.g. Support WhatsApp)'
              value={contact.label}
              onChange={(e) =>
                handleContactChange(index, 'label', e.target.value)
              }
              className='w-full md:w-1/3'
            />

            {/* Value */}
            <Input
              placeholder='Value (e.g. +91 9876543210 or link)'
              value={contact.value}
              onChange={(e) =>
                handleContactChange(index, 'value', e.target.value)
              }
              className='w-full md:w-1/3'
            />

            <Button
              type='button'
              variant='destructive'
              size='icon'
              onClick={() => removeContact(index)}
            >
              <Trash2 className='w-4 h-4' />
            </Button>
          </div>
        ))}

        <Button
          type='button'
          variant='secondary'
          onClick={addContact}
          className='flex items-center gap-2'
        >
          <Plus className='w-4 h-4' /> Add Contact
        </Button>
      </div>

      <div className='flex items-center gap-2'>
        <input
          type='checkbox'
          checked={formData.isActive}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, isActive: e.target.checked }))
          }
        />
        <Label>Active</Label>
      </div>

      <Button
        type='submit'
        className='w-full bg-blue-600 text-white'
        disabled={loading}
      >
        {loading
          ? 'Saving...'
          : isEditing
          ? 'Update Business Contact'
          : 'Add Business Contact'}
      </Button>
    </form>
  )
}

export default BusinessContactForm
