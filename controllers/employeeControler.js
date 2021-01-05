const express = require('express')
const Employee = require ('../models/employeemodels')

//show list of the employee

const index= (req,res,next)=>{
    Employee.find()
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:"An error Occured!"
        })
    })

}
// Show Single Employee
const show= (req,res,next)=>{
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:"An Error Occured"
        })
    })
}       


//Add new Employee
const store=(req,res,next)=>{
    let employee= new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email:req.body.email,
        phone:req.body.phone,
        age: req.body.age
    })
    if(req.file){
        employee.avatar = req.file.path
    }
    employee.save()
    .then(response=>{
        res.json({
            message:'Employee Added Sucessfully'
        })
    })
    .catch(error=>{
        res.json({
            message:"An Error Occured"
        })
    })
}

//update an Employee
const update = (req,res,next)=>{
    let employeeID=req.body.employeeID

    let updateData={
        name: req.body.name,
        designation: req.body.designation,
        email:req.body.email,
        phone:req.body.phone,
        age: req.body.age 
    }
    Employee.findByIdAndUpdate(employeeID,{$set:updateData})
    .then(()=>{
        res.json({
            message:'Employee updated sucessfully!'
        })
    })
    .catch(error=>{
        res.json({
            message:"An erorr Occured"
        })
    })
}

const destroy = (req,res,next)=>{
     let employeeID=req.body.employeeID

     Employee.findByIdAndRemove(employeeID)

     .then(()=>{
         res.json({
             message:'Employee delted sucessfully'
         })
     })
     .catch(error=>{
         res.json({
             message:"opps, Error Occured"
         })
     }) 
}

module.exports={
    index,show,store,update,destroy
}