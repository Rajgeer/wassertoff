const express = require('express');
const Authority = require('../middlewares');
const PostController=require('../controllers/post');
const CommentController= require('../controllers/comment');
const router = express.Router();

router.post('/', Authority.userAuth, PostController.addPost);
router.get('/', PostController.getPosts);
router.get('/:userId', PostController.getPostsByUserId)
router.post('/comment', Authority.userAuth, CommentController.addComment);

module.exports = router;
