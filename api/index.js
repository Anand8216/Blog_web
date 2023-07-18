const express=require('express');
const app=express();
const User=require("./model/User");
const port =5000;
const cors = require('cors');
const mongoose=require('mongoose');
const connect_uri='mongodb+srv://anandshubham:Anand123@cluster0.lnecu3u.mongodb.net/?retryWrites=true&w=majority';
app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("<h1>Backend succesfull</h1>");
})
app.listen(port,()=>{
    console.log("port is listensing at 5000..");
})


//mongoDb

mongoose.connect(connect_uri).then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  //register

  app.post('/register',async(req,res)=>{
     const {username,password}=req.body;

     try{
      const userDoc = await User.create({
        username,
        password,
      });
      res.json(userDoc);
    } catch(e) {
      console.log(e);
      res.status(400).json(e);
    }

    

  });

  
