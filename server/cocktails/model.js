let mongoose = require('mongoose')
let schema = require('./schema')

let model = mongoose.model('Cocktail', schema)

module.exports = model
