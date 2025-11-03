import { Schema } from 'mongoose'

export const BusinessContactSchema = new Schema(
  {
    businessName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    contacts: [
      {
        type: {
          type: String,
          enum: [
            'whatsapp',
            'phone',
            'email',
            'instagram',
            'facebook',
            'website',
            'telegram',
            'other',
          ],
          required: true,
        },
        label: {
          type: String, // e.g. “Sales”, “Support”, “Manager’s WhatsApp”
          trim: true,
        },
        value: {
          type: String, // e.g. phone number, link, username, etc.
          required: true,
        },
      },
    ],
    address: {
      type: String,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
)
