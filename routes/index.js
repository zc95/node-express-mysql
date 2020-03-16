// index.js

var express = require('express')
var router = express.Router()
const db = require('../util/dbconfig.js')

// 获取数据库中的user表数据
router.get('/place', (err, res) => {
  const sql = 'select * from place';
  db.query(sql, (err, result) => {
    if (err) {
      console.log("请求数据错误")
      console.log(err)
      return;
    }
    res.send(result)
  });
})

module.exports = router;