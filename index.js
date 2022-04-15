const express = require('express')
const connectDB = require('./config/db')
const fetchDB = require('./fetch')
const PORT = 3000
const app = express()
const Advert = require('./config/model/advertModel')

const getAdvert = async (req,res) => {
    const advert = await Advert.find()
    console.log(advert)
    }

const addAdvert = async (req,res) =>{

   try{ var {id,address,link,price} = await fetchDB(0)
    const go212al =  Advert.create({id, address, link, price})
    } catch (err) {
        console.log(err)
    } 
}

connectDB()
// fetchDB(0).then(addAdvert).then()

getAdvert()


// .then(res => console.log(res))





app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))