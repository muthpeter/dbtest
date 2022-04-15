const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const connectDB = require('../config/db')
const fetchDB = require('../fetch')
const Advert = require('../model/advertModel')

router.get('/',async  (req,res) => {
    const advert = await Advert.find()
    res.send(advert)
}
    )

router.post('/:id', async (req,res) =>{
    try{ 
    var {id,address,link,price} = await fetchDB(req.params.id)
     const returnData =  Advert.create({id, address, link, price})
     res.send(200,returnData)
     } catch (err) {
         console.log(err)
     } 
})

router.delete('/:id', async (req,res) => {
    try{
     await Advert.deleteOne({id : req.params.id})
     res.send(`deleted item with id : ${req.params.id}`)
    } catch(err){
        console.log(err)
        }
})

module.exports = router