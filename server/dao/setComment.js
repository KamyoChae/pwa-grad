var dbutil = require("./dbutil")
var time = require("../util/time")
function setComment(content, user_name, imgSrc, artId, succes) {

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
            var comID = result['insertId']
            // succes("OK") // 触发回调

            var str = 'select comment_id from `article` where art_id=?'

            connection.query(str, artId,  (error, result)=>{
                // 返回评论
                if(error == null){
                    var comList = result[0].comment_id + "," + comID
                    // succes(result)

                    var upComList = 'update `article` set comment_id = ? where art_id=?'
                    var paramsUp = [comList, artId]
                    connection.query(upComList, paramsUp, (error, result)=>{
                        if(error == null){
                            console.log("评论插入成功")
                            var resp = JSON.stringify({state:'OK',comID:comID,})
                            succes(resp) // 触发回调
                        }else {
                            console.log("评论插入失败")
                            console.log(error)
                        }
                    })


                }else {
                    console.log(error)
                    console.log('dao层==>getArticle接口出错')
                }
                connection.end()
            })


        }else {
            succes("Fail")
            console.log(error)
        }
    })

}


module.exports = {"setComment": setComment}
