<template>
    <clip-loader class="mx-auto" :loading="true" :color="color" :size="size"></clip-loader>
</template>

<script>
    import ClipLoader from "vue-spinner/src/ClipLoader.vue";
    export default {
        components: {
            ClipLoader
        },
        props: {
            size: {
                default: '50px'
            },
            color: {
                default: '#4EA76E'
            },
        },
    }
</script>