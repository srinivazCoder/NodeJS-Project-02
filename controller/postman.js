let postmanData = [
    {
        "id":1,
        "name" : 'Krishana'
    },
    {
        "id":2,
        "name" : 'Radha'
    },
    {
        "id":3,
        "name" : 'Keshaba'
    }
];

const {dataStream} = require("../data")

const getPhone = (req,res)=>{
    res.status(200).json({success:true , data:dataStream.map((e)=>e.phone)});
}

const postPhone=(req,res)=>{
    console.log(req.body)
    res.status(201).json({'message' : 'Success',data:req.body});
}

const getPostman=(req,res)=>{
    console.log("data")
    return res.status(200).json([...postmanData]);
}

const postPostman=(req,res)=>{
    const {name,id} = req.body;
    postmanData = [...postmanData,{name:name,id:id}]
    return res.status(200).json([...postmanData]);
}

const putPostman=(req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    console.log(id, name);
    console.log(postmanData)
    postmanData.forEach((data)=>{
        if(data.id==id){
            data.name= name
            res.status(200).send("Success!");
        }
    })
    res.status(400).send('Failed!');
}

const deletePostman=(req,res)=>{
    const {id} = req.params;
    // const {name} = req.body;
    console.log(id)
    const person = postmanData.find((i)=>i.id==id)
    if(!person){
       return  res.status(400).json({'message':'ID is not found'});
    }
    postmanData = postmanData.filter((data)=>data.id!=id)
    console.log(postmanData)
    return res.status(200).json({'message':'Successfully deleted!'});
}

module.exports = {
    getPhone,
    postPhone,
    getPostman,
    postPostman,
    putPostman,
    deletePostman
}