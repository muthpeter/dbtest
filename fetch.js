const fetch = require('node-fetch');
const targetUrl = "http://137.184.113.181:8001/admin/jsonList?fbclid=IwAR3uOLKysdlsDY3YpF16ftad1K_1uhfBnJvqyqt4MWVrr-cI-MPRFZJv9bs"

var  adattable

// fetch(targetUrl)
//    .then(json => adattable = json)

const fetchDB = async (el) =>{
    try{
        adattable = await fetch(targetUrl).then(res =>  res.json())
       
    } catch (err){
        console.log(err)
        process.exit(1)
    }
    return adattable[el]
}

module.exports = fetchDB
