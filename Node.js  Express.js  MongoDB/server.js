const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const conn = require("./DB/conn")

const app = express();

//// Calling database connection  ///////
conn();

//// PORT connection ///////
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(bodyparser.json());


////Api Connections for using Servies ///////
const ServiceRoutes = require("./Routes/serviceRoutes");
app.use('/api' , ServiceRoutes);

////Api Connections for user ///////
const UserRoutes = require("./Routes/userRouter");
app.use("/user" , UserRoutes);


//// Post Listening///////
app.listen(PORT, (req, res)=>{
    console.log(`server run on Port ${PORT}`);
})