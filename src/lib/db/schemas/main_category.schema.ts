import { Schema, Document } from 'mongoose'

export interface IMainCategory extends Document {
  name: string
  description?: string
  status: 'Active' | 'Inactive'
  image?: string
  createdAt: Date
  updatedAt: Date
}

const mainCategorySchema = new Schema<IMainCategory>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      default: '',
    },
    image: {
      type: String,
    },
    status: {
      type: String,
      enum: ['Active', 'Inactive'],
      default: 'Active',
    },
  },
  { timestamps: true }
)

export default mainCategorySchema
