require('dotenv').config();
const jwt = require('jsonwebtoken');
const UserModel = require('../models/UserModel');
// const config = require('../config');
class UserController {
    static async signUp(req, res){
        console.log({body:req.body});
        try {
            const {fullName, email, password} = req.body;
            const user = await UserModel.findOne({ email });
            if(user){
                res.status(400).json({ message: "User already exists" });
            }else {
                console.log('Hjsafa sfsjakskfafFaf aFa');
                const newUser= await UserModel.create({fullName, email, password});
                console.log('after create');
                const token =jwt.sign({id: newUser.id }, process.env.SECRET_KEY, { expiresIn: "2h" });
                console.log('after token');
                res.status(201).json({id: newUser.id, token});
            }
        } catch (error) {
            res.status(500).json({ error, message: "Server error" });  
        }
    };
    static async signIn(req, res){
        try {
            const {email, password} = req.body;
            const user = await UserModel.findOne({ email });
            if(!user){
                res.status(400)
                .json({ values: null, success: false, message: "User not found" });
            }else {
                const match = await user.comparePassword(password);
                if(!match){
                    res.status(400)
                    .json({ values: null, success: false, message: "Wrong crendetials" });
                }
                const token =jwt.sign({id: user._id }, process.env.SECRET_KEY, { expiresIn: "2h" });
                res.status(201).json({id: user._id, email:user.email, fullName:user.fullName, token});
            }
        } catch (error) {
            res.status(500).json({ error, message: "Server error" });   
        }
    }
    static async getUsers(req, res) {
        try {
           const users = await UserModel.find({}).exec();
           res.status(200).json({success:true, data: users }); 
        } catch (error) {
            res.status(500).json({ error, message: "Server error" });
        }
    }
}
module.exports= UserController;