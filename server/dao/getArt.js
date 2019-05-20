var dbutil = require("./dbutil")
function getArt(artId, succes) {
    var query = "select * from `article` where art_id=?"
    var connection = dbutil.createConnection()
    connection.connect();
    connection.query(query, artId, function (error, result) {
        if(error == null){
            succes(result[0]) // 触发回调
        }else {
            console.log(error)
            succes("Fail")
        }
    })
    connection.end()
}


module.exports = {"getArt": getArt}
