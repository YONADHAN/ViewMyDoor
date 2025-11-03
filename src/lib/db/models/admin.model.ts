import mongoose from 'mongoose'
import { AdminSchema } from '../schemas/admin.schema'

export const Admin =
  mongoose.models.Admin || mongoose.model('Admin', AdminSchema)
