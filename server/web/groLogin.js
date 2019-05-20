var dao = require('../dao/groLogin')
var path = new Map()
function groLogin(req,res){

    req.on('data',function(data){
        var postData = JSON.parse(data.toString())
        var userNum = postData.userNum
        var passWord = postData.userPw
        dao.groLogin(userNum, function(result){

            var resState = ''
            if(result == null || result.length == 0){
                console.log('失败')
                resState = 'Fail'
            }else {
                if(result[0].gro_pw == passWord){
                    console.log('成功')
                    var writed = {state:'OK', user_type: result[0].login_type, gro_num: result[0].gro_num,
                        gro_name: result[0].gro_name }
                    res.cookie("user_type", 1)
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
path.set("/groLogin", groLogin)



module.exports.path = path
