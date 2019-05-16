var fs = require('fs')

var files = fs.readdirSync("./server/web/")


var controllerSet = []
var pathMap = new Map()
for (let i = 0; i<files.length; i++){
    var temp = require('./web/'+files[i])
    if(temp.path){
        for(var [key, val] of temp.path){
            if(pathMap.get(key) == null){
                pathMap.set(key, val)
            }else{
                throw new Error("url path异常, url:" + key)
            }
            controllerSet.push(temp)
        }
    }

}
module.exports = pathMap

