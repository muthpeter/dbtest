const mongoose = require('mongoose')

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect("mongodb+srv://admin:pass@garagecluster.v3k8n.mongodb.net/garagecluster")
        console.log(`connected to ${conn.connection.host}`)
    } catch (err){
        console.log(err)
        process.exit(1)
    }

}

module.exports = connectDB