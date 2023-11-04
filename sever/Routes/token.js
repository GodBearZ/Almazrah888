const express = require('express');
const router = express.Router();
const {findTokenOne,createToken,listToken} = require('../Controllers/token')

router.get('/api/token',listToken)

router.get('/api/token/:id', findTokenOne)

router.post('/api/token', createToken)

module.exports = router
