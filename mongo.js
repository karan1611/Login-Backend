const mongoose = require('mongoose');
const express = require ('express') //express is the framework in JS
const morgan  = require ('morgan')//it is used to connect the app to HTTP easily
const bodyParser = require('body-parser');//it is used to get the submitted inserted values

const Authroutes = require('./routes/Authrotes')
const Route = require('./routes/employeeroutes')
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
//testdb is the name of the mongo database

const db = mongoose.connection

db.on('error',(err)=>{
    console.log(err)
})

db.once('open',()=>{
    console.log("Database Connected")
})

const app= express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))//if the request is encoded we can use it
app.use(bodyParser.json())//if request is in json formate then we can work in or with it
app.use('/uploads',express.static('uploads'))

const PORT = process.env.PORT || 3000
//env helps for creating and reading yhe environment easily

app.listen(PORT ,()=>{
    console.log(`server running on the port ${PORT}`)
})

app.use('/api/employeeroutes',Route)
app.use('/api',Authroutes)