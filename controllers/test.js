const { query } = require('../util/dbconfig.js')

// 注册
async function test (req, res) {
  res.json({msg: '测试成功'})
}

module.exports = {
  test
};
