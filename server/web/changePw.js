var dao = require('../dao/changePw')
var path = new Map()
function changePw(req,res){
    console.log("测试修改密码")
    req.on('data',function(data){
        var postData = JSON.parse(data.toString())
        console.log(postData)
        var pw = postData.newpw
        var num = postData.num
        var uType = postData.uType
        dao.changePw(pw, num, uType, function(result){

            res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
            res.write(result)
            res.end()
        })
    })

}
path.set("/changePw", changePw)



module.exports.path = path
