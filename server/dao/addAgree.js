var dbutil = require("./dbutil")
function addAgree(com_id, com_like, succes) {

    var connection = dbutil.createConnection()
    connection.connect();
    var str = 'update `comment` set com_like= ? where com_id=?'
    var params = [com_like, com_id]
    connection.query(str, params,  (error, result)=>{
        // 返回评论
        if(error == null){
            succes("OK")
        }else {
            console.log('dao层==>getArticle接口出错')
        }

    })

    connection.end()



}
module.exports = {"addAgree": addAgree}
