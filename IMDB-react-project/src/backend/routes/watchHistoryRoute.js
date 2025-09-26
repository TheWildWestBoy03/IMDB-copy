import mongoose from "mongoose";
import express from 'express';
import { WatchHistory, WatchHistoryItem } from "../models/watchHistoryModel.js";
import axios from "axios";
import { watch } from "fs";
const router = express.Router();

router.route('/add').post(async (request, response) => {
    console.log("Adding entry in watchhistory");

    try {
        const email = request.body.email;
        const url = "http://localhost:3000/api/auth/find";
        const user = await axios.post(url, {email}, {withCredentials: true});

        if (user === null) {
            response.status(404).json("User not found!");
        }

        let userWatchlist = await WatchHistory.findOne({username: user.data.username, email: email});
    
        if (userWatchlist === null) {
            userWatchlist = await WatchHistory.create({
                username: user.data.username,
                email: email
            })
        }
        const productionId = request.body.productionId;
        userWatchlist.productions.push(await WatchHistoryItem.create({
            productionId: productionId,
            created: Date.now(), 
        }))

        console.log(userWatchlist);

        await userWatchlist.save();
    } catch (error) {
        console.log(error);
    }
});

router.route('/find').post(async (request, response) => {
    try {
        const watchHistory = await WatchHistory.findOne({email: request.body.email});
        response.status(201).json(watchHistory);
    } catch (error) {
        console.log(error);
    }
})
export default router;
