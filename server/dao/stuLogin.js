var dbutil = require("./dbutil")
var url = require("url")
function stuLogin(succes) {
    var query = "select stu_name from student"
    var params = url
    // console.log(params)
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


module.exports = {"stuLogin": stuLogin}
