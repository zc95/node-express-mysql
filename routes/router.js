const express = require('express')
const router = express.Router()
const { getPlaceList, getComment } = require("../controllers/placeController")
const { register } = require("../controllers/userController")

router.get('/api/getPlaceList', getPlaceList)
router.get('/api/getComment', getComment)

router.post('/api/register', register)

module.exports = router;