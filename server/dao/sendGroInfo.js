var dbutil = require("./dbutil")
var time = require("../util/time")
function sendGroInfo( text, phone, qq, addr, leader, groNum, succes) {

    var nowTime = time.nowTime()
    console.log(nowTime)

    var query = "update `group` set `gro_about`=?, `gro_phone`=?, `gro_qq`=?, `gro_address`=?, `gro_leader`=?  where `gro_num`=?"

    var params = [text, phone, qq, addr, leader, groNum]
    var connection = dbutil.createConnection()
    connection.connect();
    connection.query(query, params, (error, result) =>{
        if(error == null){
            console.log('66666666666666666666')
            console.log(result)
            succes("OK")

        }else {
            console.log('777777777777777777777')
            console.log(error)
        }

    })
    connection.end()
}


module.exports = {"sendGroInfo": sendGroInfo}
