const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const serviceSchema = new Schema({
    Title:{
        type:String , required:true 

    },
    Description : {
        type : String , required:true 
    },
    Price:{
        type:Number , required:true
    },
    Location:{
        type:Array  ,required:true
    },
    Images:{
        type:Array  , required:true
    }
},
    {timestamp:true});

const service = mongoose.model('Service' , serviceSchema);
module.exports = service;