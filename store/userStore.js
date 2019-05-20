
export const state = () => {
    return {
        userName: '王老吉',
        userType: '2',
        userNum: '2333'
    };
};

export const mutations = {
    getStuInfo(state, userObj){
        state.userName = userObj.NAME 
        state.userType = userObj.TYPE 
        state.userNum = userObj.NUM 
        console.log("输出一个userObj：-----------------"+JSON.stringify(userObj))
    }, 
    changeName(state,val){
        state.userName = val
    }
};
