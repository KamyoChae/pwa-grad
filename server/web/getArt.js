var dao = require('../dao/getArt')
var url = require('url')
var path = new Map()
function getArt(req,res){
    var artId = url.parse(req.url, true).query.artId

    dao.getArt(artId, function(result){
        res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
        res.write(JSON.stringify(result))
        res.end()
        console.log(JSON.stringify(result))
    })
}
path.set("/getArt", getArt)


module.exports.path = path
