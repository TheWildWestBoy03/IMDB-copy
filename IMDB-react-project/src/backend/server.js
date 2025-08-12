import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import {createProxyMiddleware} from 'http-proxy-middleware'
import mongoose from 'mongoose';

dotenv.config()
const app = express()
const port = process.env.port || 3000

const corsOptions = {
  origin: 'http://localhost:5173', 
  methods: 'GET,POST,UPDATE,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};
app.use(cors(corsOptions))

const reviewProxy = createProxyMiddleware({
  target: 'http://localhost:3002',
  changeOrigin: true,
  logLevel: 'debug',
  pathRewrite: {
    '^/api/review': '',
  },
});

const authenticationProxy = createProxyMiddleware({
  target: 'http://localhost:3001',
  changeOrigin: true,
  logLevel: 'debug',
  pathRewrite: {
    '^/api/auth': '',
  },
});

app.use('/api/review', reviewProxy);
app.use('/api/auth', authenticationProxy);

app.get('/', (request, response) => {
  response.send('Hello World from API Gateway!')
})

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {})

const connection = mongoose.connection;
connection.once('open', () => console.log("Database connected"))

app.listen(port, () => {console.log(`API Gateway listening on port ${port}`)})