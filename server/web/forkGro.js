var dao = require('../dao/setSee')
var url = require('url')
var path = new Map()
function forkGro(req,res){

    console.log(url.parse(req.url, true).query)
    var urlObj = url.parse(req.url, true).query
    var gro_id = urlObj.gro_id // 获取该社团的id
    var stu_num = urlObj.stu_num // 学生账号

    dao.forkGro(gro_id, stu_num, function(result){
        res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
        res.write(JSON.stringify(result))
        res.end()
        console.log(JSON.stringify(result))
    })
}
path.set("/forkGro", forkGro)

module.exports.path = path
