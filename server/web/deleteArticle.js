var dao = require('../dao/deleteArticle')
var url = require('url')
var path = new Map()
function deleteArticle(req,res){

    var urlObj = url.parse(req.url, true).query
    var art_id = urlObj.art_id // 获取该社团的id
    var gro_num = urlObj.gro_num // 获取该社团的id

    dao.deleteArticle(gro_num, art_id, function(result){
        res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
        res.write(JSON.stringify(result))
        res.end()
        console.log(JSON.stringify(result))
    })
}
path.set("/deleteArticle", deleteArticle)

module.exports.path = path
