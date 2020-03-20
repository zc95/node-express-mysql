const { query } = require('../util/dbconfig.js')

// 注册
async function test (req, res) {
  res.json({msg: '测试Jenkins成功1.1'})
}

module.exports = {
  test
};
