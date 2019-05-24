var dbutil = require("./dbutil")
function errorState(query, succes) {

    var connection = dbutil.createConnection()
    connection.connect();
    var queryStu = "update `student` set `stu_state`=? where `stu_id`=? "
    connection.query(queryStu, [0, query], (error, result)=>{
        // 返回评论
        if(error == null){
            succes("OK")
            console.log("搜索查询了东西, errorState")
            console.log(result)
        }else {
            console.log(error)
        }
    })
    connection.end()
}
module.exports = {"errorState": errorState}
