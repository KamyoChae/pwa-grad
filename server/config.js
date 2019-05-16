var fs = require("fs")

let conf = fs.readFileSync("./server/server.conf")

let confArr = conf.toString().split("\n")

var globalconf = {}

for ( let i = 0; i < confArr.length; i ++){
    globalconf[confArr[i].split("=")[0]] = confArr[i].split("=")[1]
}



module.exports = globalconf
