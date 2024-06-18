const express = require('express');
const UserController = require('../controllers/user');
const router = express.Router();
router.post('/signup', UserController.signUp);
router.post('/signin', UserController.signIn);
router.get('/home', (req, res) => {
    res.send("Welcome in home");
})
module.exports = router;
