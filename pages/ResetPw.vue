<template>
<div class="wrapper">
    <UserMain color1="#ff9800" color2="#ff5722"/>
    <resetPw />
</div>

</template>

<script>

import UserMain from '@/components/user_com/UserMain'  
import resetPw from '@/components/user_com/resetPw' 


export default {
    components:{
        UserMain,
        resetPw,
    }
}
</script>

<style lang='stylus' scoped>

</style>