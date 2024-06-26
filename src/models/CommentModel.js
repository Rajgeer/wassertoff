const mongoose = require('mongoose');
const Schema =  mongoose.Schema;
const CommentSchema = new Schema({
  content: { type: String, required: true },
  postId: { type: Schema.Types.ObjectId, ref:"Post", required: true },
  userId: { type: Schema.Types.ObjectId, ref:"User", required: true },
});

module.exports = mongoose.model('Comment', CommentSchema);
