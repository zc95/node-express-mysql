const express = require('express')
const router = express.Router()
const { test } = require("../controllers/test")
const { getPlaceList, getComment, deletePlace } = require("../controllers/placeController")
const { register } = require("../controllers/userController")

router.get('/api/getPlaceList', getPlaceList)
router.get('/api/getComment/:placeId', getComment)
router.get('/api/deletePlace/:id', deletePlace)
router.get('/api/test', test)

router.post('/api/register', register)

module.exports = router;