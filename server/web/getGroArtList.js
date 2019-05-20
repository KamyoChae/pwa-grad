var dao = require('../dao/getGroArtList')
var url = require('url')
var path = new Map()
function getGroArtList(req,res){
    var urlData = url.parse(req.url, true).query
    var list = urlData.list

    dao.getGroArtList(list, function(result){
        res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
        res.write(JSON.stringify(result))
        res.end()
        console.log(JSON.stringify(result))
    })
}
path.set("/getGroArtList", getGroArtList)


module.exports.path = path
