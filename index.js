const express = require("express");
const app = express();
require('dotenv')
const port = process.env.PORT || 5000
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.post('/users', (req, res) => {
    res.status(200).json({username:"Rajgeer kumar", email:'rajgeerpaswan123@gmail.com'});
})
app.get('/', (req, res) => {
    res.send('Hi Welcome to all')
})
app.listen(port, ()=> {
    console.log("App is running on ", port );
})