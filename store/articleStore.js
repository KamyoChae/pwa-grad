
export const state = () => {
    return {
        art: {},  
        artId:''
    };
};

export const mutations = {
    clickArt(state,arts){
        state.art = arts[0]  
    },  
    getArt(state){
        return state.art
    },
    setArtId(state, id){
        state.artId = id 
    }
};
