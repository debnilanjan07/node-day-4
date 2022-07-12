// const express= require("express");
// const auth = require('./route/auth');
// const app = express();
// app.use('/auth',auth)
// app.use(express.json());
// app.get('/',(req,res)=>{
//     res.send("i am working")
// })

// app.listen(2000,()=>{
//     console.log("App is Running")
// })

const express = require('express');
const auth = require('./route/auth');
const app = express()
app.use(express.json());
app.use('/auth',auth)
app.get('/',(req,res)=>
{
    res.send('this is express sercer')
})
app.listen(2000, ()=>{
    console.log("applicaton is running")
})