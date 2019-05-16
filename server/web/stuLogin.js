var dao = require('../dao/stuLogin')
var path = new Map()
function stuLogin(req,res){

    req.on('data',function(wa){
        console.log(wa.toString())
    })
    console.log("发送了stuLogin")
    dao.stuLogin(function(result){
        res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
        res.write('登录成功')
        res.end()
        console.log(JSON.stringify(result))
    })
}
path.set("/stuLogin", stuLogin)
 


module.exports.path = path
