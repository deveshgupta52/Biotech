const express= require('express');
const newsModel=require('../models/newsModel')

const newsRoute = express.Router();

newsRoute.get('',async(req,res)=>{
    const news= await newsModel.find()
    return res.json({
        'msg':"success",
        "value":news

    })
});



newsRoute.get('/:id',async(req,res)=>{
    const id=req.params.id;
    const news= await newsModel.findById(id)
    return res.json({
        'msg':"success",
        "value":news

    })

})

newsRoute.post('',async(req,res)=>{
    const news= await newsModel.create(req.body)
    return res.json({
        "msg":"success"
    })
})  

newsRoute.put('/:id',async(req,res)=>{
    const id=req.params.id;
    const news= await newsModel.findByIdAndUpdate(id,req.body);
     return res.json({
        "msg":"success",
        "value":news
    })

})

newsRoute.delete('/:id',async(req,res)=>{
    const id=req.params.id;
    const news= await newsModel.findByIdAndDelete(id);
     return res.json({
        "msg":"success"
    })

});

module.exports=newsRoute;