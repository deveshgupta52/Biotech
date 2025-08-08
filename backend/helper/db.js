const mongoose=require('mongoose');
const dotenv =require('dotenv');
dotenv.config();

mongoose.connect(process.env.URL)
.then(()=>{
    console.log('mongodb connected')
}).catch((err)=>console.log(`error:${err}`));