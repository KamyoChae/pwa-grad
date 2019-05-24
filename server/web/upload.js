var path = new Map()

function upload(request, response) {

    var imgType = request.file.originalname.split(".")[1]
    var path = request.file.path
    

    console.log(request.file.size) // 文件大小
    console.log(request.file.mimetype) // 文件类型
    console.log(request.file.originalname) // 文件名

    console.log(request.file.path) // 文件存储路径
    console.log(request.file.filename) // 服务器中文件的路径=文件名
    console.log(request.file.fieldname) // 服务器中文件名
    console.log(request.file.destination) // 文件的服务器文件夹

    response.end("finish")
}
path.set("/upload", upload)

module.exports.path = path
