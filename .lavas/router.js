import Vue from 'vue';
import Router from 'vue-router';

    
import _05d48850ba900a28b4e5254ac11731d2 from '@/pages/admin.vue';
    

    
import _9d49a922ebc8a6d77ca82c0a74289b98 from '@/pages/Appshell.vue';
    

    
import _4981029d4ca92a3ffe2016b33af9369e from '@/pages/Article.vue';
    

    
import _2e781e3cf7922f027a7e7810c67afb82 from '@/pages/article/_articleId.vue';
    

    
import _f7fc7554d202a317883db2ae067316d3 from '@/pages/detail/_id.vue';
    

    
import _201ca3456d5fcf89a8b32ad8e5f26ad3 from '@/pages/Edit.vue';
    

    
import _363e2eee689b6524fc5eaa6f1f9f62e0 from '@/pages/EditSysInfo.vue';
    

    
import _d2462dcf0c7beccd286c658e08187914 from '@/pages/Error.vue';
    

    
import _582bc0f4b63fc422db8f0761fd151d4d from '@/pages/Focus.vue';
    

    
import _9c84efdc08f75562da8d171a65f3b7a1 from '@/pages/groureigister/index.vue';
    

    
import _67830448037326425509e44bce7632b7 from '@/pages/Index.vue';
    

    
import _22e177b76dfd23c698f143c58ad36c22 from '@/pages/login/_userType.vue';
    

    
import _8f9fe6e42ccba998fd734f1d63055852 from '@/pages/login/index.vue';
    

    
import _14a21cc389e499cef748391c362b19fd from '@/pages/ResetInfo.vue';
    

    
import _a507d8ce2f10c40312d733dc36880137 from '@/pages/ResetPw.vue';
    

    
import _038de326b0270e97f9eef95b6bc74ed7 from '@/pages/Search.vue';
    

    
import _466e97e1e8e23aada71650fffd9afb67 from '@/pages/society/_count.vue';
    

    
import _e7a7a8be020f365e05e7ba53452bad18 from '@/pages/society/index.vue';
    

    
import _1b40ccf4805c185acae415dd1472d97b from '@/pages/System.vue';
    

    
import _80610be0ba4ec767fc8653da661d26b3 from '@/pages/thisisadmin.vue';
    

    
import _ee18dcd4240adcb96d7c141074854904 from '@/pages/User.vue';
    

    
import _2832b64bc86f2739fc251929dd48c651 from '@/pages/user/Useritem.vue';
    


let routes = [
    {
        "path": "/admin",
        "component": _05d48850ba900a28b4e5254ac11731d2,
        "meta": {},
        "name": "admin"
    },
    {
        "path": "/appshell",
        "component": _9d49a922ebc8a6d77ca82c0a74289b98,
        "meta": {},
        "name": "appshell"
    },
    {
        "path": "/article",
        "component": _4981029d4ca92a3ffe2016b33af9369e,
        "meta": {},
        "name": "article",
        "children": [
            {
                "path": ":articleId",
                "component": _2e781e3cf7922f027a7e7810c67afb82,
                "meta": {},
                "name": "articleArticleId"
            }
        ]
    },
    {
        "path": "/detail/:id",
        "component": _f7fc7554d202a317883db2ae067316d3,
        "meta": {},
        "name": "detailId"
    },
    {
        "path": "/edit",
        "component": _201ca3456d5fcf89a8b32ad8e5f26ad3,
        "meta": {},
        "name": "edit"
    },
    {
        "path": "/edit-sys-info",
        "component": _363e2eee689b6524fc5eaa6f1f9f62e0,
        "meta": {},
        "name": "editSysInfo"
    },
    {
        "path": "/focus",
        "component": _582bc0f4b63fc422db8f0761fd151d4d,
        "meta": {},
        "name": "focus"
    },
    {
        "path": "/groureigister",
        "component": _9c84efdc08f75562da8d171a65f3b7a1,
        "meta": {},
        "name": "groureigister"
    },
    {
        "path": "/",
        "component": _67830448037326425509e44bce7632b7,
        "meta": {},
        "name": "index"
    },
    {
        "path": "/login/:userType",
        "component": _22e177b76dfd23c698f143c58ad36c22,
        "meta": {},
        "name": "loginUserType"
    },
    {
        "path": "/login",
        "component": _8f9fe6e42ccba998fd734f1d63055852,
        "meta": {},
        "name": "login"
    },
    {
        "path": "/reset-info",
        "component": _14a21cc389e499cef748391c362b19fd,
        "meta": {},
        "name": "resetInfo"
    },
    {
        "path": "/reset-pw",
        "component": _a507d8ce2f10c40312d733dc36880137,
        "meta": {},
        "name": "resetPw"
    },
    {
        "path": "/search",
        "component": _038de326b0270e97f9eef95b6bc74ed7,
        "meta": {},
        "name": "search"
    },
    {
        "path": "/society/:count",
        "component": _466e97e1e8e23aada71650fffd9afb67,
        "meta": {},
        "name": "societyCount"
    },
    {
        "path": "/society",
        "component": _e7a7a8be020f365e05e7ba53452bad18,
        "meta": {},
        "name": "society"
    },
    {
        "path": "/system",
        "component": _1b40ccf4805c185acae415dd1472d97b,
        "meta": {},
        "name": "system"
    },
    {
        "path": "/thisisadmin",
        "component": _80610be0ba4ec767fc8653da661d26b3,
        "meta": {},
        "name": "thisisadmin"
    },
    {
        "path": "/user",
        "component": _ee18dcd4240adcb96d7c141074854904,
        "meta": {},
        "name": "user",
        "children": [
            {
                "path": "useritem",
                "component": _2832b64bc86f2739fc251929dd48c651,
                "meta": {},
                "name": "userUseritem"
            }
        ]
    },
    {
        "path": "/error",
        "component": _d2462dcf0c7beccd286c658e08187914,
        "meta": {},
        "name": "error",
        "alias": "*"
    }
];

Vue.use(Router);


/**
 * to 如果在这个列表中，始终采用从左到右的滑动效果，首页比较适合用这种方式
 *
 * @type {Array.<string>}
 * @const
 */
const ALWAYS_BACK_PAGE = ["index"];

/**
 * to 如果在这个列表中，始终采用从右到左的滑动效果
 *
 * @type {Array.<string>}
 * @const
 */
const ALWAYS_FORWARD_PAGE = [];

/**
 * 历史记录，记录访问过的页面的 fullPath
 *
 * @type {Array.<string>}
 */
let HISTORY_STACK = [];

/**
 * 用于存储历史记录到localStorage的key
 *
 * @type {String}
 * @const
 */
const LAVAS_HISTORY_ARRAY_STACK_LOCAL_KEY = 'LAVAS_HISTORY_ARRAY_STACK_LOCAL_KEY';

/**
 * 用于存储历史state记录到localStorage的key
 *
 * @type {String}
 * @const
 */
const LAVAS_HISTORY_STATE_STACK_LOCAL_KEY = 'LAVAS_HISTORY_STATE_STACK_LOCAL_KEY';

/**
 * 使用history API记录的state数组
 *
 * @type {Array}
 */
let HISTORY_STATE_STACK = [];

let supportHistory = false;

if (process.env.VUE_ENV === 'client') {

    // 是否支持history
    supportHistory = window.history && 'state' in history;

}

function getHistoryStateKey() {
    return history.state ? history.state.key : '';
}

// 存储数据到本地
function saveHistoryToLocal(key, data) {
    try {
        localStorage.setItem(key, typeof data === 'object' ? JSON.stringify(data) : data);
    }
    catch (err) {

    }
}

// 初始化history state
function initHistoryStateStack() {
    // 如果当前tab有历史条目，那么应该把之前存储的state list读取出来
    if (history.length > 1) {
        try {
            let historyState = JSON.parse(localStorage.getItem(LAVAS_HISTORY_STATE_STACK_LOCAL_KEY));
            if (historyState && historyState.length) {
                // 为了有效控制localStorage大小，每次读取时应该只读取不大于当前tab历史条目长度
                // 因为大于历史条目长度之前的记录都是过期的state，无需读取
                HISTORY_STATE_STACK = historyState.slice(-history.length);
            }
        }
        catch (err) {

        }
    }

    setTimeout(() => {
        // 首次访问的页面也要加入列表中，但要注意如果当前页面访问过（刷新）则应该替换
        if (HISTORY_STATE_STACK.length) {
            HISTORY_STATE_STACK[HISTORY_STATE_STACK.length - 1] = getHistoryStateKey();
        }
        else {
            HISTORY_STATE_STACK.push(getHistoryStateKey());
        }
    }, 300);

}

// 初始化history array
function initHistoryArrayStack(routerBase) {

    let firstPageFullPath = location.href.replace(location.origin + routerBase, '/');

    try {
        // 如果localStorage中有历史访问记录，且最新一条和当前访问的是同一个页面
        // 那应该把之前的记录也加进来，主要解决在访问过程中刷新导致history列表丢失的问题
        let historyStack = JSON.parse(localStorage.getItem(LAVAS_HISTORY_ARRAY_STACK_LOCAL_KEY));
        if (
            historyStack
            && historyStack.length
            && historyStack[historyStack.length - 1] === firstPageFullPath
        ) {
            HISTORY_STACK = historyStack;
        }
    }
    catch (err) {

    }

    // 首次访问的页面也要加入列表中
    if (HISTORY_STACK.indexOf(firstPageFullPath) === -1) {
        HISTORY_STACK.push(firstPageFullPath);
    }
}

/**
 * 用path记录判断当前是否是前进，true 表示是前进，否则是回退
 *
 * @param {Object} to 目标 route
 * @param {Object} from 源 route
 * @return {boolean} 是否表示返回
 */
function isForwardByArray(to, from) {

    // 根据 fullPath 判断当前页面是否访问过，如果访问过，则属于返回

    let index = HISTORY_STACK.indexOf(to.fullPath);
    if (index !== -1) {

        HISTORY_STACK.length = index + 1;
        return false;
    }

    return true;

}

/**
 * 用history state判断当前是否是前进，true 表示是前进，否则是回退
 *
 * @return {boolean} 是否表示返回
 */
function isForwardByHistory() {

    // 如果访问的页面state和之前访问过的页面相同，则属于返回

    let index = HISTORY_STATE_STACK.indexOf(getHistoryStateKey());

    if (index !== HISTORY_STATE_STACK.length - 1 && index !== -1) {
        HISTORY_STATE_STACK.length = index + 1;
        return false;
    }

    return true;
}

/**
 * 判断当前是否是前进，true 表示是前进，否则是回退
 *
 * @param {Object} to 目标 route
 * @param {Object} from 源 route
 * @return {boolean} 是否表示返回
 */
function isForward(to, from) {

    let res = true;

    // 使用history判断
    if (supportHistory) {
        res = isForwardByHistory();

        // 存储至localStorage
        setTimeout(() => {

            // 如果页面没访问过则把state加进来
            let pageKey = getHistoryStateKey();
            let index = HISTORY_STATE_STACK.indexOf(pageKey);
            if (res && index === -1) {

                HISTORY_STATE_STACK.push(pageKey);
            }

            saveHistoryToLocal(LAVAS_HISTORY_STATE_STACK_LOCAL_KEY, HISTORY_STATE_STACK);
        }, 300);
    }
    // 使用array判断
    else {
        res = isForwardByArray(to, from);

        if (res) {
            // 将 to.fullPath 加到栈顶
            HISTORY_STACK.push(to.fullPath);
        }

        saveHistoryToLocal(LAVAS_HISTORY_ARRAY_STACK_LOCAL_KEY, HISTORY_STACK);
    }

    // 以下属于强行更改方向系列
    // to 如果在这个列表中，始终认为是后退
    if (to.name && ALWAYS_BACK_PAGE.indexOf(to.name) !== -1) {

        res = false;
    }
    // 如果在这个列表中，始终认为是前进
    else if (to.name && ALWAYS_FORWARD_PAGE.indexOf(to.name) !== -1) {
        res = true;
    }

    return res;
}



const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition;
    } else {
        const position = {};
        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash;
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0
            position.y = 0
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return position;
    }
};



export const keepAlivePages = routes.filter(route => route.keepAlive || route.meta.keepAlive)
                            .map(route => route.name);

export function createRouter() {
    let router = new Router({
        mode: 'history',
        base: '/',
        scrollBehavior,
        routes
    });



    
    if (process.env.VUE_ENV === 'client') {
        if (supportHistory) {
            initHistoryStateStack();
        }
        else {
            initHistoryArrayStack(router.options.base);
        }
    }
    

    router.beforeEach((to, from, next) => {
        if (router.app.$store) {
            if (router.app.$store.state.pageTransition.enable) {
                
                let effect = isForward(to, from) ? 'slide-left'
                    : 'slide-right';
                
                router.app.$store.commit('pageTransition/setType', 'slide');
                router.app.$store.commit('pageTransition/setEffect', effect);
            }
        }
        next();
    });


    return router;
}
