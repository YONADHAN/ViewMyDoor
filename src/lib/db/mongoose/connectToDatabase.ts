import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI as string

if (!MONGODB_URI) {
  throw new Error('❌ Please add your MongoDB URI to .env.local')
}

let isConnected = false

export const connectToDatabase = async () => {
  if (isConnected) {
    console.log('✅ Using existing MongoDB connection')
    return
  }

  try {
    const db = await mongoose.connect(MONGODB_URI)
    isConnected = !!db.connections[0].readyState
    console.log('🚀 MongoDB connected successfully')
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error)
    throw new Error('MongoDB connection error')
  }
}
