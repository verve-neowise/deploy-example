import cors from 'cors'
import express from 'express'

import { port } from './config'

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello App')
})

app.listen(port, () => console.log("Server started."))