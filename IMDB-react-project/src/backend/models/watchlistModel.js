import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    "name": {
        type: String,
        required: true
    },
    "backdropPath": {
        type: String,
        required: true
    },
    "posterPath": {
        type: String,
        required: true
    }
})

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
    },
    "movieList" : {
        type: [movieSchema],
        required: true,
        default: []
    }
})

export const Watchlist = mongoose.model("Watchlist", watchlistSchema);
export const Movie = mongoose.model("Movie", movieSchema);