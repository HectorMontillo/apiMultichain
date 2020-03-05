const express = require('express')
const api = require('../controllers/api')

const router = express.Router()

router.post('/suma', api.suma)

module.exports = router