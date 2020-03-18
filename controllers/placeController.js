const { query } = require('../util/dbconfig.js')

// 获取滑板场地list
async function getPlaceList (req, res) {
  // 先查出所有的场地
  let result = await query('SELECT * FROM place')
  // 循环场地列表，根据每个场地id去图片表查出它的图片
  for (const item of result) {
    let imgListRes = await query(`SELECT * FROM image WHERE place_id = ${item.id}`)
    item.imgList = imgListRes || [];
  }
  res.json(result)
}

// 获取指定场地的评论
async function getComment (req, res) {
  let { placeId } = req.params
  if(!placeId) {
    res.json({
      code: 200,
      success: false,
      msg: "参数错误"
    })
    return
  }
  let sql = 'SELECT * FROM comment'
  if (placeId) {
    sql += ` WHERE place_id = ${placeId}`
  }
  let result = await query(sql)
  res.json(result)
}

// 删除场地
async function deletePlace (req, res) {
  let sql = `DELETE FROM place WHERE id = ${req.params.id}`
  await query(sql)
  res.json({
    code: 200,
    success: true,
    msg: "操作成功"
  })
}

module.exports = {
  getPlaceList,
  getComment,
  deletePlace
};
