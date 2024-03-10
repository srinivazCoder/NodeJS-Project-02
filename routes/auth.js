const express = require('express');
const router = express.Router();

 router.post('/',(req,res)=>{
    console.log(req.body)
    const { name } = req.body;

    if(name){
        return res.status(200).send(`Well come ${name}`);
    }
    res.status(401).send('Please enter name!');
    return

})

module.exports = router;