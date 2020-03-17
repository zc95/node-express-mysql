// index.js
const express = require('express')
const router = express.Router()
const place = require("../controllers/placeController.js")

// 获取数据库中的user表数据
router.get('/api/getPlaceList', place.getPlaceList)
router.get('/api/getComment', place.getComment)

module.exports = router;