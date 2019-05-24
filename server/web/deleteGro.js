var dao = require('../dao/deleteGro')
var url = require('url')
var path = new Map()
function deleteGro(req,res){

    var urlObj = url.parse(req.url, true).query

    var gro_num = urlObj.num // 获取该社团的id

    dao.deleteGro(gro_num, function(result){
        res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
        res.write(JSON.stringify(result))
        res.end()
        console.log(JSON.stringify(result))
    })
}
path.set("/deleteGro", deleteGro)

module.exports.path = path
