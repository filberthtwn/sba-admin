import axios from 'axios';

export default {
    login(context, payload){
        console.log('PARAMS =>');
        console.log(payload);

        context.commit('setSuccessMsg', null);
        context.commit('setErrMsg', null)
        context.commit('setIsSubmit', true);

        console.log(this.state.token);
        
        axios.post(`${this.state.baseUrl}/api/v1/login`, payload)
        .then(function (response) {
            console.log("RESPONSE =>");
            console.log(response.data);

            //* Save token to VUEX
            context.commit('setToken', response.data.data.token, { root: true });
            context.commit('setSuccessMsg', response.data.message);
            context.commit('setIsSubmit', false);
        })
        .catch(function (error) {     
            console.log(error);       
            context.commit('setIsSubmit', false);
            context.commit('setErrMsg', error.response.data.message)
        });
    },

    // changePassword(context, payload){
    //     console.log('PARAMS =>');
    //     console.log(payload);

    //     context.commit('setSuccessMsg', null);
    //     context.commit('setErrMsg', null);
    //     context.commit('setIsSubmit', true);
    //     axios.patch('https://autism-love.herokuapp.com/api/v1/change-password', payload,{
    //         headers: {
    //             'Authorization': `Bearer ${localStorage.getItem('token')}`
    //         }
    //     })
    //     .then(function (response) {
    //         console.log("RESPONSE =>");
    //         console.log(response.data);

    //         //* Save token to localStorage
    //         localStorage.setItem('token', response.data.data.token);
    //         context.commit('setSuccessMsg', response.data.message);
    //         context.commit('setIsSubmit', false);
    //     })
    //     .catch(function (error) {
    //       context.commit('setErrMsg', error.response.data.message)
    //       console.log(error);
    //     });
    // },

    reset(context){
        context.commit('setIsSubmit', false);
        context.commit('setSuccessMsg', null);
        context.commit('setErrMsg', null);
    }
};