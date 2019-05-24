var dbutil = require("./dbutil")
function groRegister(gro_num, gro_name, gro_pw, gro_leader, gro_phone, gro_qq, succes) {

    var insert = "insert into `group`(`gro_num`, `gro_name`, `gro_pw`, `gro_leader`, `gro_phone`, `gro_qq`,`login_type`) values(?,?,?,?,?,?,1)"
    var query = "select * from `group` where gro_name=" + gro_name
    var params = [gro_num, gro_name, gro_pw, gro_leader, gro_phone, gro_qq]
    console.log(params)
    var connection = dbutil.createConnection()
    connection.connect();

    async function fn() {
        var state = await connection.query(query, (error, result) => {
            console.log(result + ' 95644')
            if (result == null) {
                // 阔以注册
                console.log('阔以注册')
                return true
            } else {
                console.log(error)
                // 账户已存在
                console.log('账户已存在')
                return false
            }
        })
        if (state) {
            connection.query(insert, params, function (error, result) {
                if (error == null) {
                    console.log('还不错')
                    succes("OK") // 触发回调 注册成功
                } else {
                    console.log(error)
                    succes("Fail") // 注册失败
                }
            })
        } else {

            succes(null)
        }
        connection.end()
    }
    fn()



}


module.exports = { "groRegister": groRegister }
