import express from 'express';
import cors from 'cors'
import booksRoute from './routes/usersRoute.js';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser'

dotenv.config()
const app = express()
const port = process.env.port || 3000

const corsOptions = {
    origin: 'http://localhost:5173', 
    methods: 'GET,POST,UPDATE,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())
app.use('/', booksRoute)

app.get('/', (request, response) => {
  response.send('Hello World!')
})

const uri = process.env.ATLAS_URi;
mongoose.connect(uri, {})

const connection = mongoose.connection;
connection.once('open', () => console.log("Database connected"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})