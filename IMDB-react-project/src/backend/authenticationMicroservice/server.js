import express from 'express';
import mongoose from 'mongoose';
import usersRoute from '../routes/usersRoute.js';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import cors from 'cors'
dotenv.config()

const app = express();
const port = 3001;

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use('/', usersRoute);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {})

const connection = mongoose.connection;
connection.once('open', () => console.log("Database connected to the Auth Microservice"))

app.listen(port, () => {console.log(`Users microservice currently listening on port ${port}`, )});

