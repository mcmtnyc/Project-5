let mongoose = require('mongoose')

let Cocktail = new mongoose.Schema({
  name: String,
  alcoholic: Boolean,
  glass: String,
  instructions: String,
  ingredients: String,
})

module.exports = Cocktail
