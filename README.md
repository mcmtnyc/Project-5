# Project 5 Cocktail Database

Importing API into a local database and setting up routing for CRUD functions.

## Description

Using javascript and mongoose to fetch and seed data from cocktailDB to setup and fill a mongoDB local database. Using routers to conduct CRUD thru HTTP requests.

## Getting Started

### Dependencies

Requires Javascript, mongoDB and mongoose. Must be able to use experimental fetch for mongoose.

### Installing

Use homebrew and npm to run mongoose/mongoDB

### Executing program

Use Postman or httpie to issue CRUD commands

```
POST local.host:9000/cocktails // to add a cocktail, following schema in ./cocktails/schema.js
GET local.host:9000/cocktails // to view all cocktails
GET local.host:9000/cocktails/ // insert id ## to get cocktail//
PUT local.host:9000/cocktails/ // insert id ## to get cocktail and update//
DELETE local.host:9000/cocktails/ // insert id ## to delete//
```

## Authors

Contributors names and contact info

Mel T
GA SEI
