import express from 'express';
import reviewRoute from '../routes/reviewRoute.js';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
const app = express();
const port = 3002;

dotenv.config()
app.use(express.json());
app.use('/', reviewRoute);

app.get('/', (request, response) => {
    console.log(request.route)
    response.json("Reviews Microservice works neat");
});

app.listen(port, () => {console.log(`Reviews microservice currently listening on port ${port}`, )});

const ATLAS_URI = process.env.ATLAS_URI;
mongoose.connect(ATLAS_URI, {})

const connection = mongoose.connection;
connection.once('open', () => console.log("Database connection from Reviews Microservice established!"));