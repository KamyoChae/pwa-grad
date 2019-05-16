var dao = require('../dao/stuLogin')
var path = new Map()
function stuLogin(req,res){

    req.on('data',function(data){
        var postData = JSON.parse(data.toString())

        var userType = postData.userType
        var userName = postData.userName
        var passWord = postData.userPw
        // console.log(postData.userName)
        // console.log("发送了stuLogin")
        dao.stuLogin(userName,userType, function(result){
            console.log(result)
            var resState = ''
            if(result == null || result.length == 0){
                console.log('失败')
                resState = 'Fail'
            }else {
                if(result[0].stu_pw == passWord){
                    console.log('成功')
                    resState = 'OK'
                }else {
                    console.log('匹配失败')
                    resState = 'Fail'
                }
            }
            // res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
            res.write(resState)
            res.end()
        })
    })

}
path.set("/stuLogin", stuLogin)
 


module.exports.path = path
