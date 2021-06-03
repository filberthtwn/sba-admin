<template>
    <div class="flex w-full h-screen">
        <div class="m-auto bg-white p-12 rounded-xl" style="width: 450px;">
            <p class="text-3xl font-bold mb-8">Sumber <span class="text-primary">Baruna</span> Abadi</p>
            <base-alert class="mb-8" :isSuccess="isSuccess" :message="message" v-if="message"/>
            <div class="space-y-3 mb-6">
                <input type="text" name="" id="" placeholder="Email" v-model="email">
                <input type="password" name="" id="" placeholder="Password" v-model="password">
            </div>
            <loader v-if="isSubmit"/>
            <button class="btn-primary" @click="login" v-else>Login</button>
        </div>
    </div>
</template>

<script>
import BaseAlert from '../../components/BaseAlert.vue';
import Loader from '../../components/Loader.vue';
export default {
  components: { BaseAlert, Loader },
    data() {
        return {
            email: null,
            password: null,
            isSuccess: false,
            message: null,
        }
    },

    computed: {
        isSubmit(){
            return this.$store.getters['auth/isSubmit'];
        },
        
        successMsg(){
            return this.$store.getters['auth/successMsg'];
        },

        errMsg(){
            return this.$store.getters['auth/errMsg'];
        }
    },

    watch: {
        successMsg(val){
            console.log(val);
            console.log('MESSAGE');
            this.$router.push({name: 'Transactions'});
        },

        errMsg(val){
            this.message = val;
        }
    },

    methods: {
        login(){
            this.message = null;
            this.$store.dispatch('auth/login',{
                email: this.email,
                password: this.password
            });
        }
    }
}
</script>