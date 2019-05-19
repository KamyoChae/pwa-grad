var dao = require('../dao/changeName')
var url = require('url')
var path = new Map()
function changeName(req,res){
    console.log("发送了changeName")

    console.log(url.parse(req.url, true).query)
    var urlObj = url.parse(req.url, true).query
    var num = urlObj.num
    var val = urlObj.vale
    var uType = urlObj.uType
    dao.changeName(num, val, uType, function(result){

        res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
        res.write(result)
        res.end()

    })
}
path.set("/changeName", changeName)


module.exports.path = path
