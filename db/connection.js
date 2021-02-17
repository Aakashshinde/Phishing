const mongoose = require('mongoose')
const uri = "mongodb+srv://phishing:phishing@cluster0.97hw6.mongodb.net/phishing?retryWrites=true&w=majority"
connectionparams =  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
const connectdb =()=>{ mongoose.connect(uri,connectionparams)
.then(()=>{
    console.log("database connected")
})
.catch((err)=>{
    console.log(err)
    console.log("unable to connect database")
})}
module.exports = connectdb