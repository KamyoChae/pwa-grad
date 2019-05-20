var dao = require('../dao/getIndex')
var path = new Map()
function getIndex(req,res){
    dao.getIndex(function(result){
        res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
        res.write(JSON.stringify(result))
        res.end()
        console.log(JSON.stringify(result))
    })
}
path.set("/getIndex", getIndex)


module.exports.path = path
