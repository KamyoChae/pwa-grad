/**
 * @file appShell/appSidebar module
 * @author lavas
 */

export const SET_SIDEBAR_VISIBILITY = 'SET_SIDEBAR_VISIBILITY';

export const state = () => {
    return {
        arrList:[],

        show: false, // 是否显示sidebar

        // 头部条的相关配置
        title: {
            imageLeft: '',
            altLeft: '',
            iconLeft: 'home',
            text: '设置',
            imageRight: '',
            altRight: '',
            iconRight: ''
        },

        // user: {
        //     name: 'Lavas',
        //     email: 'lavas@baidu.com',
        //     location: 'Shanghai'
        // },

        // 分块组
        blocks: [
            {
                // 子列表1 
                list: [
                    {
                        text: '个人中心',
                        icon: 'sentiment_satisfied',
                        route: '/user',
                        check: true
                    },
                    {
                        text: '我的关注',
                        icon: 'sentiment_neutral',
                        route: '/focus',
                        check: true
                    },
                    {
                        text: '社团资料',
                        icon: 'sentiment_satisfied',
                        route: '/Society'
                    },
                    {
                        text: '系统消息',
                        // image: 'https://github.com/google/material-design-icons/blob/master/social/2x_web/ic_mood_bad_black_48dp.png?raw=true',
                        alt: 'mood-bad',
                        icon: 'sentiment_satisfied',
                        // route: '/detail/2'
                        route: '/system',
                        check: true
                    }, 
                    {
                        text: '退出系统',
                        icon: 'sentiment_neutral',
                        route: '/detail/3'
                    },
                    
                ]
            }
        ]
    };
};

export const mutations = {
    [SET_SIDEBAR_VISIBILITY](state, sidebarVisibility) {
        state.show = sidebarVisibility;
    },

    setBarList(state, val){
        state.arrList = val
        console.log('进入setBarList')
        console.log(val)
    }

};

export const actions = {

    /**
     * 展示侧边栏
     *
     * @param {Function} commit commit
     */
    showSidebar({commit}) {
        commit(SET_SIDEBAR_VISIBILITY, true);
    },

    /**
     * 隐藏侧边栏
     *
     * @param {Function} commit commit
     */
    hideSidebar({commit}) {
        commit(SET_SIDEBAR_VISIBILITY, false);
    }
};
