const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');


const app=express();

app.use(cors());

const mediaRoutes=require('./routes/media.js');

app.use('/api/v1/media',mediaRoutes);

//set the connection string of the project to manage the backend
const mongodbUri="mongodb://localhost:27017/uploadTask";

mongoose.connect(mongodbUri,{
    useNewUrlParser:true, 
});

mongoose.connection.on('connected',()=>{
    console.log('connected with the mongos ');
});



mongoose.connection.on('error',(err)=>{
    console.log('check Connnection Manually ',err);
});



app.listen(4000,()=>{
    console.log("app is running on port 4000");
})