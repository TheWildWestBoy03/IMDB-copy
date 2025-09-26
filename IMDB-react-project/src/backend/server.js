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
    '^/api/reviews': '',
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

const watchlistProxy = createProxyMiddleware({
  target: 'http://localhost:3003',
  changeOrigin: true,
  logLevel: 'debug',
  pathRewrite: {
    '^/api/watchlist': '',
  },
});

const productionProxy = createProxyMiddleware({
  target: 'http://localhost:3004',
  changeOrigin: true,
  logLevel: 'debug',
  pathRewrite: {
    '^/api/production': '',
  },
});

const watchHistoryProxy = createProxyMiddleware({
  target: 'http://localhost:3005',
  changeOrigin: true,
  logLevel: 'debug',
  pathRewrite: {
    '^/api/watch-history': '',
  },
});

app.use('/api/reviews', reviewProxy);
app.use('/api/auth', authenticationProxy);
app.use('/api/watchlist', watchlistProxy);
app.use('/api/productions', productionProxy);
app.use('/api/watch-history', watchHistoryProxy);

app.get('/', (request, response) => {
  response.send('Hello World from API Gateway!')
})

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {})

const connection = mongoose.connection;
connection.once('open', () => console.log("Database connected"))

app.listen(port, () => {console.log(`API Gateway listening on port ${port}`)})