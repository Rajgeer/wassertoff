const CommentModel = require('../models/CommentModel');
class CommentController{

    static async addComment(req, res){
        try {
            const {userId, postId} = req.query;
            const comment=await CommentModel.create({...req.body, userId, postId});
            res.status(201).json({message:'Comment add success!', data:comment});
        } catch (error) {
            res.status(500).json({error, message:"Server Error"});
        }
    }
    static async getComment(){}
};

module.exports = CommentController;