var dao = require('../dao/getArtCom')
var url = require('url')
var path = new Map()
function getArtCom(req,res){

    console.log(url.parse(req.url, true).query)
    var urlObj = url.parse(req.url, true).query
    var art_id = urlObj.art_id // 获取该文章的id

    /*
     * 通过art_id需要完成以下业务：
     * 查找文章的浏览量 增加一次
     * 查找文章的评论索引组
     * 通过索引组查找所有评论，
     * 将数据合并返回前端
     *
      * */

    dao.getArtCom(art_id, function(result){
        res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
        res.write(JSON.stringify(result))
        res.end()
        console.log(JSON.stringify(result))
    })
}
path.set("/getArtCom", getArtCom)

module.exports.path = path
