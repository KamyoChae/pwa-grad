<template>
    <div class="app-search-page">
        <header>
            <v-btn light icon class="search-btn" @click.native="$router.go(-1)">
                <v-icon class="search-icon">arrow_back</v-icon>
            </v-btn>
            <form @submit.prevent="search">
                <input class="search-input" v-model="query" type="search" autocomplete="off" placeholder="请输入搜索词" autocapitalize="off" />
            </form>
            <v-btn light icon class="search-btn" @click.native="query = ''">
                <v-icon class="search-icon">close</v-icon>
            </v-btn>
        </header>


        <div v-if="loading" class="search-loading">
            <v-progress-circular indeterminate v-bind:size="70" class="primary--text"></v-progress-circular>
        </div>

        <div v-if="group.length || article.length" class="search-content">
            <v-list two-line v-if="group.length">
                <template v-for="item in group">
                    <v-list-tile avatar ripple v-bind:key="item.gro_id"  @click="toGroInfo(item.gro_id, item.gro_num)">
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.gro_name }}</v-list-tile-title>
                            <v-list-tile-sub-title class="grey--text ">{{ Number(item.gro_fans) }}人关注</v-list-tile-sub-title>
                            <v-list-tile-sub-title class="grey--text ">{{ item.gro_address }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-list-tile-action-text>社团组织</v-list-tile-action-text>
                            <!-- <v-icon class="grey--text text--lighten-1">star_border</v-icon> -->
                        </v-list-tile-action>
                    </v-list-tile> 
                </template>
            </v-list>
            <v-list two-line v-if="article.length">
                <template v-for="item in article" >
                    <v-list-tile avatar ripple v-bind:key="item.art_id" @click="toArticle(item.art_id)">
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.art_title}}</v-list-tile-title>
                            <v-list-tile-sub-title class="grey--text  " >{{ item.art_see }}浏览 &nbsp; {{ item.art_like }}喜欢</v-list-tile-sub-title>
                             <v-list-tile-sub-title class="grey--text ">{{ item.art_gro_name }}</v-list-tile-sub-title>
                      
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-list-tile-action-text>文章</v-list-tile-action-text>
                            <!-- <v-icon class="grey--text text--lighten-1">star_border</v-icon> -->
                        </v-list-tile-action>
                    </v-list-tile> 
                </template>
            </v-list> 
             
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

let state = {
    appHeaderState: {
        show: false
    }
};
function setState(store) {
    store.dispatch('appShell/appHeader/setAppHeader', state.appHeaderState);
}

export default {
    name: 'search', 
    data() {
        return {
            query: '',
            loading: false,
            data: [], // 存储了数据
            group:[],
            article:[],
        };
    },
    methods: {
        toGroInfo(id, num){
            console.log(id, num)
            var gro = {
                GROID:id,
                GRONUM:num 
            }

            localStorage.setItem('clickGro', JSON.stringify(gro))
            this.$router.push({name:'societyCount', params: { count: id}})
        },
        toArticle(id){
            console.log(id)
            localStorage.setItem("artId", id)
             
            this.$router.push({name:'articleArticleId', params:{articleId:id}})
        },
        async search() {

            // 把数据清空
            this.data = [];

            // 显示加载动画
            this.loading = true;

            // 让当前输入框失去焦点
            this.$el.querySelector('.search-input').blur();

            // 等待 1s，模拟加载中的效果
            await new Promise(resolve => {
                setTimeout(resolve, 1000);
            });
            // 发送请求搜索 
            this.$axios.get("/api/getSearch?query=" + this.query).then((res)=>{
                
                console.log(res)
                this.group = res.data.group
                this.article = res.data.article
            })

           

            // 设置搜索结果数据
            this.data = [
              
                {
                    title: '萤火虫 书画协会', // 协会名
                    headline: 'Summer BBQ', // 协会粉丝
                    subtitle: 'Wish I could come, but I\'m out of town this weekend.', 
                },
                 
            ];

            this.loading = false;
        }
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
header
    display flex
    align-items center
    height 52px
    box-shadow 0 2px 4px -1px rgba(0,0,0,.1) 
form
    flex 1

.search-input
    width 100%
    outline none
    font-size 16px
    height 50px

.search-btn
    color #959595

.search-loading
    margin-top 30%
    display flex
    justify-content center

.search-content
    margin-top 20px

li
    list-style-type none
    border-bottom 1px solid #eee
.grey--text 
    font-size: .9rem !important

</style>
