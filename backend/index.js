
const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv');
const adminRoute = require('./routes/adminRoute.js');
const db=require("./helper/db.js");
const newsRoute = require('./routes/newsRoute.js');
const app=express()
dotenv.config();
const port=process.env.PORT || 3000
app.use(express.json())
app.use(cors())

app.use('/api/news',newsRoute)
app.use('/api/admin',adminRoute)

app.listen(port,()=>{
    console.log(`server is running on port${port}`)

})