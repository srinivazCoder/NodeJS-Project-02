const express = require('express');
const app = express();
const {dataStream} = require("../data");


app.get("/",(req,res)=>{
    // res.json(dataStream)
    res.send('<h1>Home page</h1> <a href="/api/products">Products</a>')
})

app.get("/api/products",(req,res)=>{
    const newProduct = dataStream.map((e)=>{
        const { id, name , email} = e;
        return {id, name, email};
    });

    return res.json(newProduct);
}) 


app.get("/api/products/:id",(req,res)=>{

    const {id}= req.params;
    const singleProduct = dataStream.find((d)=>d.id=== +id)
    if(!singleProduct){
        return res.status(404).send('Product Does Not Exits');
    }
    return res.json(singleProduct);
})


app.get("/api/products/:id/reviews/:reviewId",(req,res)=>{
    console.log(req.params);
    res.send("Hello world");
})

app.get("/api/v1/query",(req,res)=>{
    console.log(req.query);

    const { search, limit } = req.query;
    let sortedProduct = [...dataStream];

    if(search){
        sortedProduct = sortedProduct.filter((pro)=>{
            return pro.name.startsWith(search);
        })
    }

    if(limit){
        sortedProduct = sortedProduct.slice(0, Number(limit))
    }

    if(sortedProduct.length < 1){
        // res.status(200).send('No mateched products')
        return res.status(200).json({success:true,data:[]})
    }

   return  res.status(200).json(sortedProduct)

    // res.send("Hello world");
})

app.listen(5000,()=>{
    console.log("server is listening on port 5000")
})