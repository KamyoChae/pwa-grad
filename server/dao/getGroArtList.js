var dbutil = require("./dbutil")
function getGroArtList(list, succes) {
    var connection = dbutil.createConnection()
    connection.connect();
    console.log(list)
    var newArr = list.split(",")
    var arr = newArr.filter((el)=>{
        return el - 0 !=0
    })
    var newList = arr.join(",")
    var str = 'select * from `article` where art_id in ('+newList+') order by art_time desc'
    connection.query(str,  (error, result)=>{
        // 返回评论
        if(error == null){

            succes(result)
        }else {
            console.log(error)
            console.log('dao层==>getGroArtList接口出错')
            // connection.end()
        }

    })

    connection.end()


}

module.exports = {"getGroArtList": getGroArtList}
