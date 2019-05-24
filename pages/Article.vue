<template>

<div class="wrapper">
    <div class="content">
        <!-- 文章内容 -->
        <div class="content-title">
            <h2>{{art.art_title}}</h2>
            <div class="from">
                <span class="username">{{art.art_gro_name}}</span> 
                <span class="time">{{art.art_time}}</span>
                <span class="time delete" @click="deArt(art.art_id)" v-if="deleteArt">删除</span>
            </div>
        </div>

        <div class="content-text" v-html="art.content"> 
        </div>
        <div class="content-foot">
            <span class="iconfont">
                &#xe7b5; <span>{{art.art_see}} </span>
                &#xe669; <span>{{art.art_like}}</span>
            </span>
        </div>
    </div>
    <div class="comment">
        <!-- 评论 --> 
        <div class="com-item" v-for="(com, index) in comments" :key="com.com_id">
            <div class="usericon"></div>
            <div class="user">
                <span class="username">{{com.com_name}}</span>
                <span class="usercomment">{{com.com_content}}</span>
            </div>
            <span class="agree" ref="agrees" @click="addAgree(com.com_like, com.com_id, index)"><i class='iconfont'>&#xe644;<span class="agree_num" > {{com.com_like}}</span></i></span>
        </div>
         
    </div>
    <div class="setcomment">
        <!-- 编辑评论 -->
        <input type="text" placeholder="我有一个想法..." v-model="nowVal">
        <span class="ty iconfont" @click="setLike" ref="likeIcon">&#xe669; </span>

        <span class="send iconfont" @click="setComment">&#xe731;</span>
    </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import getCookie from '../static/js/getCookie'
export default {
    data(){
        return{
            comments:[],
            nowVal:'',
            artId : '',
            like:'',
            canLike:true,
            canAgree:true,
            likes:'',
            sees:'',
            art:'',
            uName:'',
            uNum: '',
            lastClikeIndex:'a',
            deleteArt:''
        }
    }, 
    methods:{
        deArt(id){
            // 删除文章 
            var num = JSON.parse(localStorage.getItem("user")).NUM
            this.$axios.get("/api/deleteArticle?art_id=" + id + "&gro_num=" + num).then((res)=>{
                console.log(res)
            })
        },
        setLike(){
            console.log("点赞开始" + this.canLike)
            var isLogin = getCookie('is_login')
            console.log("isLogin：" + isLogin)
            if(isLogin == "true"){
                if(this.canLike){
                    // 点击喜欢
                    console.log(this.artId)
                    this.$axios.get('/api/setLike?art_id=' + this.artId).then((res)=>{
                        console.log('点赞成功')
                        console.log(res)
                        if(res.data=="OK"){
                            this.likes += 1
                            this.$refs.likeIcon.innerHTML = '&#xe668; '
                            this.art.art_like = this.art.art_like -0+1
                            this.canLike = false 
                        }

                    })
                }
            }else{
                if(confirm("尚未登录，是否前往登录？")){
                    this.$router.push('/login')
                }else{

                }
            } 
        },
        addAgree(num, id, index){
            // 点赞评论
            console.log('点赞评论')
            if(this.lastClikeIndex != index){
                this.lastClikeIndex = index 
                num += 1
                this.$axios.get('/api/addAgree?com_like='+ num + '&com_id=' + id).then((res)=>{
                        console.log('点赞成功')
                        console.log(res)
                        if(res.data=="OK"){ 
                            this.$refs.agrees[index].innerHTML = `<i class='iconfont ' style="color:red">&#xe644;
                                                                <span class="agree_num" > ${num}</span>
                                                            </i>`
                           
                        }
                })
            }
            
        },
        setComment(){ 
            var isLogin = getCookie('is_login')
            if(isLogin == "true"){
                var artId = this.artId
                console.log(this.userName, this.nowVal, artId)
                var str = this.nowVal.trim()
                if(str != ''){
                    this.$axios.post('/api/setComment',{
                        name: this.userName,
                        val: this.nowVal,
                        artId: artId
                    }).then((res)=>{
                        console.log(res)
                        if(res.data.state == "OK"){ 
                        console.log(res)
                        var obj = {
                            com_like:0,
                            com_id:res.data.comID,
                            com_name:this.userName,
                            com_content:this.nowVal,
                        }
                        this.comments.push(obj)
                        }else{
                            console.log('数据错误：评论失败')
                        }
                    })
                }else{
                    alert('输入无效！')
                }
                
            }else{
                if(confirm("尚未登录，是否前往登录？")){
                    this.$router.push('/login')
                }else{

                }
            }
            

        }
    },
    // computed:{ 
    //     ...mapState('userStore', {
    //         userName: state => state.userName,
    //         userNum: state => state.userNum
    //     })
    // },
    mounted(){
        this.likes = this.art.art_like
        this.sees = this.art.art_see + 1
        this.uName = this.userName 
        this.uNum = this.userNum
        this.$axios.get('/api/setSee?art_id=' + this.artId).then((res)=>{
            console.log('浏览文章')
            console.log(res)
            if(res.data=="OK"){
                this.sees += 1 
            }
        })
    },
    created(){ 
        // 获取本地文章id 
        this.artId = localStorage.getItem("artId")

        this.$axios.get("/api/getArt?artId=" + this.artId).then((res)=>{
            console.log('输出获取到的文章')
            console.log(res.data)
            this.art = res.data
            
            // 获取本地存储的用户名 
            // 对比用户名是否与文章名字一致 
            // 不一致则不显示删除
            this.userName = JSON.parse(localStorage.getItem("user")).NAME
            console.log('检查art') 

            if(this.art.art_gro_name == this.userName){
                console.log('他俩名字一样')
                console.log(this.art.art_gro_name ,this.userName)
                this.deleteArt = true 
            }else{
                this.deleteArt = false
            }
 

        })
 
        this.$axios.get("/api/getArtCom?art_id=" + this.artId).then((res)=>{
            console.log('获得评论数据')
            console.log(res)
            this.comments = res.data 
        }).catch((err)=>{
            console.log("接口失效")
        })
    }
}
</script>

<style lang='stylus' scoped>
.wrapper
    background #f9f9f9
.content
    background #fff
    text-align left  
    .content-title
        padding 1rem 
        h2 
            line-height 1.5rem
            font-size 1.2rem
            padding 1rem 0
        .from 
            font-size .8rem
            color #888
            .username
                color #1976d2
    .content-text
        font-size 1rem
        padding 1rem
    .content-foot
        display flex 
        justify-content space-between
        padding  1rem
        font-size .9rem
        .iconfont 
            font-size 1rem 
            span 
                display inline-block 
                padding-right .5em
        

.comment
    padding-bottom 15vh
    background #f9f9f9

    .com-item
        display flex 
        padding 1rem 
        padding-bottom 0
        .usericon
            width 12vw
            height 12vw  
            border-radius 50%  
            background-image url(./user/images/user.jpg)
            background-size 100%
        .user 
            text-align left 
            flex 1
            padding-left .5rem 
            .username
                color #353535
                font-weight 600
                font-size 1rem 
                display block
                padding-bottom .2em
            .usercomment
                font-size 1rem
        .agree 
            padding 0 .5rem 0 .5rem 
            i   
                padding .3rem
                border-radius 50%
                font-size 1.4rem
                // border 1px solid #2196f3
                .agree_num
                    font-size 1rem  

.setcomment
    width 100vw
    position fixed
    bottom 0
    display flex 
    justify-content space-between
    background #fff 
    padding 1rem 
    text-align left 
    font-size 1rem
    input 
        width 60vw
        background #eee
        padding .5rem
        border-radius 1rem
    span.iconfont  
        display flex 
        padding .2em .8em
        color #fff
        border-radius 1rem 
        font-size 1.5em
        background #2196f3
        justify-content space-around
        align-items center 
            

        
</style>