const authorize = (req,res,next)=>{
    console.log("authorize",req);
    const {user} = req.query
    if(user == 'jhone'){
        req.user = {name:'Jhone',id:3};
        console.log(req);
        next();
    }else{
        res.status(401).send('Unauthorized');
    }
    
};
module.exports = authorize;