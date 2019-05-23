var dbutil = require("./dbutil")
var time = require("../util/time")
function sendSystem(content, succes) {

    var nowTime = time.nowTime()
    console.log(nowTime)

    var query = "insert into `systems` (`sys_mess`, `sys_time`) values(?,?)"

    var params = [content, nowTime]
    var connection = dbutil.createConnection()
    connection.connect();
    connection.query(query, params, function (error, result) {
        if(error == null){
            succes("OK") // 触发回调

        }else {
            succes("Fail")
            console.log(error)
        }

        connection.end()
    })

}


module.exports = {"sendSystem": sendSystem}
