const express = require('express')
const router = express.Router()
const {AuthUser} = require('../controller/UserCont.js')
router.post('/auth/google',AuthUser)
// router.get('/auth/google',UserData)

module.exports = router
