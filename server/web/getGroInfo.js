var dao = require('../dao/getGroInfo')
var url = require('url')
var path = new Map()
function getGroInfo(req,res){

    console.log(url.parse(req.url, true).query)
    var urlObj = url.parse(req.url, true).query
    var art_id = urlObj.gro_id // 获取该社团的id

    dao.getGroInfo(gro_id, function(result){
        res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
        res.write(JSON.stringify(result))
        res.end()
        console.log(JSON.stringify(result))
    })
}
path.set("/getGroInfo", getGroInfo)

module.exports.path = path
