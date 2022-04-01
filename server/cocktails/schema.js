let mongoose = require('mongoose')

let cocktailModel = mongoose.model("Cocktail", new mongoose.Schema({
  name: String,
  alcoholic: String,
  glass: String,
  instructions: String,
  image: String,
  ingredients: [String],
  amounts: [String],
}))

module.exports = cocktailModel
