export default {
    setUsers(state, payload){
        state.users = payload;
    },
    setIsDataLoaded(state, payload){
        state.isDataLoaded = payload;
    },
    setIsSubmit(state, payload){
        state.isSubmit = payload;
    },
    setSuccessMsg(state, payload){
        state.successMsg = payload;
    },
    setErrMsg(state, payload){
        state.errMsg = payload;
    },
};