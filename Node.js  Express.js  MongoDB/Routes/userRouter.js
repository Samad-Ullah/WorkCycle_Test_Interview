const router = require("express").Router();
let User = require('../Models/User.Model');
const bcrypt =  require("bcrypt");
const jwt = require("jsonwebtoken");
const {requireLogin} = require('../MiddleWare/authentication')



router.route('/register').post(async(req,res)=>{
    const {name , email , password} = req.body;

    try {
        let user =await User.findOne({email})
        if(user){
            return res.status(400).json({error:"User Already Exits"})
        }
        const hashed_password = await bcrypt.hash(password , 15)
        const newuser =  new User({
            name,
            email,
            password:hashed_password
        })
        newuser.save()
        return res.status(201).json("user SuccessFully Register")
      

    } catch (error) {
        console.log(error)
        
    }
}) 



router.route('/login').post(async(req , res)=>{
    const {email , password} = req.body;
     try {
         let user = await User.findOne({email})
         if(!user){
             return res.status(400).json({errr :"User Not Registered"})
         }
         const matchpass = await bcrypt.compare(password , user.password)
         if(!matchpass){
             return res.json.status(400).json({err:"Invalid Credentials"})
         }
         const token = jwt.sign({_id:user._id} , process.env.JWT_SECRET , {expiresIn:"1h"});
         return res.json({ token })

     } catch (error) {
         console.log(error)
         
     }
});

/// Protected Route for giving services 

// after autorization you will give services to your costumers

router.get('/' ,requireLogin , async(req , res)=>{
    console.log(req.user)
    try {
        const user = await Admin.findById(req.user._id).select('-password');
        res.json(user);
        
    } catch (error) {
        console.log(error)
        
    }

})
module.exports = router;