var dbutil = require("./dbutil")
function getGroArtList(list, succes) {
    var connection = dbutil.createConnection()
    connection.connect();
    var str = 'select * from `article` where art_id in '+'('+list+') order by art_time desc'
    connection.query(str,  (error, result)=>{
        // 返回评论
        if(error == null){

            succes(result)
        }else {
            console.log('dao层==>getArticle接口出错')
        }

    })

    connection.end()


}

module.exports = {"getGroArtList": getGroArtList}
