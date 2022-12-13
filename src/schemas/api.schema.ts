import mongoose from 'mongoose'
import resourceModel from './resource.schema'
import schemaModel from './schema.schema'
import enumModel from './enum.schema'

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
            type: resourceModel.schema,
            ref: "Resource",
            required: false
        }
    ],
    schema: [
        {
            type: schemaModel.schema,
            ref: "Schema",
            required: false
        }
    ],
    enum: [
        {
            type: enumModel.schema,
            ref: "Enum",
            required: false
        }
    ],
})

export default mongoose.model("Api", apiSchema)