var dbutil = require("./dbutil")
function changePw(pw, num, uType, succes) {

    var query = "update `student` set stu_pw = ? where stu_num=?"
    if(uType == 1){
        // 社团类型的名字
        query = "update `group` set gro_pw = ? where gro_num=?"
    }
    console.log(pw, num, uType)
    var params = [pw, num,]
    var connection = dbutil.createConnection()
    connection.connect();
    connection.query(query, params, function (error, result) {
        if(error == null){
            console.log(result)
            succes("OK") // 触发回调
        }else {
            succes("Fail")
            console.log(error)
        }
    })
    connection.end()
}


module.exports = {"changePw": changePw}
