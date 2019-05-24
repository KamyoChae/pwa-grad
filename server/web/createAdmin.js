var dao = require('../dao/createAdmin')
var path = new Map()
function createAdmin(req,res){

    req.on('data',function(data){
        var postData = JSON.parse(data.toString())

        var userNum = postData.userNum
        var passWord = postData.userPw
        dao.createAdmin(userNum, passWord, function(result){
            if(result=="OK"){
                res.cookie("user_type", 0)
                res.cookie("is_login", 'true')
            }
            res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
            res.write(result)
            res.end()
        })
    })

}
path.set("/createAdmin", createAdmin)



module.exports.path = path
