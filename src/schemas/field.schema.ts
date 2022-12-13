import mongoose from 'mongoose'
import { FieldType } from '../models/Field'

const fieldSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: FieldType,
        required: true
    },
    enum: {
        type: String,
        required: false
    },
    schema: {
        type: String,
        required: false
    },
    nullable: {
        type: Boolean,
        required: true
    },
    required: {
        type: Boolean,
        required: true
    }
})

export default mongoose.model("Field", fieldSchema)