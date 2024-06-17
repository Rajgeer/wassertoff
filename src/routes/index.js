const express = require('express');
const Authority = require('../middlewares');
const UserController = require('../controllers/user');
const PostController=require('../controllers/post');
const CommentController= require('../controllers/comment');
const router = express.Router();

router.post('/signup', UserController.signUp);
router.post('/signin', UserController.signIn);
router.post('/post', Authority.userAuth, PostController.addPost);
router.get('/posts/:id', PostController.getPostsByUserId);
router.get('/posts', PostController.getPosts);
router.post('/comment', Authority.userAuth, CommentController.addComment);
// router.get('/')
router.get('/home', (req, res) => {
    res.send("Welcome in home");
})
module.exports = router;
