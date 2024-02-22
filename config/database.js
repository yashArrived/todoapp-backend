const mongoose = require('mongoose');

require("dotenv").config();

const dbConnect = ()=> {
    mongoose.connect('mongodb://localhost:27017/myDatabase', {
        useNewurlParser:true,
        useUnifiedTopology:true
    })


    .then(()=> console.log("dbb connection successful"))
    .catch((error)=> {console.log("Issue in db connnection")
        console.log(error)

        process.exit(1);}
    )
    
}

module.exports = dbConnect;