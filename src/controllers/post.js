const PostModel = require("../models/PostModel");
class PostController {
  static async addPost(req, res) {
    try {
      const { title, content } = req.body;
      const post = new PostModel({ title, content, userId: req.query.userId });
      await post.save();
      res.status(201).json({ message: "Post add success", data: post });
    } catch (error) {
      res.status(500).json({ error, message: "Server error" });
    }
  }
  static async getPostsByUserId(req, res) {
    try {
      const posts = await PostModel.findOne({
        userId: req.params.userId,
      }).exec();
      res.status(200).json({ success: true, data: posts });
    } catch (error) {
      res.status(500).json({ error, message: "Server error" });
    }
  }
  static async getPosts(req, res) {
    try {
      const posts = await PostModel.find().populate('userId', '_id fullName email').exec();
      res.status(200).json({ success: true, data: posts });
    } catch (error) {
      res.status(500).json({ error, message: "Server error" });
    }
  }
}

module.exports = PostController;
