import axios from 'axios';

export default {
    getAllTransaction(context, payload){
        console.log('PARAMS =>');
        console.log(payload);

        context.commit('setIsDataLoaded', false);
        context.commit('setErrMsg', null)
        
        axios.get(`${this.state.baseUrl}/api/v1/uco-transactions`, {
            headers: {
                'Authorization': `Bearer ${this.state.token}`
            }
        })
        .then(function (response) {
            console.log("RESPONSE =>");
            console.log(response.data);
            
            context.commit('setTransactions', response.data.data.uco_transactions);
            context.commit('setIsDataLoaded', true);
        })
        .catch(function (error) {     
            console.log(error);       
            context.commit('setErrMsg', error.response.data.message)
        });
    },

    reset(context){
        context.commit('setTransactions', []);
        context.commit('setIsDataLoaded', false);
        context.commit('setSuccessMsg', null);
        context.commit('setErrMsg', null);
    }
};