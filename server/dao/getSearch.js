var dbutil = require("./dbutil")
function getSearch(query, succes) {

    var connection = dbutil.createConnection()
    connection.connect();
    var queryGroName = "select `gro_id`, `gro_num`, `gro_name`, `gro_leader`,`gro_phone`, `gro_about`, `gro_address`, `gro_article_list`, `gro_fans`, `img_list`, `gro_qq`, `art_count`  from `group` where `gro_name` like '%"+query+"%'"
    var queryArt = "SELECT * FROM `article` WHERE `art_title` like '%"+query+"%'"

    connection.query(queryGroName, (error, result)=>{
        // 返回评论
        if(error == null){

            // succes(result)
            console.log("搜索查询了东西")
            console.log(result)
            var obj = {
                group:result
            }
            connection.query(queryArt, (error, result)=>{
                if(error == null){
                    console.log(result)
                    obj.article =result

                    succes(obj)
                }else {
                    console.log(error)
                    succes(obj)
                }

            connection.end()
            })
        }else {
            console.log(error)
            console.log('dao层==>getGroArtList接口出错')
        }

    })


}
module.exports = {"getSearch": getSearch}
