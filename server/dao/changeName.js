var dbutil = require("./dbutil")
function changeName(num, val, uType, succes) {

    var query = "update `student` set stu_name = ? where stu_num=?"
    if(uType == 1){
        // 社团类型的名字
        query = "update `group` set gro_name = ? where gro_num=?"
    }
    var params = [val, num]
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


module.exports = {"changeName": changeName}
