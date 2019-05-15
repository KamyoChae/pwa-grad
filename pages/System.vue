<template>
<div class="wrapper">
    <div class="content">
        <div class="time">2019-01-06</div> 
        <div class="text">这里是一段系统通知，这里是一段系统通知，这里是一段系统通知，这里是一段系统通知，这里是一段系统通知，这里是一段系统通知，这里是一段系统通知，这里是一段系统通知，这里是一段系统通知，</div>
    </div>
     <div class="content">
        <div class="time">2019-01-06</div> 
        <div class="text">这里是一段系统通知，这里是一段系统通知，这里是一段系统通知，这里是一段系统通知，这里是一段系统通知，这里是一段系统通知，这里是一段系统通知，这里是一段系统通知，这里是一段系统通知，</div>
    </div>
    <div class="content">
        <div class="time">2019-01-06</div> 
        <div class="text">这里是一段系统通知，这里是一段系统通知，这里是一段系统通知，这里是一段系统通知，这里是一段系统通知，这里是一段系统通知，这里是一段系统通知，这里是一段系统通知，这里是一段系统通知，</div>
    </div>
 
</div>

</template>

<script>
export default {

}
</script>

<style lang='stylus' scoped>
.wrapper
    width 100vw 
    min-height 100vh 
    font-size 2rem
    .content
        padding 2rem 1rem 0 1.5rem
        width 100vw
        min-width 5vh 
        text-align left 
        .time
            font-size 1rem
            text-align center
            line-height 2rem
        img 
            width 15vw
            height 15vw
            border-radius 50% 
            border 1px solid #ddd
            vertical-align top
            margin-right 1rem
        .text
            position relative
            display inline-block
            font-size 1rem
            width 70%
            text-align left 
            background #cfd6db
            padding .5rem 
            border-radius 4px
        .text:before
            content ''
            display inline-block
            position absolute
            left -2rem
            top 1rem
            width 0
            height 0
            border 1rem solid #cfd6db
            border-left 1rem solid transparent
            border-top .5rem solid transparent
            border-bottom .5rem solid transparent


</style>