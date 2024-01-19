const express= require('express')
const router=express.Router()
const Item=require('../models/Item')
const Category=require('../models/Category')
router.post('/foodData',async(req,res)=>{
  try {
    const fetched_data=await Item.find();
    const fetched_category=await Category.find();
    // console.log(fetched_data);
    res.send([fetched_data,fetched_category]);
  } catch (error) {
    console.log(error.message);
    res.send("server error")
  }
})

module.exports=router;