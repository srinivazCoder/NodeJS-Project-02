
 

const express = require('express');
const app = express();
let { dataStream } = require('./data');

const postman = require("./routes/people");
const auth = require("./routes/auth");
const authorize = require('./authorize');

// console.log(dataStream)
// app.use(authorize)
app.use(express.urlencoded({ extended : false }));

app.use(express.json())

app.use('/api/postman',postman);
app.use('/login',auth);
app.use("/",(req,res)=>{
    res.send("Well Come to Node js 2nd Project");
})




app.listen(5000,()=>{
    console.log("server is listening on port 5000")
})