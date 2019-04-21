<template>
    <div> 
        <IndexHot />
        <IndexArticle />  
    </div>
</template>

<script> 
import {mapActions} from 'vuex';
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
    metaInfo: {
        title: 'Home',
        titleTemplate: '%s - Lavas',
        meta: [
            {name: 'keywords', content: 'lavas PWA'},
            {name: 'description', content: '基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题'}
        ]
    },
    async asyncData({store, route}) {
        setState(store);
    },
    activated() {
        setState(this.$store);
    }
};
</script>

<style lang="stylus" scoped>
.content
    display flex
    align-items center
    justify-content center
    height 100%
    flex-wrap wrap
    h2
        font-size 46px
        font-weight 500
</style>
