var dbutil = require("./dbutil")
function getIndex(succes) {
    var query = "select * from article order by art_id desc"
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


module.exports = {"getIndex": getIndex}
