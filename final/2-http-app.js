
const express = require('express');

const app = express();


app.get("/",(req,res)=>{
    console.log("user resource...")
    res.status(200).send("Hello world");
});

app.get("/about",(req,res)=>{
    console.log("user resource...")
    res.status(200).send("About");
});

app.all("*",(req,res)=>{
    res.status(404).send('<h1>Resource not found</h1>')
})

app.listen(5000,()=>{
    console.log("server is listening on port 5000")
})