var dbutil = require("./dbutil")
function unForkGro(gro_id, stu_num, succes) {
    if(gro_id != "undefined"){

        var query = "select stu_fork from `student` where stu_num=? "

        var params = [stu_num]
        var connection = dbutil.createConnection()
        connection.connect();
        var str = ''
        var stuFork = ''
        var params1 = []
        connection.query(query,params, (error, result)=>{
            // 查找文章中的评论索引数组
            if(error == null){
                stuFork = result[0].stu_fork
                var forkArr = stuFork.split(',')
                var newArr = forkArr.filter((el, index)=>{
                    return el != gro_id
                })
                var list = newArr.join(",")

                str = 'update `student` set stu_fork= ? where stu_num=?'
                params1 = [list, stu_num]
                connection.query(str, params1,  (error, result)=>{
                    // 返回评论
                    if(error == null){

                        succes("OK")
                    }else {
                        console.log('dao层==>getArticle接口出错')
                    }

                })

            }else {
                console.log('error')
            }
            connection.end()
        })

    }else {
        succes("Fail")
    }


}
module.exports = {"unForkGro": unForkGro}
