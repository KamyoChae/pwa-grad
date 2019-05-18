var dbutil = require("./dbutil")
var time = require("../util/time")
function setComment(content, user_name, imgSrc, succes) {

    var nowTime = time.nowTime()
    console.log(nowTime)


    // 评论内容 评论人 评论人头像
    //
    var query = "insert into `comment` (`com_name`, `com_ctime`,  `com_like`, `com_img`, `com_content`) values(?,?,?,?,?)"

    var params = [user_name, nowTime, 0, imgSrc, content]
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


module.exports = {"setComment": setComment}
