var dao = require('../dao/getSearch')
var url = require('url')
var path = new Map()
function getSearch(req,res){
    var query = url.parse(req.url, true).query.query
    console.log(query)
    dao.getSearch(query, function(result){
        res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"})
        res.write(JSON.stringify(result))
        res.end()
        console.log(JSON.stringify(result))
    })
}
path.set("/getSearch", getSearch)


module.exports.path = path
