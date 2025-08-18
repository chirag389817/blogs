import { PORT } from '#configs'
import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Blogs app listening on port ${PORT}`)
})