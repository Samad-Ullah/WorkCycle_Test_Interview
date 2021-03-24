const mongoose = require("mongoose");

const dotenv = require('dotenv');
dotenv.config();

const connDB = async()=>{
    await mongoose.connect(process.env.CONN_URI , { useNewUrlParser:true , useUnifiedTopology:true})
    console.log("MongoDB Connected")
}
module.exports = connDB;