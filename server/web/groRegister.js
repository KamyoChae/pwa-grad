var dao = require('../dao/groRegister')
var path = new Map()
function groRegister(req,res){

    req.on('data',function(data){
        var postData = JSON.parse(data.toString())
        console.log(': ' + postData )
        var {gro_num, gro_name, gro_pw, gro_leader, gro_phone, gro_qq} = postData

        // console.log(postData.userName)
        // console.log("发送了stuLogin")
        dao.groRegister(gro_num, gro_name, gro_pw, gro_leader, gro_phone, gro_qq, function(result){

            res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
            res.write(result)
            res.end()
        })
    })

}
path.set("/groRegister", groRegister)



module.exports.path = path
