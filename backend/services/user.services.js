const UserModel = require('../model/user.model');
const jwt = require('jsonwebtoken');

class UserService{

    // Function for Registration
     static async registerUser(email,password){
        try {
            const createuser = new UserModel({email,password});
             return await createuser.save();
        } catch (err) {
            throw err;
        }
     }   

     // Function for Login to get mail id.
     static async checkUser(email) {
        try {
            return await UserModel.findOne({email});
        } catch (error) {
            throw error;
        }
     }

     static async generateToken(tokenData,secretKey,jwt_expiry){
        return jwt.sign(tokenData,secretKey,{expiresIn:jwt_expiry});
     }

     

}


module.exports = UserService; 