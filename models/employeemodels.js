const mongoose = require('mongoose')

const Schema = mongoose.Schema

const employeeSchema = new Schema({
    name:{
        type:String
    },
    designation:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    age:{
        type:Number
    },
    avatar:{
        type:String
    }
},
{timestamps:true})

//it can automatically manage create data and update data filed we don't have to di it manually

const employeemodels= mongoose.model('Employee', employeeSchema, 'karan')
module.exports = employeemodels