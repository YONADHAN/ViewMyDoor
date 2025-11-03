import { Schema, Types } from 'mongoose'

const DoorVariantSchema = new Schema({
  size: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  mrp: { type: Number },
  weight: { type: String },
  inStock: { type: Boolean, default: true },
  images: [String],
})

export const DoorSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    brand: { type: String, default: 'NIKI' },
    material: { type: String, default: 'WPC' },
    color: { type: String, default: 'Walnut Brown' },
    category: { type: Types.ObjectId, ref: 'Category', required: true },
    description: { type: String, required: true },
    variants: [DoorVariantSchema],
    defaultImage: { type: String },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
)
