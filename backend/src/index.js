import express from "express"
import cors from "cors"

import { persons } from "./persons.js"

const app = express() 
const port = 3333

//GET, POST, PATCH, PUT, DELETE

app.use(cors())

app.get("/", (request, response) => {
    response.json(persons)
})

app.listen(port, () => {
    console.log(`Server run on port ${port}!`)
})