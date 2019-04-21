<template>
<div class="wrapper">
    <div class="listItem">
        <div class="itemnews">
            <div class="userbox">

                <img src="../../images/user.jpg" alt="">
                <div class="text">
                    <span class="username">系统通知</span>
                    <span class="about">张全蛋回复了你</span>
                </div>
            </div> 
        </div>
         <div class="itemnews">
            <div class="userbox">

                <img src="../../images/user.jpg" alt="">
                <div class="text">
                    <span class="username">系统通知</span>
                    <span class="about">张全蛋回复了你</span>
                </div>
            </div> 
        </div>
         <div class="itemnews">
            <div class="userbox">

                <img src="../../images/user.jpg" alt="">
                <div class="text">
                    <span class="username">系统通知</span>
                    <span class="about">张全蛋回复了你</span>
                </div>
            </div> 
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
            .itemnews
                display flex  
                border-radius .2em
                background #fff 
                justify-content space-between
                align-items center
                .userbox
                    display flex  
                    flex-grow 1 

                    img 
                        width 1rem
                        height 1rem
                        margin .5em     
                        border 1px solid #ddd
                        border-radius 50% 
                    .text 
                        width 100%
                        display flex 
                        flex-direction column
                        justify-content space-around
                        padding .5em 0  
                        border-top 1px solid #ddd 
                        border-bottom 1px solid #ddd  
                        .about  
                            font-size .9em
                            color #888
                             
</style>