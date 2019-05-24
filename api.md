接口文档

创建表：

1. 文章表article
2. 学生表student
3. 社团表group
4. 留言表comment
5. 管理员表admin

### 普通用户

1. 拉取首页文章数据（浏览文章功能）

   /getIndex （完成）

   get

   返回数据格式：（文章表）

   | id     | 发布者 | 时间 | 浏览量 | 点赞量 | 文章标题 | 留言id     | 文章内容 |
   | ------ | ------ | ---- | ------ | ------ | -------- | ---------- | -------- |
   | art_id | user   | time | see    | like   | title    | comment_id | content  |

1. 学生用户登录（登录功能）

   /stuLogin（完成）

   post 

   | id     | 账户    | 密码   | 昵称     | 关注社团 | 封禁状态 |
   | ------ | ------- | ------ | -------- | -------- | -------- |
   | stu_id | stu_num | stu_pw | stu_name | stu_fork | state    |

   校验账号密码

   

2. 学生用户注册（注册功能）

   /stuRegister（完成）

   post

   表同上/stuLogin

   

3. 社团用户登录（登录功能）

   /groLogin（完成）

   post

   | id     | 社团/组织号 | 社团/     组织名 | 认证人     | 手机号码  | 密码   | 简介      | 联系地址    | 发布文章id列表   | 关注粉丝 | 社团照片 |
   | ------ | ----------- | ---------------- | ---------- | --------- | ------ | --------- | ----------- | ---------------- | -------- | -------- |
   | gro_id | gro_num     | gro_name         | gro_leader | gro_phone | gro_pw | gro_about | gro_address | gro_article_list | gro_fans | img_list |

   对比账号密码



1. 拉取单篇文章留言数据等（浏览文章功能）

   /getArtCom?art_id=1

   this.$axios.get('/getArticle?art_id=' id).then((res)={

   }) 

   返回：留言数据

   

   （完成）

   

2. 记录文章浏览量（记录浏览量）

   /setSee?id=1

   将某篇文章的浏览量+1

   （完成）

   

3. 获取所有社团列表（社团一览功能）

   /getAllSociety

   get 

   （完成）

   

4. 获取某个社团所有信息（社团信息）

   /getGroInfo

   （完成）

5. 搜索社团和搜索文章合并到 

   /getSearch（完成）

   ​	搜索社团功能

   ​		/searchGro

   ​	搜索文章功能

   ​		/searchArt

   

6. 申请认证社团组织（注册社团）

   /groRegister （完成）



### 学生用户

1. 留言评论

   /setComment?id=10（完成）

2. 点赞

   /setLike?id=10（完成）

3. 修改用户名

   /changeName（完成）

   post

4. 修改密码

   /changePw（完成）

   post

5. 关注社团

   /forkGro（完成）

6. 取消关注社团

   /unForkGro（完成）

7. 获取关注社团列表

   /getForkGro (完成)

   

   



### 社团用户

1. 修改社团资料

   /sendGroInfo （完成）

   post 一次发完

			- /editAbout 修改简介
		
			- /editAddress 修改地址
		
			- /editConnect  修改通信方式



/uploadImg 上传图片



1. 发布文章

   /sendArticle （完成）

   

2. 删除文章

   /deleteArticle（完成）

   

3. 举报学生用户

   /dangerStu?id=1（遗弃）

   

4. 修改密码

   /changePw（完成）



### 管理员用户

1. 发布公告

   /sendSystem（完成）

2. 审核认证(创建社团组织账号)

   /createdGro

3. 封禁用户

   /searchStu 先搜索学生 得到学生的数据显示

   /errorState（） 再 将学生信息封禁处理

4. 删除社团账号

   /deleteGrou（完成）

5. 删除学生账号

   /deleteStu

6. 创建管理员

   /createAdmin（完成）

社团 1 

学生 2 

管理员 0



完成用例：

1. 社团注册账户

2. 社团修改信息

3. 社团查看文章

4. 社团发布文章

5. 社团评论文章

6. 社团点赞文章

7. 社团删除文章

8. 社团修改密码

9. 社团查看系统通知

10. 社团获取文章bug列表修复

11. 学生注册用户

12. 学生修改姓名

13. 学生关注社团联动关注页与社团页

    

    

    

路由控制：

必须管理员登录才可以访问的页面。

当页面加载，读取cookie，







