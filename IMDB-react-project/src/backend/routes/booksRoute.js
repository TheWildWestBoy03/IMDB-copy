import express from 'express'
import {Book} from '../models/bookModel.js'

const router = express.Router()

router.get('/', async (request, response) => {
    Book.find()
    .then((books) => {response.status(200).json(books)})
    .catch((err) => console.log(err))
})

router.get('/:title', async (request, response) => {
    Book.find({title: request.params.title})
    .then((books) => {response.status(200).json(books)})
    .catch((err) => console.log(err))
})

router.get('/:author', async (request, response) => {
    Book.find({author: request.params.author})
    .then((books) => {response.status(200).json(books)})
    .catch((err) => console.log(err))
})

router.get('/:genre', async (request, response) => {
    Book.findOne({genre: request.params.genre})
    .then((books) => {response.status(200).json(books)})
    .catch((err) => console.log(err))
})

router.post('/add', async(request, response) => {
    if (Array.isArray(request.body)) {
        try {
            const books = await Book.insertMany(request.body)
            response.status(201).json("All books saved");
        } catch (error) {
            response.status(404).json(error);
        }
    } else {
        try {
            const book = await Book.create(request.body);
            return response.status(201).send(book);
        } catch (error) {
            console.log(error.message);
            response.status(500).send({message: "Internal server error!"});
        }
        console.log("Book added successfully!");
    }
})

router.delete('/delete/:id', async(request, response) => {
    Book.findByIdAndDelete(request.params.id)
        .then(() => response.send({message: 'Book deleted'}))
        .catch((error) => response.status(404).send({message: "Not found!"}))
})

router.route('/delete/').delete(async(request, response) => {
    Book.deleteMany({})
        .then(() => response.status(200).json("All books deleted"))
        .catch((err) => {
            console.log(err)
            response.status(404).json(err)
        })
})

router.route('/add/:id').post(async(request, response) => {
    Book.findById(request.params.id)
        .then((exercise) => {
            exercise.title = request.body.title;
            exercise.author = request.body.author;
            exercise.cover = request.body.cover;
            exercise.genre = request.body.genre;

            exercise.save()
                    .then(() => response.status(201).json("Book updated"))
                    .catch((error) => response.status(404).json(error))
        })
        .catch((err) => response.status(404).json("Not Found!"));
})

export default router