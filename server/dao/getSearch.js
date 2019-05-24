var dbutil = require("./dbutil")
function getSearch(query, succes) {

    var connection = dbutil.createConnection()
    connection.connect();
    var queryGroName = "SELECT * FROM `group` WHERE `gro_name` like BINARY %学%"
    var queryArt = "SELECT * FROM `article` WHERE FIND_IN_SET("+query +", art_title)"

    connection.query(queryGroName, (error, result)=>{
        // 返回评论
        if(error == null){

            // succes(result)
            console.log("搜索查询了东西")
            console.log(result)
            // connection.query(queryArt)
        }else {
            console.log(error)
            console.log('dao层==>getGroArtList接口出错')
        }

    })

    connection.end()

} 
module.exports = {"getSearch": getSearch}
