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

        var { content, user_name, imgSrc} = postData
        console.log( content, user_name, imgSrc)
        dao.setComment( content, user_name, imgSrc, function(result){

            res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
            res.write(result)
            res.end()
        })
    })

}
path.set("/setComment", setComment)



module.exports.path = path
