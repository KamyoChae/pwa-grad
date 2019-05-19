var dao = require('../dao/stuLogin')
var path = new Map()
function stuLogin(req,res){

    req.on('data',function(data){
        var postData = JSON.parse(data.toString())

        var userName = postData.userName
        var passWord = postData.userPw
        // console.log(postData.userName)
        // console.log("发送了stuLogin")
        dao.stuLogin(userName, function(result){
            console.log(result)
            var resState = ''
            if(result == null || result.length == 0){
                console.log('失败')
                resState = 'Fail'
            }else {
                if(result[0].stu_pw == passWord){
                    console.log('成功')
                    var writed = {state:'OK', user_type: 0, stu_num: result[0].stu_num,
                        stu_name: result[0].stu_name }
                    res.cookie("user_type", 0)
                    res.cookie("is_login", 'true')

                    resState = JSON.stringify(writed)
                }else {
                    console.log('匹配失败')
                    resState = 'Fail'
                }
            }
            res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
            res.write(resState)
            res.end()
        })
    })

}
path.set("/stuLogin", stuLogin)
 


module.exports.path = path
