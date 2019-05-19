
export const state = () => {
    return {
        art: {}, 
    };
};

export const mutations = {
    clickArt(state,arts){
        state.art = arts[0]  
    }, 

};
