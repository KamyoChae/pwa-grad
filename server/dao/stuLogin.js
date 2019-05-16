var dbutil = require("./dbutil")
var url = require("url")
function stuLogin(userName,userType, succes) {

    var query = "select stu_pw from student order by stu_name=?"
    if(userType == 1){
        query = "select gro_pw from group order by gro_name=?"
    }
    var params = [userName]
    var connection = dbutil.createConnection()
    connection.connect();
    connection.query(query,params, function (error, result) {
        if(error == null){
            succes(result) // 触发回调
        }else {
            console.log(error)
        }
    })
    connection.end()
}


module.exports = {"stuLogin": stuLogin}
