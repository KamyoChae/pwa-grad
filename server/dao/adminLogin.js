var dbutil = require("./dbutil")
function adminLogin(userNum, succes) {

    var query = "select * from `admin` where num=?"
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


module.exports = {"adminLogin": adminLogin}
