var dbutil = require("./dbutil")
function stuLogin(userNum, succes) {

    var query = "select * from `student` where stu_num=?"
    console.log(userNum)
    var params = [userNum]
    var connection = dbutil.createConnection()
    connection.connect();
    connection.query(query, params, function (error, result) {
        if(error == null){
            succes(result) // 触发回调
        }else {
            console.log(error)
        }
    })
    connection.end()
}


module.exports = {"stuLogin": stuLogin}
