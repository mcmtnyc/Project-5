let express = require('express')
let router = require('./cocktails/router')
let router = require('./liquor/router')

let router = new express.Router()

router.use('/cocktails', equipmentRouter)
router.use('/liquor', shopRouter)

module.exports = router
