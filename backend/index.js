const express = require("express");
const app = express();
const mongoose = require("mongoose");
const orderRouter = require("./routes/orderRoutes");

//configure mongoose
const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  if(err){
    console.log(err)
    client.close();
  }else{
    console.log("Db Connected successfully")
  }
  });



app.use(express.json());
 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
 app.use("/api/orders", orderRouter)
module.exports = app;
