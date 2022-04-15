const advert = require('./routes/advert')
const express = require('express')
const connectDB = require('./config/db')
const PORT = 3000
const app = express()


connectDB()

app.use('/advert',advert)



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))