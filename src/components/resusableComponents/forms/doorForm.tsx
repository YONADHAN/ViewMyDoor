'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

interface DoorVariant {
  size: string
  price: number
  mrp?: number
  weight?: string
  inStock: boolean
  images: File[]
}

interface DoorFormProps {
  initialData?: {
    title: string
    brand?: string
    material?: string
    color?: string
    category?: string
    description: string
    isFeatured: boolean
    defaultImage?: string
    variants: {
      size: string
      price: number
      mrp?: number
      weight?: string
      inStock: boolean
      images: string[]
    }[]
  }
  onSubmit: (formData: FormData) => Promise<void>
  isEditing?: boolean
  categories: { _id: string; name: string }[]
  loading?: boolean
}

const DoorForm: React.FC<DoorFormProps> = ({
  initialData,
  onSubmit,
  isEditing = false,
  categories = [],
  loading = false,
}) => {
  const [formData, setFormData] = useState({
    title: '',
    brand: 'NIKI',
    material: 'WPC',
    color: 'Walnut Brown',
    category: '',
    description: '',
    isFeatured: false,
  })

  const [defaultImage, setDefaultImage] = useState<File | null>(null)
  const [variants, setVariants] = useState<DoorVariant[]>([
    { size: '', price: 0, mrp: 0, weight: '', inStock: true, images: [] },
  ])

  // 🟢 Sync initial data when editing
  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        brand: initialData.brand || 'NIKI',
        material: initialData.material || 'WPC',
        color: initialData.color || 'Walnut Brown',
        category: initialData.category || '',
        description: initialData.description || '',
        isFeatured: initialData.isFeatured || false,
      })
      setVariants(
        initialData.variants?.map((v) => ({
          size: v.size,
          price: v.price,
          mrp: v.mrp,
          weight: v.weight,
          inStock: v.inStock,
          images: [],
        })) || []
      )
    }
  }, [initialData])

  // --- Form field changes ---
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleDefaultImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) setDefaultImage(file)
  }

  // --- Variant changes ---
  const handleVariantChange = (index: number, field: string, value: any) => {
    const updated = [...variants]
    ;(updated[index] as any)[field] = value
    setVariants(updated)
  }

  const handleVariantImageChange = (index: number, files: FileList | null) => {
    if (!files) return
    const updated = [...variants]
    updated[index].images = Array.from(files)
    setVariants(updated)
  }

  const addVariant = () => {
    setVariants((prev) => [
      ...prev,
      { size: '', price: 0, mrp: 0, weight: '', inStock: true, images: [] },
    ])
  }

  const removeVariant = (index: number) => {
    setVariants((prev) => prev.filter((_, i) => i !== index))
  }

  // --- Submit ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (loading) return

    const data = new FormData()
    data.append('title', formData.title)
    data.append('brand', formData.brand)
    data.append('material', formData.material)
    data.append('color', formData.color)
    data.append('category', formData.category)
    data.append('description', formData.description)
    data.append('isFeatured', String(formData.isFeatured))

    if (defaultImage) data.append('defaultImage', defaultImage)

    variants.forEach((variant, index) => {
      data.append(`variants[${index}][size]`, variant.size)
      data.append(`variants[${index}][price]`, String(variant.price))
      if (variant.mrp)
        data.append(`variants[${index}][mrp]`, String(variant.mrp))
      if (variant.weight)
        data.append(`variants[${index}][weight]`, variant.weight)
      data.append(`variants[${index}][inStock]`, String(variant.inStock))
      variant.images.forEach((img, imgIndex) =>
        data.append(`variants[${index}][images][${imgIndex}]`, img)
      )
    })

    await onSubmit(data)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white p-6 rounded-xl shadow-md flex flex-col gap-4 w-[600px]'
    >
      {/* Basic Info */}
      <input
        type='text'
        name='title'
        value={formData.title}
        onChange={handleChange}
        placeholder='Door title'
        className='border p-2 rounded'
        required
        disabled={loading}
      />

      <textarea
        name='description'
        value={formData.description}
        onChange={handleChange}
        placeholder='Description'
        className='border p-2 rounded'
        rows={3}
        disabled={loading}
      />

      <select
        name='category'
        value={formData.category}
        onChange={handleChange}
        className='border p-2 rounded'
        required
        disabled={loading}
      >
        <option value=''>Select Category</option>
        {(categories || []).map((cat) => (
          <option key={cat._id} value={cat._id}>
            {cat.name}
          </option>
        ))}
      </select>

      <input
        type='file'
        accept='image/*'
        onChange={handleDefaultImageChange}
        className='border p-2 rounded'
        disabled={loading}
      />

      <label className='flex items-center gap-2'>
        <input
          type='checkbox'
          name='isFeatured'
          checked={formData.isFeatured}
          onChange={handleChange}
          disabled={loading}
        />
        Featured Door
      </label>

      {/* Variants Section */}
      <div className='border-t pt-4'>
        <h3 className='font-semibold mb-2'>Variants</h3>

        {variants.map((variant, index) => (
          <div
            key={index}
            className='border p-3 rounded-lg mb-3 bg-gray-50 flex flex-col gap-2'
          >
            <div className='flex gap-2'>
              <input
                type='text'
                placeholder='Size (e.g. 78x27 Inch)'
                value={variant.size}
                onChange={(e) =>
                  handleVariantChange(index, 'size', e.target.value)
                }
                className='border p-2 rounded w-full'
                disabled={loading}
              />
              <input
                type='number'
                placeholder='Price'
                value={variant.price}
                onChange={(e) =>
                  handleVariantChange(index, 'price', e.target.value)
                }
                className='border p-2 rounded w-full'
                disabled={loading}
              />
              <input
                type='number'
                placeholder='MRP'
                value={variant.mrp || ''}
                onChange={(e) =>
                  handleVariantChange(index, 'mrp', e.target.value)
                }
                className='border p-2 rounded w-full'
                disabled={loading}
              />
            </div>

            <div className='flex gap-2'>
              <input
                type='text'
                placeholder='Weight'
                value={variant.weight || ''}
                onChange={(e) =>
                  handleVariantChange(index, 'weight', e.target.value)
                }
                className='border p-2 rounded w-full'
                disabled={loading}
              />
              <label className='flex items-center gap-1 text-sm'>
                <input
                  type='checkbox'
                  checked={variant.inStock}
                  onChange={(e) =>
                    handleVariantChange(index, 'inStock', e.target.checked)
                  }
                  disabled={loading}
                />
                In Stock
              </label>
            </div>

            <input
              type='file'
              multiple
              accept='image/*'
              onChange={(e) => handleVariantImageChange(index, e.target.files)}
              disabled={loading}
            />

            <Button
              type='button'
              variant='destructive'
              size='sm'
              onClick={() => removeVariant(index)}
              disabled={loading}
            >
              Remove Variant
            </Button>
          </div>
        ))}

        <Button
          type='button'
          onClick={addVariant}
          variant='outline'
          disabled={loading}
        >
          + Add Variant
        </Button>
      </div>

      <Button
        type='submit'
        className='bg-blue-600 text-white'
        disabled={loading}
      >
        {loading
          ? isEditing
            ? 'Updating...'
            : 'Adding...'
          : isEditing
          ? 'Update Door'
          : 'Add Door'}
      </Button>
    </form>
  )
}

export default DoorForm
