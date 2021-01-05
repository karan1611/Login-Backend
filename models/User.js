const mongoose = require ('mongoose')
const Schema = mongoose.Schema


//taking data of User in this formate
const userSchema = new Schema ({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    password:{
        type:String
    }
},{timestamps:true})


module.exports = mongoose.model('User',userSchema)