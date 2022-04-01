let express = require('express')
let cocktailRouter = require('./cocktails/router')

let router = new express.Router()

router.use('/cocktails', cocktailRouter)

module.exports = router
