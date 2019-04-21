<template>
<div class="wrapper">
    <div class="listItem">
        <div class="itemuser">
            <div class="userbox">

                <img src="./images/user.jpg" alt="">
                <div class="text">
                    <span class="username">张全蛋</span>
                    <span class="about">搞笑工作者</span>
                </div>
            </div>
            <div class="btn">关注</div>
        </div>

        <div class="itemuser">
            <div class="userbox">

                <img src="./images/user.jpg" alt="">
                <div class="text">
                    <span class="username">张全蛋</span>
                    <span class="about">搞笑工作者</span>
                </div>
            </div>
            <div class="btn">关注</div>
        </div>

        <div class="itemuser">
            <div class="userbox">

                <img src="./images/user.jpg" alt="">
                <div class="text">
                    <span class="username">张全蛋</span>
                    <span class="about">搞笑工作者</span>
                </div>
            </div>
            <div class="btn">关注</div>
        </div>
    </div>
</div>

</template>

<script>
export default {

}
</script>

<style lang='stylus' scoped>
.wrapper
    margin-top 0
    .listItem
            box-sizing border-box
            width 100% 
            .itemuser
                display flex 
                margin .2em .5em
                padding .5em
                border-radius .2em
                background #fff
                box-shadow 0 5px 10px #eee
                border 1px solid #ddd
                border-radius .2rem
                justify-content space-between
                align-items center
                .userbox
                    display flex 
                    flex-grow 2 

                    img 
                        width 1.2rem
                        height 1.2rem
                        margin-right 1em
                    .text 
                        display flex 
                        flex-direction column
                        justify-content space-around
                        padding .8em 0
                        .username 
                            font-size 1.1em
                        .about 
                            font-size .8em
                            color #888
                            
                .btn  
                    border-radius .2em  
                    border 1px solid #2196f3 
                    padding .5em 1em 
                    color #2196f3

</style>