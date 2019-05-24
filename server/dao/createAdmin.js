var dbutil = require("./dbutil")
function createAdmin(num, pw, succes) {

    var insert = "insert into `admin`(`admin_name`, `num`, `password`, `login_type`) values(?,?,?,?)"

    var params = [num, num, pw, 0]
    console.log(params)
    var connection = dbutil.createConnection()
    connection.connect();
    connection.query(insert, params, (error, result) => {
            if (error == null) {
                // 阔以注册
                console.log('阔以注册')
                succes("OK")
            } else {
                console.log(error)
                // 账户已存在
                console.log('账户已存在')
                succes("Fail")
            }
        })

    connection.end()




}


module.exports = { "createAdmin": createAdmin }
