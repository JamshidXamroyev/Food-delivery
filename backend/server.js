const express = require("express")
const cors = require("cors")
const foodRoute = require("./routes/foodRoute")
const mongoose = require("mongoose")
require("dotenv").config()

// Config
const app = express()
const port = process.env.PORT || 4000

// Endpoints
app.use("/api/food", foodRoute)
app.use("/images", express.static("uploads"))

// Middleware
app.use(express.json())
app.use(cors())

const startApp = async () => {
    try {
        await app.listen(port, () => console.log(`Server started on http://localhost:${port}`))
        await mongoose.connect(process.env.MONGO_DB)
    } catch (error) {
        console.log("Server ishga Tushmadi..")
    }
}

startApp()

