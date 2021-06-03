import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default{
    namespaced: true,
    state() {
        return {
            transactions: [],
            isSubmit: false,
            IsDataLoaded: false,
            successMsg: null,
            errMsg: null,
        };
    },
    mutations,
    actions,
    getters
}