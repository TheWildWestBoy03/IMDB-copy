import express from 'express';
import {Watchlist, Movie} from '../models/watchlistModel.js'
import jwt from 'jsonwebtoken'
import { User } from '../models/userModel.js';
const router = express.Router();

router.route('/').get((request, response) => response.json("Watchlist microservice working neat"));

router.route('/get-watchlist').post(async (request, response) => {
    try {
        const userEmail = request.body.email;
        const user = await User.findOne({email: userEmail});
        const watchlist = await Watchlist.findOne({userId: user._id});

        console.log(watchlist);
        response.status(201).json(watchlist);
    } catch (error) {
        response.status(500).json("Internal Server Error!");
    }
})

router.route("/add-movie").post(async (request, response) => {
    const accessToken = request.cookies['access-token'];
    if (!accessToken || accessToken === undefined) {
        response.status(401).json("Unauthorized!");
    }

    const poster_path = request.body.information.poster_path;
    const title = request.body.information.title;
    const backdrop_path = request.body.information.backdrop_path;

    try {
        const newWatchlistMovie = await Movie.create({
            backdropPath: backdrop_path,
            posterPath: poster_path,
            name: title,     
        })
    
        const userData = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
        const databaseUser = await User.findOne({email: userData.email})
        const userId = databaseUser._id;
    
        if (userId === undefined) {
            response.status(404).json("No user found!");

            return;
        }

        const userWatchlist = await Watchlist.findOne({userId: userId})

        if (userWatchlist === undefined) {
            response.status(404).json("No watchlist found!");

            return;
        }

        const movies = userWatchlist.movieList;
        const newMovies = movies.filter((movie) => {
            return movie.name !== title
        })

        if (movies.length !== newMovies.length) {
            userWatchlist.movieList = newMovies
        } else {
            movies.push(newWatchlistMovie)
        }

        await userWatchlist.save()
    } catch (error) {
        console.log(error);
        response.status(500).json("Internal Server Error!");
    }
})

router.route('/add-watchlist').post(async (request, response) => {
    const name = request.body.name;
    const userId = request.body.userId;

    const newWatchlist = await Watchlist.create({
        userId: userId,
        watchlistName: name,
        createdAt: Date.now(),
    })

    await newWatchlist.save();

    response.status(202).json("New Watchlist Created!");
})

export default router;