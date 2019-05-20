var dbutil = require("./dbutil")
function getArtCom(art_id=1, succes) {
    if(art_id != "undefined"){

        var query = "select comment_id from article where art_id=? "

        var params = [art_id]
        var connection = dbutil.createConnection()
        connection.connect();
        var str = ''
        var comList = ''
        connection.query(query,params,  (error, result)=>{
            // 查找文章中的评论索引数组
            if(error == null){
                // succes(result) // 触发回调
                comList = result[0].comment_id

                str = 'select * from `comment` where com_id in '+'('+comList+') order by com_like desc'

                connection.query(str, comList,  (error, result)=>{
                    // 返回评论
                    if(error == null){

                        succes(result)
                    }else {
                        console.log('dao层==>getArticle接口出错')
                    }

                })

            }else {
                console.log('error')
            }
            connection.end()
        })
    }else {
        succes("Fail")
    }



}

module.exports = {"getArtCom": getArtCom}
