var dao = require('../dao/stuRegister')
var path = new Map()
function stuRegister(req,res){

    req.on('data',function(data){
        var postData = JSON.parse(data.toString())

        var userName = postData.userName
        var passWord = postData.userPw
        // console.log(postData.userName)
        // console.log("发送了stuLogin")
        dao.stuRegister(userName, userName, passWord, function(result){

            res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
            res.write(result)
            res.end()
        })
    })

}
path.set("/stuRegister", stuRegister)



module.exports.path = path
