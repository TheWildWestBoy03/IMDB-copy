import mongoose, { mongo } from "mongoose";

const ratingSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    posterPath: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true
    }
})

export const Rating = mongoose.model("Rating", ratingSchema);