import express from 'express'
import mongoose from 'mongoose';
import watchlistRoute from '../routes/watchlistRoutes.js'
import dotenv from 'dotenv';

const app = express();
const port = 3003;

dotenv.config();
app.use(express.json());
app.use('/', watchlistRoute);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {})

const connection = mongoose.connection;
connection.once('open', () => console.log("Database connected to Watchlist microservice"))

app.listen(port, () => {console.log("Watchlist microservice listening on port " + port)});