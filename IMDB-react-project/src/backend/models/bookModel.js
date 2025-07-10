import mongoose from 'mongoose'

const bookSchema = mongoose.Schema({
    "title": {
        type: String,
        required: true,
        minLength: 3
    },
    "author": {
        type: String, 
        required: true,
    },
    "genre": {
        type: String,
        required: true,
    },
    "cover": {
        type: String,
        required: true,
    }
    },
    {
        timestamps: true,
    },
)

export const Book = mongoose.model("Book", bookSchema)