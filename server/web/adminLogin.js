var dao = require('../dao/adminLogin')
var path = new Map()
function adminLogin(req,res){

    req.on('data',function(data){
        var postData = JSON.parse(data.toString())

        var userNum = postData.userNum
        var passWord = postData.userPw
        dao.adminLogin(userNum, function(result){
            console.log(result)
            var resState = ''
            if(result == null || result.length == 0){
                console.log('失败')
                resState = 'Fail'
            }else {
                if(result[0].password == passWord){
                    console.log('成功')
                    var writed = {state:'OK', user_type: result[0].login_type, stu_num: result[0].num,
                        stu_name: result[0].admin_name }
                    res.cookie("user_type", 0)
                    res.cookie("is_login", 'true')

                    resState = JSON.stringify(writed)
                    console.log(resState)
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
path.set("/adminLogin", adminLogin)



module.exports.path = path
