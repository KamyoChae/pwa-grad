var dbutil = require("./dbutil")
function searchStu(query, succes) {

    var connection = dbutil.createConnection()
    connection.connect();
    var queryStu = "select `stu_id`, `stu_num`, `stu_name`, `stu_state`  from `student` where `stu_name` like '%"+query+"%'"
    connection.query(queryStu, (error, result)=>{
        // 返回评论
        if(error == null){
            succes(result)
            console.log("搜索查询了东西")
            console.log(result)
        }else {
            console.log(error)
        }
    })
    connection.end()
}
module.exports = {"searchStu": searchStu}
