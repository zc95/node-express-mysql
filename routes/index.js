// index.js
const express = require('express')
const router = express.Router()
const placeController = require("../controllers/placeController.js")

// 获取数据库中的user表数据
router.get('/api/getPlaceList', placeController.getPlaceList)
router.get('/api/getComment', placeController.getComment)

module.exports = router;