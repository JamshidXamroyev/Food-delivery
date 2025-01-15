const foodModel = require("../models/food")
const fs = require("fs")

class foodControllers {
    async addFood(req, res) {
        try {
            const {name, description, price, category} = req.body
            let image_file = `${req.file.filename}`
            const addedFood = await foodModel.create({name, description, image: image_file, price, category})
            res.json(addedFood).status(200)
        } catch (error) {
            res.json({error: error.message}).status(400)
        }
    }

    async getAll(req, res, next){
        try {
            const foods = await foodModel.find()
            res.json(foods).status(200)
        } catch (error) {
            res.json({error: error.message}).status(400)
        }
    }

    async removeFood(req, res, next){
        try {
            const {id} = req.params
            const deletedItem = await foodModel.findByIdAndDelete(id)
            await fs.unlink(`uploads/${deletedItem.image}`, () => {})
            res.json(deletedItem).status(200)
        } catch (error) {
            res.json({error: error.message}).status(400)
        }
    } 
}

module.exports = new foodControllers()