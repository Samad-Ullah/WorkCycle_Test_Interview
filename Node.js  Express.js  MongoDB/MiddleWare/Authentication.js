const jwt = require('jsonwebtoken');

exports.requireLogin = (req , res , next)=>{
    try {
        if(req.headers.authentication){
            const token = req.headers.authentication.split('') [1];
            //verify token 
            const decode = jwt.verify(token , process.env.JWt_SECRET);
            //Attach token to req
            req.user = decode;
            next();
        }
        else{
            return res.status(400).json({message :"Unauthorized "});
        }
        
    } catch (error) {
        console.log(error)
        
    }
    
};