var dao = require('../dao/getIndex')
var path = new Map()
function getIndex(req,res){
    console.log("发送了getIndex")
    dao.getIndex(function(result){
        res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
        res.write(JSON.stringify(result))
        res.end()
        console.log(JSON.stringify(result))
    })
}
path.set("/getIndex", getIndex)

function getIndex2(req,res){
    console.log(req)
    console.log("发送了getIndex")
}
path.set("/getIndex2", getIndex2)


module.exports.path = path
