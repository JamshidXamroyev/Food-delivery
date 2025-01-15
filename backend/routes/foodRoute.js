const express = require("express")
const foodControllers = require("../controllers/foodController")
const multer = require("multer")

const router = express.Router()

// Image store
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }   
})

const upload = multer({
    storage: storage, 
    limits: { fileSize: 5 * 1024 * 1024 }
})

router.post("/add", upload.single("image"),foodControllers.addFood)
router.get("/list" , foodControllers.getAll)  
router.delete("/remove/:id" , foodControllers.removeFood)  

module.exports = router