const express = require("express")
const userController = require("../controllers/user.controller")
const AuthMiddleware = require("../middleware/auth")
const router = express.Router()

router.post("/login", userController.Login)
router.post("/register", userController.Register)

module.exports = router