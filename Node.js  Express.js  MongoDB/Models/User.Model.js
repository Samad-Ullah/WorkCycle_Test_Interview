const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AuthSchema = new Schema({
    name:{
        type:String , required:true , trim :true

    },
    email : {
        type : String , required:true 
    },
    password:{
        type:String , required:true
    }
},
    {timestamp:true});

const Auth = mongoose.model('Auth' , AuthSchema);
module.exports = Auth;