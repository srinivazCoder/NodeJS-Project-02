const express = require('express');
const app = express();
const logger = require("../logger");
const authorize = require('../authorize');
// const logger = (req,res,next) =>{
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear();
//     console.log(method, url, time);
//     res.send("Testing")
    
// }

app.use([authorize,logger]); 
// app.use(authorize); 

app.get('/',(req,res)=>{
    res.send('Home')
})

app.get('/About',(req,res)=>{
    res.send('About')
})

app.get('/api/products',(req,res)=>{
    res.send('Products')
})

app.get('/api/items',(req,res)=>{
    res.send('Items')
})

app.listen(5000,()=>{
    console.log("server is listening on port 5000")
})