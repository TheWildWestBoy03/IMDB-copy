import express from "express";
import fs from 'fs';
import {Production} from '../models/productionModel.js'
const router = express.Router();
let previous, current;

const fileSystem = fs.promises;
router.route('/production/hello-world').get((request, response) => {
    response.status(200).json("Hello from production microservice routes!")}
);

router.route('/production/add').post(async (request, response) => {
    console.log(request.body);

    try {
        let stream = fs.createWriteStream('./dump_data.json', {flags: 'a'});
        current = request.body.id;
        
        if (current != previous) {
            stream.write(JSON.stringify(request.body) + ',');
        }
        previous = request.body.id;
        console.log("File appended");
        response.status(201).json("YES YES VERY GOOD");
    } catch (error) {
        console.log(error);
    }
})

router.route('/production/find').post(async (request, response) => {
    try {
        const desiredMovie = await Production.findOne({original_title: request.body.title});
        response.status(201).json(desiredMovie);
    } catch (error) {
        console.log(error);
    }
})

router.route('/production/find-by-id').post(async (request, response) => {
    try {
        const desiredMovie = await Production.findOne({id: request.body.id});
        response.status(201).json(desiredMovie);
    } catch (error) {
        console.log(error);
    }
})

router.route('/production/find-all').get((request, response) => {
    try {
        const jsonContent = fs.readFileSync('./dump_data.json', 'utf-8');
        const productions = JSON.parse(jsonContent);

        productions.forEach(async (item) => {
            return Production.create(item);
        });

        console.log("ok");
        response.status(201).json('ok');
    } catch (error) {
        console.log(error);
    }
})

export default router;