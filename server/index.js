// 引入express模块
var express = require("express")

// 引入配置文件
var  globalconf = require("./config")

// 引入web层的模块，通过这个模块实现接口的调用
// var allStuContr = require("./web/allStudentController")

// 使用这个express框架
var app = new express()

// 告诉express框架，静态文件全部放在这个globalconf["page_path"]路径了
app.use(express.static(globalconf["page_path"]))

// url访问接口，调用allStuContr这个函数
// app.get("/getAll", allStuContr)

// 监听globalconf["port"]端口
app.listen(globalconf["port"])
