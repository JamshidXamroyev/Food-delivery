const userModel = require("../models/user.model")
const validator = require("validator")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const generateToken = id => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}
class userController {
    async Login(req, res, next){
        try {
            const {email, password} = req.body

            // check user email exist
            const existUser = await userModel.findOne({email})
            if(!existUser){
                return res.json({ok: false, message: "Bu emailda foydalanuvchi topilmadi!"})
            }
            
            // Check password
            const checkPassword = await bcrypt.compare(password, existUser.password)
            if(!checkPassword){
                return res.json({ok: false, message: "Siz noto'g'ri parol kiritdingiz!"})
            }

            const token = await generateToken(existUser._id)

            return res.json({ok: true, message: "Siz tizimga kirdingiz!", token})
        } catch (error) {
            res.json({ok: false, message: error.message}).status(400)
        }
    }
    async Register(req, res, next){
        try {
            const {name, email, password} = req.body
            // exists user
            const exists = await userModel.findOne({email})
            if(exists){
                return res.json({ok: false, message: "Bu emailda foydalanuvchi mavjud!"})
            }

            // check user email
            if(!validator.isEmail(email)){
                return res.json({ok: false, message: "Emailni noto'g'ri kiritdingiz!"})
            }

            if(password.length < 8){
                return res.json({ok: false, message: "Iltimos, kuchliroq parol tanlang!"})
            }

            // hashing password
            const hashPassword = await bcrypt.hash(password, 10)

            // create new User and Token 
            const user = await userModel.create({name, email, password: hashPassword})
            const token = await generateToken(user._id)

            // Send response
            return res.json({ok: true, message: "Tabriklaymiz! Siz ro'yxatdan o'tdingiz!", token, user}).status(200)
        } catch (error) {
            res.json({ok: false, message: error.message}).status(400)
        }
    }
}

module.exports = new userController()