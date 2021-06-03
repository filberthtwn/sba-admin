<template>
    <div class="flex px-4" 
    :style="isSuccess ? {'background-color': '#6DCC5F'} : {'background-color': '#FF6767'}"
    style="border-radius:10px;">
        <img class="my-auto" src="@/assets/img/ic_success.svg" v-if="isSuccess">
        <img class="my-auto" src="@/assets/img/ic_warning.svg" v-else>
        <p class="ml-3 py-5 text-white">{{ message }}</p>
    </div>
</template>

<script>
export default {
    props: {
        isSuccess:{
            type: Boolean,
            default: false
        },
        message:{
            type: String,
            default: 'Message'
        }
    }
}
</script>