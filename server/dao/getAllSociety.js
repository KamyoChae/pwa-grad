var dbutil = require("./dbutil")
function getAllSociety(succes) {
    var query = "select * from `group` order by gro_id"
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


module.exports = {"getAllSociety": getAllSociety}
