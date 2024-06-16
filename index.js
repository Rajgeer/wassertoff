const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
const router = require('./src/routes');
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI|| 'mongodb+srv://devzonesoftech:D34XI23AZyQpbwG2@wasserstoff.wxajwyu.mongodb.net/';

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use('/apis', router);

mongoose
  .connect(MONGO_URI, {
    bufferCommands: true,
    dbName: "BackendTask",
    autoIndex: true,
    autoCreate: true,
  })
.then(() => {
    console.log("MongoDB is connected");
})
.catch((error) => {
    console.error(`MongoDB connection error: ${error}`);
});
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})
