var dbutil = require("./dbutil")
function getSystem(succes) {
    var query = "select * from systems order by sys_id desc"
    var connection = dbutil.createConnection()
    connection.connect();
    connection.query(query, function (error, result) {
        if(error == null){
            succes(result) // 触发回调
        }else {
            console.log(error)
            succes("Fail")
        }
    })
    connection.end()
}


module.exports = {"getSystem": getSystem}
