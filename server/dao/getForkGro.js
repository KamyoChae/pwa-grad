var dbutil = require("./dbutil")
function getForkGro(stuNum , succes) {
    var query = "select `stu_fork` from `student` where stu_num=?"
    var params = [stuNum]

    var connection = dbutil.createConnection()
    connection.connect();
    connection.query(query, params, function (error, result) {
        if(error == null){
            try{
                if(result[0].stu_fork != null){
                    var stu_fork = result[0].stu_fork

                    var str = 'select `gro_id`, `gro_fans`, `gro_name`, `gro_num`, `art_count` from `group` where gro_id in '+'('+stu_fork+') '

                    connection.query(str,  (error, result)=>{
                        // 返回评论
                        if(error == null){

                            succes(result)
                        }else {
                            console.log(error)
                            console.log('dao层==>getArticle接口出错')
                        }

                        connection.end()
                    })
                }else {
                    succes("Fail") // 触发回调
                }
            }catch (e) {
                succes("Fail")
            }


        }else {
            console.log(error)
            succes("Fail")
        }
    })
}

module.exports = {"getForkGro": getForkGro}
