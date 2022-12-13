import mongoose from 'mongoose'
import { From } from '../models'

const parameterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    required: {
        type: Boolean,
        required: true
    },
    from: {
        type: String,
        enum: From,
        required: true
    }
})

export default mongoose.model("Parameter", parameterSchema)