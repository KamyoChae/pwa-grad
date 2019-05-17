var dao = require('../dao/getAllSociety')
var path = new Map()
function getAllSociety(req,res){
    console.log("发送了getIndex")
    dao.getSociety(function(result){
        res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
        res.write(JSON.stringify(result))
        res.end()
        console.log(JSON.stringify(result))
    })
}
path.set("/getAllSociety", getAllSociety)


module.exports.path = path
