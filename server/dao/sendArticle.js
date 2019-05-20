var dbutil = require("./dbutil")
var time = require("../util/time")
function sendArticle(art_title, art_text, art_gro_name, succes) {

    var nowTime = time.nowTime()
    console.log(nowTime)

    // 名字 时间 浏览量 点赞 标题 留言库id索引 文章内容
    // art_gro_name art_time art_see art_like art_title art_content
    var query = "insert into `article` (`art_gro_name`, `art_time`, `art_see`, `art_like`, `art_title`, `content`) values(?,?,?,?,?,?)"

    var params = [art_gro_name, nowTime, 0, 0, art_title, art_text]
    var connection = dbutil.createConnection()
    connection.connect();
    connection.query(query, params, function (error, result) {
        if(error == null){
            var insertId = result["insertId"]

            console.log("6666666666666666")
            var selectArtList = 'select `gro_article_list` from `group` where gro_name =? '
            connection.query(selectArtList,art_gro_name, (error,result)=>{
                if(error == null){

                    console.log("55555555555555555555555555")
                    var art_count = ''
                    var artList = ''
                    console.log(result[0])
                    if(result[0].gro_article_list != null){
                        artList = result[0].gro_article_list.split(",")
                        art_count = artList.length
                        artList.push(insertId)
                        artList = artList.join(",")
                    }else {
                        art_count = 1
                        artList = insertId
                    }

                    var upGroArtCount = 'update `group` set gro_article_list=?, art_count=? where gro_name =?'
                    var upGroArtCountParams = [artList, art_count, art_gro_name]
                    connection.query(upGroArtCount, upGroArtCountParams, (error,result)=>{
                        if(error == null){

                            succes("OK") // 触发回调


                            connection.end()
                        }else {
                            console.log(error)
                        }
                    })
                }else {
                    console.log(error)
                }
            } )

        }else {
            succes("Fail")
            console.log(error)
        }
    })
}


module.exports = {"sendArticle": sendArticle}
