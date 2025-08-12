import express from 'express';

const app = express();
const port = 3002;

app.use(express.json());
app.use('../routes/watchlistRoutes.js');

app.get('/', (request, response) => {
    console.log(request.route)
    response.json("Reviews Microservice works neat");
});

app.listen(port, () => {console.log(`Reviews microservice currently listening on port ${port}`, )});
