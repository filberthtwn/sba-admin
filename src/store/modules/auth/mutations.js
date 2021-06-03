export default {
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