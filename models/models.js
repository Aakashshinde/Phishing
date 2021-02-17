const mongoose = require('mongoose')

const userdata = new mongoose.Schema({
    email: String,
    password: String,
})  

const user = mongoose.model('userdata',userdata)
module.exports = user
