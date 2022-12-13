import mongoose from 'mongoose'

const responseSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    statusCode: {
        type: String,
        required: true
    },
    schemaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Schema",
        required: true
    }
})

export default mongoose.model("Response", responseSchema)