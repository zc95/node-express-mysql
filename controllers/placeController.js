const { query } = require('../util/dbconfig.js')

// 获取滑板场地list
async function getPlaceList (req, res) {
  const sql = 'select * from place'
  let msg = await query(sql)
  res.json(msg)
}

// 获取指定场地的评论
async function getComment (req, res) {
  let {placeId} = req.query
  let sql = 'select * from comment'
  if(placeId) {
    sql += ` where place_id = ${placeId}`
  }
  let msg = await query(sql)
  res.json(msg)
}

module.exports = {
  getPlaceList,
  getComment
};
