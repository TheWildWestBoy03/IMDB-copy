import mongoose from "mongoose"

const watchedProductionSchema = mongoose.Schema({
    created: {
        type: Date,
        required: true,
    },
    productionId: {
        type: Number,
    }
})

const watchHistorySchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    productions: {
        type: [watchedProductionSchema],
        default: [],
    }
}, {
    timestamps: true
})

export const WatchHistory = mongoose.model("WatchHistory", watchHistorySchema);
export const WatchHistoryItem = mongoose.model("WatchHistoryItem", watchedProductionSchema);