import mongoose from 'mongoose'

const bodyRequestSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    schemaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Schema",
        required: true
    }
})

export default mongoose.model("BodyRequest", bodyRequestSchema)