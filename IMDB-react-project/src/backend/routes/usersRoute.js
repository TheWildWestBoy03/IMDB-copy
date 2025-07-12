import express from 'express'
import {Book} from '../models/bookModel.js'

const router = express.Router()

router.post('/login', async (request, response) => {
    
})

router.post('/register', async(request, response) => {
    console.log("Registration in progress")
    console.log(request.body)

    response.status(202).json("Data saved")
})

export default router