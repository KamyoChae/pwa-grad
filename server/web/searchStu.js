var dao = require('../dao/searchStu')
var url = require('url')
var path = new Map()
function searchStu(req,res){
    var urlObj = url.parse(req.url, true).query
    var query = urlObj.query // 获取该社团的id
    dao.searchStu(query, function(result){
        res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
        res.write(JSON.stringify(result))
        res.end()
        console.log(JSON.stringify(result))
    })
}
path.set("/searchStu", searchStu)

module.exports.path = path
