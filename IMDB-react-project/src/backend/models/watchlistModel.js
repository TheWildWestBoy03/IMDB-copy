import mongoose from "mongoose";

const watchlistSchema = mongoose.Schema({
    "userId": {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    "watchlistName": {
        type: String,
        required: true
    },
    "createdAt": {
        type: Date,
        required: true,
    }
})

export const Watchlist = mongoose.model("Watchlist", watchlistSchema);