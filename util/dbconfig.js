var mysql = require('mysql');

// 数据库连接配置
var pool = mysql.createPool({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'q1w2e3r4',
  database: 'db_test'
})

// 对数据库进行增删改查操作的基础
function query (sql, callback) {
  pool.getConnection((err, conn) => {
    if (err) {
      console.log("连接数据库错误")
      console.log(err)
      return;
    }
    conn.query(sql, (err, rows) => {
      callback(err, rows)
      conn.release()
    })
  })
}

exports.query = query