import mongoose from 'mongoose'
import fieldSchema from '../Field/field.schema'

const schemaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    fields: [
        {
            type: fieldSchema.schema,
            required: true
        }
    ]
})

export default mongoose.model("Schema", schemaSchema)