var dbutil = require("./dbutil")
function groLogin(userName, succes) {

    var query = 'select * from `group` where gro_name=' + userName
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
