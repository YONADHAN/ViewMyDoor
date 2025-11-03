import mongoose from 'mongoose'
import { BusinessContactSchema } from '../schemas/business_contact.shema'

export const BusinessContact =
  mongoose.models.BusinessContact ||
  mongoose.model('BusinessContact', BusinessContactSchema)
