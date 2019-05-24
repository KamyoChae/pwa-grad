var dao = require('../dao/getSystem')
var path = new Map()
function getSystem(req,res){
    dao.getSystem(function(result){
        res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
        res.write(JSON.stringify(result))
        res.end()
        console.log(JSON.stringify(result))
    })
}
path.set("/getSystem", getSystem)


module.exports.path = path
