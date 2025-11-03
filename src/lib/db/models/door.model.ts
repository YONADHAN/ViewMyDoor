import mongoose from 'mongoose'
import { DoorSchema } from '../schemas/door.schema'

export const Door = mongoose.models.Door || mongoose.model('Door', DoorSchema)
