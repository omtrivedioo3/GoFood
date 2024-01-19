const express= require('express')
const router=express.Router()
const Item=require('../models/Item')
const Category=require('../models/Category')

router.post('/enteritem', async (req, res) => {
    try {
      const { CategoryName, name, img,options, description } = req.body;
  
      // Create a new item
      const newItem = new Item({
        CategoryName,
        name,
        img,
        options,
        description
      });
  
      // Save the item to the database
      await newItem.save();
  
      res.status(200).json({ message: 'Item created successfully', item: newItem });
    } catch (err) {
      console.error(err);
      res.status(400).send('Server Error');
    }
  });




  router.post('/entercategory', async (req, res) => {
    try {
      const { CategoryName} = req.body;
  
      // Create a new category
      const newCategory = new Category({
        CategoryName
      });
  
      // Save the item to the database
      await newCategory.save();
  
      res.status(200).json({ message: 'category created successfully', category: newCategory });
    } catch (err) {
      console.error(err);
      res.status(400).send('Server Error');
    }
  });

module.exports=router;