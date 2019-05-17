var dbutil = require("./dbutil")
function setSee(art_id=1, succes) {

    var query = "select art_see from article where art_id=? "

    var params = [art_id]
    var connection = dbutil.createConnection()
    connection.connect();
    var str = ''
    var seeNum = ''
    var params1 = []
    connection.query(query,params,  (error, result)=>{
        // 查找文章中的评论索引数组
        if(error == null){
            console.log(result[0].art_see)
            seeNum = result[0].art_see

            str = 'update `article` set art_see= ? where art_id=?'
            params1 = [seeNum+1, art_id]
            connection.query(str, params1,  (error, result)=>{
                // 返回评论
                if(error == null){

                    // succes(result)
                }else {
                    console.log('dao层==>getArticle接口出错')
                }

            })

        }else {
            console.log('error')
        }
        connection.end()
    })


}
setSee()
module.exports = {"setSee": setSee}
