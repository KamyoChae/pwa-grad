var dao = require('../dao/setSee')
var url = require('url')
var path = new Map()
function setSee(req,res){

    console.log(url.parse(req.url, true).query)
    var urlObj = url.parse(req.url, true).query
    var art_id = urlObj.art_id // 获取该文章的id

    dao.setSee(art_id, function(result){
        res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
        res.write(JSON.stringify(result))
        res.end()
        console.log(JSON.stringify(result))
    })
}
path.set("/setSee", setSee)

module.exports.path = path
