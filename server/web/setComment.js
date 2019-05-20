var dao = require('../dao/setComment')
var path = new Map()
function setComment(req,res){

    var data = ''
    req.on('data',function(chunk){
        data += chunk

    })
    req.on('end', function () {
        console.log(data)
        var postData = JSON.parse(data.toString())
        // console.log(': ' + postData )
        // 评论内容 评论人 评论人头像
        var content = postData.val
        var user_name = postData.name
        var artId = postData.artId
        var imgSrc = 'src:5648'
        dao.setComment( content, user_name, imgSrc, artId, function(result){

            res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
            res.write(result)
            res.end()
        })
    })

}
path.set("/setComment", setComment)



module.exports.path = path
