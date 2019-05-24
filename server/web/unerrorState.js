var dao = require('../dao/unerrorState')
var url = require('url')
var path = new Map()
function unerrorState(req,res){
    var urlObj = url.parse(req.url, true).query
    var query = urlObj.stu_id // 获取该用户的id
    dao.unerrorState(query, function(result){
        res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
        res.write(JSON.stringify(result))
        res.end()
        console.log(JSON.stringify(result))
    })
}
path.set("/unerrorState", unerrorState)

module.exports.path = path
