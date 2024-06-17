require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./src/routes');
const app = express();
const PORT = process.env.PORT||5000;
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  throw new Error('MONGO_URI is not defined in the environment variables');
}
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use('/apis', router);

mongoose.connect(mongoURI, {
    bufferCommands: true,
    dbName:"BackendTask",
    autoIndex: true,
    autoCreate: true
})
.then(()=>{
    console.log("Mongodb is Connected");  
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    })
})
.catch((error)=> {
    console.error(`MongoDB connection error: ${error}`);
});

