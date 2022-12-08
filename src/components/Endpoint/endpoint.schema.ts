import mongoose from 'mongoose'
import { HttpMethod } from './Endpoint'
import bodyRequestSchema  from '../BodyRequest/bodyRequest.schema'
import responseSchema from '../Response/response.schema'
import parameterSchema from '../Parameter/parameter.schema'

const endpointSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    httpMethod: {
        type: String,
        enum: HttpMethod,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    bodyRequest: {
        type: bodyRequestSchema.schema,
        required: false
    },
    response: [
        {
            type: responseSchema.schema,
            required: true
        }
    ],
    parameter: [
        {
            type: parameterSchema.schema,
            required: false
        }
    ]
})

export default mongoose.model("Endpoint", endpointSchema)