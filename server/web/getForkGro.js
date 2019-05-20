var dao = require('../dao/getForkGro')
var url = require('url')
var path = new Map()
function getForkGro(req,res){
    var stuName = url.parse(req.url, true).query.stuName

    dao.getForkGro(stuName, function(result){
        res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
        res.write(JSON.stringify(result))
        res.end()
        console.log(JSON.stringify(result))
    })
}
path.set("/getForkGro", getForkGro)


module.exports.path = path
