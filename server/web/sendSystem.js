var dao = require('../dao/sendSystem')
var path = new Map()
function sendSystem(req,res){

    var data = ''
    req.on('data',function(chunk){
        data += chunk

    })
    req.on('end', function () {
        console.log(data)
        var postData = JSON.parse(data.toString())
        var content = postData.text
        dao.sendSystem( content, function(result){

            res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
            res.write(result)
            res.end()
        })
    })

}
path.set("/sendSystem", sendSystem)



module.exports.path = path
