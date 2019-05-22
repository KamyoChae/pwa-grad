<template>
    <div class="wrapper"> 
        <IndexHot />
        <IndexArticle />  
         <router-link tag="div" v-if="showEdit" class="toEdit" :to="{name:'edit'}"><i class="iconfont round_add_light">&#xe7a7;</i></router-link >   
    </div>
</template>

<script> 
import {mapState, mapActions} from 'vuex';
import IndexHot from '@/components/index_com/IndexHot'
import IndexArticle from '@/components/index_com/IndexArticle'

function setState(store) {
    store.dispatch('appShell/appHeader/setAppHeader', {
        show: true,
        title: 'Lavas',
        showMenu: true,
        showBack: false,
        showLogo: false,
        actions: [
            {
                icon: 'search',
                route: '/search'
            }
        ]
    });
}

export default {
    name: 'index',
    components:{
        IndexHot,
        IndexArticle,
    }, 
    async asyncData({store, route}) {
        setState(store);
    },
    activated() {
        setState(this.$store);
    },
    data(){
        return {
            showEdit:false
        }
    },
    computed:{
        ...mapState('userStore', {
            userType:state => state.userType
        })
    },
    created(){ 
        console.log(this.$store.state.userStore.userName )
        if(this.userType == 1){
            this.showEdit = true 
        }
    }
};
</script>

<style lang="stylus" scoped>
.wrapper 
    background #f9f9f9 !important
.toEdit
    position fixed 
    display block
    bottom 2rem
    right 2rem
    width 10vw
    height 10vw 
    border-radius 50%
    .round_add_light
        color #1976d2 
        font-size 10vw
</style>
