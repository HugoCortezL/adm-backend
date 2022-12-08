import mongoose from 'mongoose'

const resourceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    endpointId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Endpoint",
            required: false
        }
    ]
})

export default mongoose.model("Resource", resourceSchema)