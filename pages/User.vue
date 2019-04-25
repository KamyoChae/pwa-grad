<template>
<div class="wrapper">
    <UserMain color1="#03a9f4" color2="#2196f3"/>
    <UserList />  
</div>

</template>

<script>

import UserMain from '@/components/user_com/UserMain'  
import UserList from '@/components/user_com/UserListNav'  

export default {
    data(){
        return {

        }
    },
    components:{
        UserMain,
        UserList,  
    }

}
</script>

<style lang='stylus' scoped>

.wrapper
    width 100vw 
</style>