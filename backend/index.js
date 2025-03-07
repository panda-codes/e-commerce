const express= require('express');
const mongoose = require('mongoose');
const jwt=require('jsonwebtoken');
const multer= require('multer');
const path =require('path');
const cors =require('cors');
require('dotenv').config();

const app= express();

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
    filename:(res,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload=multer({storage:storage});

app.listen(8000,()=>{
    console.log('server is running')
});