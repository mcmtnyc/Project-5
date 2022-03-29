let express = require('express')
let cocktailsRouter = require('./cocktails/router')
let liquorRouter = require('./liquor/router')

let router = new express.Router()

router.use('/cocktails', equipmentRouter)
router.use('/liquor', shopRouter)

module.exports = router
