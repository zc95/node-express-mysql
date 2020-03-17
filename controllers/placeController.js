const db = require('../util/dbconfig.js')

// 获取滑板场地list
getPlaceList = (req, res) => {
  const sql = 'select * from place'
  db.query(sql, (err, result) => {
    if (err) {
      return
    }
    res.json(result)
  });
}

// 获取指定场地的评论
getComment = (req, res) => {
  let {placeId} = req.query
  let sql = 'select * from comment'
  if(placeId) {
    sql += ` where place_id = ${placeId}`
  }
  db.query(sql, (err, result) => {
    if (err) {
      return
    }
    res.json(result)
  });
}

module.exports = {
  getPlaceList,
  getComment
};
