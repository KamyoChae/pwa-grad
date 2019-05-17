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
            succes("OK") // 触发回调
        }else {
            succes("Fail")
            console.log(error)
        }
    })
    connection.end()
}


module.exports = {"sendArticle": sendArticle}
