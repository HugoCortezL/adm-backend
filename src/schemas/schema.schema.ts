import mongoose from 'mongoose'
import fieldModel from './field.schema'

const schemaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    fields: [
        {
            type: fieldModel.schema,
            required: true
        }
    ]
})

export default mongoose.model("Schema", schemaSchema)