const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const connectDB = require('../config/db')
const fetchDB = require('../fetch')
const Advert = require('../model/advertModel')

router.get('/',async  (req,res) => {
    const advert = await Advert.find()
    console.log(advert)
}
    )

router.get('/add/:id', async (req,res) =>{
    try{ 
    var {id,address,link,price} = await fetchDB(req.params.id)
     const go212al =  Advert.create({id, address, link, price})
     res.send(200,go212al)
     } catch (err) {
         console.log(err)
     } 
})



module.exports = router