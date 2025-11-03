import mongoose from 'mongoose'
import { CategorySchema } from '../schemas/category.schema'

export const Category =
  mongoose.models.Category || mongoose.model('Category', CategorySchema)
