import { Schema, Types } from 'mongoose'

export const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      default: '',
    },
    image: {
      type: String, // URL to category image
      default: '',
    },
    doorsAvailable: {
      type: String,
      default: '',
    },
    isActive: {
      type: Boolean,
      default: true,
    },

    // 🔗 Link with MainCategory
    mainCategory: {
      type: Types.ObjectId,
      ref: 'MainCategory', // model name to link with
      required: true,
    },
  },
  { timestamps: true }
)
