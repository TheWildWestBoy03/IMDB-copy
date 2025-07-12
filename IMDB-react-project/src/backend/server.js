import express from 'express';
import cors from 'cors'
import booksRoute from './routes/usersRoute.js';
import dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config()
const app = express()
const port = process.env.port || 3000

const corsOptions = {
    origin: 'http://localhost:5173', 
    methods: 'GET,POST,UPDATE,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(express.json())
app.use(cors(corsOptions))
app.use('/', booksRoute)

app.get('/', (request, response) => {
  response.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})