const { query } = require('../util/dbconfig.js')

// 注册
async function register (req, res) {
  let msg = await query('insert into user set ?', req.body)
  console.log(msg)
  res.json({})
}

module.exports = {
  register
};
