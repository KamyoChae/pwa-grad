// 引入express模块
var express = require("express")

// 引入配置文件
var  globalconf = require("./config")

var loader = require("./loader")

var cookie = require("cookie-parser")

// 使用express框架
var app = new express()

// 静态文件全部放在globalconf["page_path"]路径
app.use(express.static(globalconf["page_path"]))

app.use(cookie())

// 获取首页文章
app.get("/api/getIndex",loader.get('/getIndex'))


// 学生登录
app.post("/api/stuLogin",loader.get('/stuLogin'))

// 社团登录
app.post("/api/groLogin",loader.get('/groLogin'))

// 学生注册
app.post("/api/stuRegister",loader.get('/stuRegister'))

// 社团注册
app.post("/api/groRegister",loader.get('/groRegister'))

// 拉取社团列表
app.get("/api/getAllSociety", loader.get('/getAllSociety'))


// 获取文章内容评论
app.get("/api/getArtCom", loader.get('/getArtCom'))

// 获取社团信息
app.get("/api/getGroInfo", loader.get('/getGroInfo'))


// 下面接口必须登录状态进行
app.get('/api/*',function (req,res,next) {
    // console.log(req.cookies)
    if(req.cookies.is_login === "true"){
        next()
    }

})

// 修改名字
app.get("/api/changeName", loader.get('/changeName'))

// 修改密码
app.post("/api/changePw",loader.get('/changePw'))

// 发布文章
app.post("/api/sendArticle",loader.get('/sendArticle'))

// 增加文章浏览次数
app.get("/api/setSee", loader.get('/setSee'))

// 点赞文章
app.get("/api/setLike", loader.get('/setLike'))

// 关注社团
app.get("/api/forkGro", loader.get('/forkGro'))

// 发送评论
app.post("/api/setComment", loader.get('/setComment'))
/* 下面是即将要完善的接口 */



// 监听globalconf["port"]端口
app.listen(globalconf["port"])
