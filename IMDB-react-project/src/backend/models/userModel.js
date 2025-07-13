import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
        "username": {
            type: String,
            required: true,
            minLength: 3
        },
        "email": {
            type: String,
            required: true,
            minLength: 3
        }, 
        "password": {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    },
)

export const User = mongoose.model("User", userSchema)