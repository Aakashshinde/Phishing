const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const connectdb = require('./db/connection')
const mongoose = require('mongoose')
const userdata = require('./models/models')
connectdb()
app.use(bodyparser.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.post('/',(req,res)=>{
    res.send("HEY  "  +  req.body.Username + "  "+ req.body.passwd)
    const user = new userdata({
        name: req.body.Username,
        password: req.body.passwd,
    })
    user.save()
    .then(()=>{
        console.log("user data saved")
    })
    .catch((err)=> console.log(err))
    
})
app.listen(4444,()=>{
    console.log("Server started")
})