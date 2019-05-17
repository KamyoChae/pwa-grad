var dao = require('../dao/changeName')
var url = require('url')
var path = new Map()
function changeName(req,res){
    console.log("发送了changeName")
    console.log(url.params)
    dao.changeName(function(result){
        res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
        res.write(JSON.stringify(result))
        res.end()
        console.log(JSON.stringify(result))
    })
}
path.set("/changeName", changeName)


module.exports.path = path
