import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productionRoute from '../routes/productionRoute.js';

const app = express();
const port = 3004;

app.use(express.json());
app.use(productionRoute);

dotenv.config();

app.listen(port, () => console.log("Production microservice works well!"));

const ATLAS_URI = process.env.ATLAS_URI;
mongoose.connect(ATLAS_URI, {});

const connection = mongoose.connection;
connection.once("open", () => console.log("Microservice connected to database!"));
