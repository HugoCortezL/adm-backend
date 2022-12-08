import mongoose from 'mongoose'
import resourceSchema from '../Resource/resource.schema'
import schemaSchema from '../Schema/schema.schema'
import enumSchema from '../Enum/enum.schema'

const apiSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    version: {
        type: String,
        required: true
    },
    baseUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
        default: ""
    },
    isArchived: {
        type: Boolean,
        required: false,
        default: false
    },
    resource: [
        {
            type: resourceSchema.schema,
            ref: "Resource",
            required: false
        }
    ],
    schema: [
        {
            type: schemaSchema.schema,
            ref: "Schema",
            required: false
        }
    ],
    enum: [
        {
            type: enumSchema.schema,
            ref: "Enum",
            required: false
        }
    ],
})

export default mongoose.model("Api", apiSchema)