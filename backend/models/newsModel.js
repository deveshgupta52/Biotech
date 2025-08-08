const mongoose= require('mongoose')
const newsSchema= mongoose.Schema({
    title:{
        type:String,
        unique:true
    },
    desc:{
        type:String
    }
});

const newsModel=mongoose.model('news',newsSchema);

module.exports=newsModel;
