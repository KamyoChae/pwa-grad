
export const state = () => {
    return {
        userName: '李白',
        userType: '',
        userNum: ''
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
