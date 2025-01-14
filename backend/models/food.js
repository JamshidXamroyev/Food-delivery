const {model, Schema} = require("mongoose")

const foodSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    image: {type: String, required: true}
})

module.exports = model("Food", foodSchema)

