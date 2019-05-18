var dbutil = require("./dbutil")
function getGroInfo(gro_id=1, succes) {

    var query = "select `gro_id`, `gro_num`, `gro_name`, `gro_leader`,`gro_phone`, `gro_about`, `gro_address`, `gro_article_list`, `gro_fans`, `img_list`, `gro_qq` from `group` where gro_id=? "

    var params = [gro_id]
    var connection = dbutil.createConnection()
    connection.connect();
    connection.query(query, params, (error, result)=>{
        // 查找文章中的评论索引数组
        if(error == null){
            succes(result) // 触发回调
            console.log(result)
        }else {
            console.log(error)
        }

    })
    connection.end()

}
// getGroInfo()
module.exports = {"getGroInfo": getGroInfo}
