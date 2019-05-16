接口文档

创建表：

1. 文章表article
2. 学生表student
3. 社团表group
4. 留言表comment
5. 管理员表admin

### 普通用户

1. 拉取首页文章数据（浏览文章功能）

   /getIndex 

   get

   返回数据格式：（文章表）

   | id     | 发布者 | 时间 | 浏览量 | 点赞量 | 文章标题 | 留言id     | 文章内容 |
   | ------ | ------ | ---- | ------ | ------ | -------- | ---------- | -------- |
   | art_id | user   | time | see    | like   | title    | comment_id | content  |

1. 学生用户登录（登录功能）

   /stuLogin

   post 

   | id     | 账户    | 密码   | 昵称     | 关注社团 | 封禁状态 |
   | ------ | ------- | ------ | -------- | -------- | -------- |
   | stu_id | stu_num | stu_pw | stu_name | stu_fork | state    |

   校验账号密码

   

2. 学生用户注册（注册功能）

   /stuRegister

   post

   表同上/stuLogin

   

3. 社团用户登录（登录功能）

   /groLogin

   post

   | id     | 社团/组织号 | 社团/     组织名 | 认证人     | 手机号码  | 密码   | 简介      | 联系地址    | 发布文章id列表   | 关注粉丝 | 社团照片 |
   | ------ | ----------- | ---------------- | ---------- | --------- | ------ | --------- | ----------- | ---------------- | -------- | -------- |
   | gro_id | gro_num     | gro_name         | gro_leader | gro_phone | gro_pw | gro_about | gro_address | gro_article_list | gro_fans | img_list |

   对比账号密码



1. 拉取单篇文章内容、浏览量数据等（浏览文章功能）

   /getArticle?id=500

   get 

   获取数据之后，拿到留言id 再

   /getCom?id=20

   合并处理到一个接口，返回

   

2. 记录文章浏览量（记录浏览量）

   /setSee?id=1

   将某篇文章的浏览量+1

   

3. 获取所有社团列表（社团一览功能）

   /getAllGro

   get 

4. 获取某个社团所有信息（社团信息）

   /getGro?id=2

5. 搜索社团功能

   /searchGro

6. 搜索文章功能

   /searchArt

7. 申请认证社团组织

   /wantGro



### 学生用户

1. 留言评论

   /setComment?id=10

2. 点赞

   /setLike?id=10

3. 修改用户名

   /changeName

   post

4. 修改密码

   /changePw

   post

5. 关注社团

   /forkGro?id=10

   



### 社团用户

1. 修改社团资料

   /editAbout 修改简介

   /editAddress 修改地址

   /uploadImg 上传图片

   

2. 发布文章

   /sendArticle

   

3. 删除文章

   /deleteArticle

   

4. 举报学生用户

   /dangerStu?id=1

   

5. 修改密码

   /changePw



### 管理员用户

1. 发布公告

   /sendSystem

2. 审核认证(创建社团组织账号)

   /createdGro

3. 封禁用户

   /errorState

4. 删除社团账号

   /deleteGrou

5. 删除学生账号

   /deleteStu

   



