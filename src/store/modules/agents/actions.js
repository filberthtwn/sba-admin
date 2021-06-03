import axios from 'axios';

export default {
    getAllAgent(context, payload){
        console.log('PARAMS =>');
        console.log(payload);

        context.commit('setIsDataLoaded', false);
        context.commit('setErrMsg', null)
        
        axios.get(`${this.state.baseUrl}/api/v1/agents`, {
            headers: {
                'Authorization': `Bearer ${this.state.token}`
            }
        })
        .then(function (response) {
            console.log("RESPONSE =>");
            console.log(response.data);
            
            context.commit('setAgents', response.data.data.agents);
            context.commit('setIsDataLoaded', true);
        })
        .catch(function (error) {     
            console.log(error);       
            context.commit('setErrMsg', error.response.data.message)
        });
    },

    reset(context){
        context.commit('setAgents', []);
        context.commit('setIsDataLoaded', false);
        context.commit('setSuccessMsg', null);
        context.commit('setErrMsg', null);
    }
};