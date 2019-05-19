

/**
 * @file pageTransition module
 * @author lavas
 */

export const state = () => {
    return {
        userName: '王老吉',
        userType: '2',
        userNum: '2333'
    };
};

export const mutations = {
    getStuInfo(state,userObj){
        state.userName = userObj.NAME 
        state.userType = userObj.TYPE 
        state.userNum = userObj.NUM 
        console.log(state)
    }, 
};
