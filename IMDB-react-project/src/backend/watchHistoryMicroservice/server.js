import mongoose, { mongo } from "mongoose";
import express from "express";
import watchHistoryRoutes from '../routes/watchHistoryRoute.js'
import dotenv from "dotenv";
const app = express();
const port = 3005;

app.use(express.json());
app.use(watchHistoryRoutes);
dotenv.config()

app.listen(port, () => console.log("Watch history microservice works well!"));

const ATLAS_URI = process.env.ATLAS_URI;
mongoose.connect(ATLAS_URI, {});
const connection = mongoose.connection;
connection.once('open', () => console.log("Database connected from watch history microservice!"));