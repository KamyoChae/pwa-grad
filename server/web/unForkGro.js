var dao = require('../dao/unForkGro')
var url = require('url')
var path = new Map()
function unForkGro(req,res){

    console.log(url.parse(req.url, true).query)
    var urlObj = url.parse(req.url, true).query

    var gro_id = urlObj.gro_id // 获取该社团的id
    var stu_num = urlObj.stu_num // 学生账号

    dao.unForkGro(gro_id, stu_num, function(result){
        res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
        res.write(JSON.stringify(result))
        res.end()
        console.log(JSON.stringify(result))
    })
}
path.set("/unForkGro", unForkGro)

module.exports.path = path
