var dbutil = require("./dbutil")
function forkGro(gro_id, stu_num, succes) {

    var query = "select gro_fans from `group` where gro_id=? "
    // 社团加一个粉丝

    var connection = dbutil.createConnection()
    connection.connect();
    connection.query(query, gro_id, (error, result)=>{
        // 查找文章中的评论索引数组
        if(error == null){
            console.log("--------" + result[0].gro_fans)
            var groFans = result[0].gro_fans
            groFans =  groFans - 0 + 1

            var addFans = 'update `group` set `gro_fans`=? where `gro_id`=?'
            var params = [groFans, gro_id]
            connection.query(addFans, params, (error, result)=>{
                // 返回评论
                if(error == null){
                    console.log('增加粉丝数量成功')
                    succes("OK")
                }else {
                    console.log(error)
                    console.log('dao层==>gorkGro接口出错')
                }
            })
            // 增加个人关注列表
            // 查询该学生用户的关注社团
            var str = 'select stu_fork from `student` where stu_num=? '
            var params1 = [stu_num]
            connection.query(str, params1, (error, result)=>{
                // 返回评论
                if(error == null){
                    console.log('查询学生关注社团成功')
                    if(result[0] != null){
                        var forkList = result[0].stu_fork + "," + gro_id
                        // 将关注写入学生表
                        var writeforkList = 'update `student` set stu_fork = ? where stu_num=?'
                        var paramsFork = [forkList, stu_num]
                        connection.query(writeforkList, paramsFork, (error,result)=>{
                            if(error == null){
                                console.log("插入成功")
                                // console.log(result)
                                // succes('OK')
                            }else {
                                console.log(error)
                                // succes('Fail')
                            }
                        })
                        connection.end()
                    }else {
                        console.log('查询结果为空')
                    }
                }else {
                    console.log(error)
                    console.log('dao层==>gorkGro接口出错')
                }
            })
        }else {
            console.log('error')
        }
    })
}
module.exports = {"forkGro": forkGro}
