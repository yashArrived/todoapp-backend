const express = require("express");

const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 4000;

//middleware to parse json request bbbody in place of bodyParser
app.use(express.json()); //important for parsing kind of work


//import routes for todo api
const todoRoutes = require("./routes/todos");

//mount (-add or append-) todo api routes
app.use("/api/v1" , todoRoutes);



// const bodyParser= require('body-parser');
//  app.use(bodyParser.json());


app.listen(3000, ()=> {
    console.log(`Server started at port number : ${PORT}" `)
})
///Connect to db 
const dbConnect = require("./config/database");
dbConnect();

//default route :
app.get('/', (req,res)=> {
    res.send("<h1>THIS IS HOMEPAGE BABY </h1>")
})
// app.get('/' , (req,res)=> {
//     res.send("Hey there!")
// })

// app.post('/api/cars' , (req,res)=> {
//      const{name,brand}=req.body;
//      console.log(name);
//      console.log(brand);
//      res.send("Car saved")
// })

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/myDatabase', {
//     useNewurlParser:true,
//     useUnifiedTopology:true
// })

// .then(()=>{console.log("connection successful")})
// .catch(()=>{console.log("Some erroor occurred")});