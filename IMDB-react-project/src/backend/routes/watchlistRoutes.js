import express from 'express';
import {Watchlist} from '../models/watchlistModel.js'

const router = express.Router();

router.route('/').get((request, response) => response.json("Watchlist microservice working neat"));

router.route('/add-watchlist').post(async (request, response) => {
    console.log(request.body);
    const name = request.body.name;
    const userId = request.body.userId;

    const newWatchlist = await Watchlist.create({
        userId: userId,
        watchlistName: name,
        createdAt: Date.now(),
    })

    await newWatchlist.save();
    console.log(newWatchlist);

    response.status(202).json("New Watchlist Created!");
})

export default router;