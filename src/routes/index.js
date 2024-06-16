const express = require('express');
const Authority = require('../middlewares');
const UserController = require('../controllers/user');
const PostController=require('../controllers/post');
const router = express.Router();

router.post('/signup', UserController.signUp);
router.post('/signin', UserController.signIn);
router.post('/posts', Authority.userAuth, PostController.addPost);
router.get('/posts/:id', PostController.getPostsByUserId);
router.get('/post', PostController.getPosts);
router.get('/home', (req, res) => {
    res.send("Welcome in home");
})
module.exports = router;
