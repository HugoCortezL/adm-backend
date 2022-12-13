import mongoose from 'mongoose'

const enumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    options: [
        {
            type: String,
            required: true
        }
    ]
})

export default mongoose.model("Enum", enumSchema)