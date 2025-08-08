const express= require('express');

const adminRoute=express.Router()
const adminModel=require('../models/adminModel')

adminRoute.get('',async (req,res)=>{
     const ad=await adminModel.find()
    res.json({'msg':"success","value":ad})
    
})
adminRoute.post('',async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
     const ad= await adminModel.findOne({email:email})
    console.log(ad)
    
    if(ad && ad.password==password){
        return res.json({"msg":"success"})
    }else{
        return res.json({"msg":"failed"})
    }
})
 module.exports= adminRoute