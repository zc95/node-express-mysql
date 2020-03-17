const mysql = require('mysql');

// 新建mysql连接池
const pool = mysql.createPool({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'q1w2e3r4',
  database: 'db_test'
})

// 连接数据库并查询
let query = function (sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        console.log('数据库连接异常')
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            console.log('数据库操作异常')
            reject(err)
          } else {
            console.log('数据库操作成功')
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}

module.exports = { query }