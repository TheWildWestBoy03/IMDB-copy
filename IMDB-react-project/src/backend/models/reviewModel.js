import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    userEmail: {
        type: String,
        required: true
    },
    productionId: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true,
        minLength: 5,
    },
    isSpoiler: {
        type: Boolean,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    timeCreated: {
        type: Date,
        required: true
    }
},
{
    timestamps: true,
})

export const Review = mongoose.model("Review", reviewSchema);