var dbutil = require("./dbutil")
function groLogin(userNum, succes) {

    var query = 'select * from `group` where gro_num=' + userNum
    var connection = dbutil.createConnection()
    connection.connect();
    connection.query(query, function (error, result) {
        if(error == null){
            succes(result) // 触发回调
        }else {
            console.log(error)
        }
    })
    connection.end()
}


module.exports = {"groLogin": groLogin}
