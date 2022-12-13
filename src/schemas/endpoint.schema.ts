import mongoose from 'mongoose'
import { HttpMethod } from '../models'
import bodyRequestModel from './bodyRequest.schema'
import responseModel from './response.schema'
import parameterModel from './parameter.schema'

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
        type: bodyRequestModel.schema,
        required: false
    },
    response: [
        {
            type: responseModel.schema,
            required: true
        }
    ],
    parameter: [
        {
            type: parameterModel.schema,
            required: false
        }
    ]
})

export default mongoose.model("Endpoint", endpointSchema)