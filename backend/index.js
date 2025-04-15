const express= require('express');
const mongoose = require('mongoose');
const jwt=require('jsonwebtoken');
const multer= require('multer');
const path =require('path');
const cors =require('cors');
require('dotenv').config();

const app= express();
const port = 8000;

app.use(express.json());
app.use(cors())
mongoose.connect(process.env.db,{})
.then(()=>{
    console.log('database connection successful')
})
.catch(()=>{
    console.log('database connection failed')
})

//API
app.get('/',(req,res)=>{
    res.send('hello panda')
})

//IMAGE STORAGE ENGINE
const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload=multer({storage:storage});

// CREATING UPLOAD ENDPOINT FOR IMAGES
app.use('/images',express.static('upload/images'))
app.post('/upload',upload.single('product'),(req,res)=>{//FIELDNAME IS PRODUCT
    res.json({
        success:1,
        image_url:`http://localhost:${port}/image/${req.file.filename}.`
    })
})

//SCHEMA FOR CREATING PRODUCTS
const Product = mongoose.model('product',{
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    new_price:{
        type:Number,
        required:true
    },
    old_price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true
    }
})

//API FOR FOR PRODUCT UPLOAD
app.post('/addproduct',async(req,res)=>{
    // const productModel = mongoose.model('product')
    // const {id,name,image,category,new_price,old_price,date,available} = req.body
    // const {newProduct} = req.body;
    // console.log(newProduct.id);

    let products = await Product.find({});
    let id;
    if (products.length>0){
        let last_product_array = products.slice(-1);
        let last_product=last_product_array[0];
        id = last_product.id+1;
    }else{
        id = 1;
    }

    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
        // date:req.body.date,
        // available:req.body.available
    })
     console.log(product);
     await product.save();
     console.log("save");
     res.json({
        success:true,
        name:req.body.name,
     })
})

// DELETE API
app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        message:req.body.name
    })
})

// API TO GET ALL PRODUCTS
app.get("/allproducts",async(req,res)=>{
    const products = await Product.find({});
    console.log("All products fetched")

    res.json({
        success:true,
        message:products
    })
})

app.listen(port,()=>{
    console.log(`server is running on port:${port}`)
});