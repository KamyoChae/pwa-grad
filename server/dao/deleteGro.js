var dbutil = require("./dbutil")
function deleteGro(gro_num, succes) {
    console.log(gro_num)
    var deleteArt = "delete from `group` where `gro_num`=?"

    var connection = dbutil.createConnection()
    connection.connect();
    connection.query(deleteArt, gro_num, function (error, result) {
        // 删除社团
        if(error == null){
            console.log("删除社团成功")
            succes("OK") // 触发回调

        }else {
            succes("Fail")
            console.log(error)
        }
    })
    connection.end()
}

module.exports = {"deleteGro": deleteGro}
