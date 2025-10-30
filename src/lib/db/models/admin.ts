import mongoose, { Schema, Document, Model } from 'mongoose'

// 1️⃣ Define the TypeScript interface for an Admin document
export interface IAdmin extends Document {
  name: string
  email: string
  password: string
  role: 'admin'
}

// 2️⃣ Create the Mongoose schema
const AdminSchema: Schema<IAdmin> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'admin' },
  },
  { timestamps: true }
)

// 3️⃣ Create (or reuse) the model with proper typing
const Admin: Model<IAdmin> =
  mongoose.models.Admin || mongoose.model<IAdmin>('Admin', AdminSchema)

export default Admin
