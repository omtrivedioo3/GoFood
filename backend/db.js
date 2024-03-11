const mongoose = require('mongoose');
const dotenv= require("dotenv");
dotenv.config();
// const mongoURI = process.env.MONGO_URL
console.log(process.env.MONGO_URL)
const mongoDB = async () =>{
  try{
      await mongoose.connect("mongodb+srv://omtrivedioo3:cHJmpFbd3uymbONe@cluster0.0nanz1g.mongodb.net/gofoodmern?retryWrites=true&w=majority");
      console.log("connect db successfully");
      const fetched_data = await mongoose.connection.db.collection("items").find({}).toArray(); 
  }catch(e){
      console.log("error from dbconnection:"+e.message);
  }
}

module.exports = mongoDB;