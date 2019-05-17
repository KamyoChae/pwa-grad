var dao = require('../dao/sendArticle')
var path = new Map()
function sendArticle(req,res){

    var data = ''
    req.on('data',function(chunk){
        data += chunk

    })
    req.on('end', function () {
        console.log(data)
        var postData = JSON.parse(data.toString())
        // console.log(': ' + postData )
        var {title, text, user} = postData
        console.log(title, text, user)
        dao.sendArticle(title, text, user, function(result){

            res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
            res.write(result)
            res.end()
        })
    })

}
path.set("/sendArticle", sendArticle)



module.exports.path = path
