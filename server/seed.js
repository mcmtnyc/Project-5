// import mongoose library
let mongoose = require('mongoose')

// for backwards compat
let mongooseConfig = { useNewUrlParser: true, useUnifiedTopology: true }

// connect our Node project to our MongoDB process
mongoose.connect('mongodb://127.0.0.1:27017/cocktails', mongooseConfig)

const Cocktail = require("./cocktails/schema")

/// Get cocktails in the wanted format to then push into array
/// Array to feed into .create()
let seedcocktails = []
/// JSON data from fetch
let data = require('./seedcocktails.json')
/// Loop thru JSONs to get prefered cocktail format that matches Schema
for (let i = 0; i < data.length; i++) {
  /// Get ingredients in to an array
  let ingredientsArray = []
  for (let j = 0; j < 15; j++){
    ingredientsArray.push(data[i].strIngredient[j])
  }
  /// Get amounts into an array
  let amountsArray = []
  for (let k = 0; k < 15; k++){
    amountsArray.push(data[i].strMeasure[k])
  }
    seedcocktails.push({
      name: data[i].strDrink,
      alcoholic: data[i].strAlcoholic,
      glass: data[i].strGlass,
      instructions: data[i].strInstructions,
      image: data[i].strDrinkThumb,
      ingredients: ingredientsArray,
      amounts: amountsArray,
    }
    )
    console.log(seedcocktails)
  }


// Insert data into database using array
Cocktail
  .deleteMany({})
  .then(()=> Cocktail.create(seedcocktails))
  .then(()=> {
    console.log("Inserted seed cockatils")
    mongoose.connection.close()
  })
  .catch(error => console.error("Error inserting cocktails", error))
  