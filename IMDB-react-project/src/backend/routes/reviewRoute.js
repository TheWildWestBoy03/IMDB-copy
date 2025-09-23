import express from 'express';
import { User } from '../models/userModel.js';
import { Review } from '../models/reviewModel.js';
import { Rating } from '../models/ratingModel.js';

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

router.route('/rating/find').post(async (request, response) => {
    try {
        const rating = await Rating.findOne({
            email: request.body.userEmail,
            title: request.body.title
        });

        response.status(201).json(rating);
    } catch (error) {
        console.log(error)
    }
})

router.route('/rating/find-all').post(async (request, response) => {
    try {
        const ratings = await Rating.find({
            email: request.body.userEmail,
        });

        const mappedRatings = ratings.map((rating) => {
            return {
                name: rating.title,
                posterPath: rating.posterPath,
            }
        })

        response.status(201).json(mappedRatings);
    } catch (error) {
        console.log(error);
    }
}) 

router.route('/rating/add').post(async (request, response) => {
    try {
        const user = await User.findOne({email: request.body.userEmail});
        if (user === null) {
            response.status(404).json("No User Found!");
        }

        const newRating = await Rating.create({
          title: request.body.title,
          email: request.body.userEmail,
          rating: request.body.rating,
          posterPath: request.body.poster_path,
          username: user.username
        })

        if (newRating === undefined) {
            response.status(404).json("No Rating Found");
        }

        response.status(201).json("Ok");
    } catch (error) {
        console.log(error);
        response.status(500).json("Internal Server Error!");
    }
})

router.route('/rating/delete').post(async (request, response) => {
    try {
        const deletedRating = await Rating.findOne({
            email: request.body.userEmail,
            title: request.body.title
        });

        if (deletedRating !== null) {
            await deletedRating.deleteOne();
        }
    } catch (error) {
        console.log(error)
    }
})

export default router;