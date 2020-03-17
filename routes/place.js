const express = require('express')
const router = express.Router()
const placeController = require("../controllers/placeController")

router.get('/api/getPlaceList', placeController.getPlaceList)
router.get('/api/getComment', placeController.getComment)

module.exports = router;