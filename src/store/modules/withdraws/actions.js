import axios from 'axios';

export default {
    getAllWithdraw(context, payload){
        console.log('PARAMS =>');
        console.log(payload);

        context.commit('setIsDataLoaded', false);
        context.commit('setErrMsg', null)
        
        axios.get(`${this.state.baseUrl}/api/v1/withdraws`, {
            headers: {
                'Authorization': `Bearer ${this.state.token}`
            }
        })
        .then(function (response) {
            console.log("RESPONSE =>");
            console.log(response.data);
            
            context.commit('setWithdraws', response.data.data.withdraws);
            context.commit('setIsDataLoaded', true);
        })
        .catch(function (error) {     
            console.log(error);       
            context.commit('setErrMsg', error.response.data.message)
        });
    },

    updateStatus(context, payload){
        console.log('PARAMS =>');
        console.log(payload);

        context.commit('setIsSubmit', true);
        context.commit('setErrMsg', null)

        let id = payload.id;
        delete payload.id;
        
        axios.patch(`${this.state.baseUrl}/api/v1/withdraws/${id}`, payload,{
            headers: {
                'Authorization': `Bearer ${this.state.token}`
            }
        })
        .then(function (response) {
            console.log("RESPONSE =>");
            console.log(response.data);
            
            context.commit('setIsSubmit', false);
            context.commit('setWithdraws', response.data.data.withdraws);
            context.commit('setIsDataLoaded', true);
        })
        .catch(function (error) {     
            console.log(error);       
            context.commit('setErrMsg', error.response.data.message)
        });
    },

    reset(context){
        context.commit('setWithdraws', []);
        context.commit('setIsDataLoaded', false);
        context.commit('setSuccessMsg', null);
        context.commit('setErrMsg', null);
    }
};