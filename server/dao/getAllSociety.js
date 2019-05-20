var dbutil = require("./dbutil")
function getAllSociety(succes) {
    var query = "select `gro_id`, `gro_num`, `gro_name`, `gro_leader`,`gro_phone`, `gro_about`, `gro_address`, `gro_article_list`, `gro_fans`, `img_list`, `gro_qq`, `art_count` from `group` order by gro_id"
    var connection = dbutil.createConnection()
    connection.connect();
    connection.query(query, function (error, result) {
        if(error == null){
            succes(result) // 触发回调
        }else {
            console.log(error)
        }
    })
    connection.end()
}


module.exports = {"getAllSociety": getAllSociety}
