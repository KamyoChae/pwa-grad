var dbutil = require("./dbutil")
function deleteArticle(gro_num, art_id, succes) {

    var deleteArt = "delete from `article` where art_id=?"
    var getGroList = "select gro_article_list, art_count from `group` where gro_num = ?"
    var updateGroArtList = "update `group` set gro_article_list = ? , art_count = ? where gro_num = ?"

    var connection = dbutil.createConnection()
    connection.connect();
    connection.query(deleteArt, art_id, function (error, result) {
        // 删除文章
        if(error == null){
            // console.log(result)
            console.log("删除文章成功！")
            var artList = ''
            connection.query(getGroList, gro_num, function (error, result) {
                // 获取文章数据列表
                if(error == null){
                    console.log(result)
                    console.log(result[0].gro_article_list)
                    var art_count = Number(result[0].art_count) -1

                    var artArr = result[0].gro_article_list.split(",")
                    var newArr = artArr.filter((el, index)=>{
                        return el != art_id
                    })
                    artList=newArr.join(",")
                    console.log("获取文章列表成功" + artList)
                    connection.query(updateGroArtList, [artList, art_count, gro_num],  (error, result)=>{
                        // 更新文章列表
                        if(error == null){
                            console.log(result)
                            console.log("更新文章列表成功！")
                            succes("OK") // 触发回调
                        }else {
                            succes("Fail")
                            console.log(error)
                        }
                    })
                }else {
                    succes("Fail")
                    console.log(error)
                }

                connection.end()
            })

            // succes("OK") // 触发回调

        }else {
            succes("Fail")
            console.log(error)
        }
    })




}


module.exports = {"deleteArticle": deleteArticle}
