import express from 'express';
import { User } from '../models/userModel.js';
import { Review } from '../models/reviewModel.js';

const router = express.Router();

router.route('/review').post(async (request, response) => {
    console.log("In review post");
    
    try {
        const reviewData = request.body;
        const newReview = await Review.create({
            userEmail: reviewData.email,
            title: reviewData.title,
            body: reviewData.body,
            isSpoiler: reviewData.reviewSpoiler,
            rating: parseInt(reviewData.rating),
            timeCreated: Date.now()
        })
    } catch (error) {
        console.log(error);
        response.status(500).json("Internal server error!");
    }
})

export default router;