var dao = require('../dao/addAgree')
var url = require('url')
var path = new Map()
function addAgree(req,res){
    console.log('1111111111111111111111111111111')
    console.log(url.parse(req.url, true).query)
    var urlObj = url.parse(req.url, true).query
    var com_id = urlObj.com_id // 获取该评论的id
    var com_like = urlObj.com_like // 获取该评论的点赞
    console.log(com_id,com_like)
    dao.addAgree(com_id, com_like, function(result){
        res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
        res.write(JSON.stringify(result))
        res.end()
        console.log(JSON.stringify(result))
    })
}
path.set("/addAgree", addAgree)

module.exports.path = path
