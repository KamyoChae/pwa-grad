<template>
<div class="wrapper">
    <div class="aboutText" >
        {{about}}
    </div>
</div>

</template>

<script>
export default {
    props:['about'],
    data(){
        return{
            aboutText:'',
            showWrite:true
        }
    },

}
</script>

<style lang='stylus' scoped>
.wrapper 
    .write 
        width 100%
        height 100% 
        background red
</style>