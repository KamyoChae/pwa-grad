var dao = require('../dao/getSociety')
var path = new Map()
function getSociety(req,res){
    console.log("发送了getIndex")
    dao.getSociety(function(result){
        res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
        res.write(JSON.stringify(result))
        res.end()
        console.log(JSON.stringify(result))
    })
}
path.set("/getSociety", getSociety)


module.exports.path = path
