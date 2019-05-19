var dbutil = require("./dbutil")
function stuRegister(stu_num,stu_name,stu_pw, succes) {

    var insert = "insert into `student`(`stu_num`, `stu_name`, `stu_pw`, `stu_state`, `login_type`) values(?,?,?,1,2)"
    var query = "select * from `student` where stu_name=" + stu_name
    var params = [stu_num, stu_name, stu_pw]
    console.log(params)
    var connection = dbutil.createConnection()
    connection.connect();

    async function fn(){
        var state = await connection.query(query, (error,result)=>{
            if(result[0] == null){
                // 阔以注册
                console.log('阔以注册')
                return true
            }else {

                // 账户已存在
                console.log('账户已存在')
                return false
            }
        })
        if(state){
            connection.query(insert, params, function (error, result) {
                if(error == null){
                    console.log('还不错')
                    succes("OK") // 触发回调 注册成功
                }else {
                    // console.log(error)
                    succes("Fail") // 注册失败
                }
            })
        }else {

            succes(null)
        }
        connection.end()
    }
    fn()



}


module.exports = {"stuRegister": stuRegister}
