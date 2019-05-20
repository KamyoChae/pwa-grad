var dao = require('../dao/sendGroInfo')
var path = new Map()
function sendGroInfo(req,res){

    var data = ''
    req.on('data',function(chunk){
        data += chunk

    })
    req.on('end', function () {
        console.log(data)
        var postData = JSON.parse(data.toString())
        // console.log(': ' + postData )
        // 评论内容 评论人 评论人头像
        var text = postData.text
        var phone = postData.phone
        var qq = postData.qq
        var addr = postData.addr
        var groNum = postData.groNum
        var leader = postData.leader
        dao.sendGroInfo( text, phone, qq, addr, leader, groNum, function(result){

            res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
            res.write(result)
            res.end()
        })
    })

}
path.set("/sendGroInfo", sendGroInfo)



module.exports.path = path
