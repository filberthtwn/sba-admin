<template>
    <div class="custom-loading" v-show="isShow">
        <div class="absolute top-0 bottom-0 left-0 right-0" style="z-index: 1002">
            <div class="relative flex w-full h-full">
                <div class="absolute top-0 bottom-0 left-0 right-0" style="background:black; z-index: 1001; opacity: 0.5"></div>
                <div class="m-auto flex" style="background:white; z-index: 1002; width: 150px;height:150px; border-radius: 10px;">
                    <loader class="m-auto" :size="'75px'"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loader from '../components/Loader.vue';

export default {
    components:{
        'loader': Loader
    },
    props:{
        isShow: {
            type: Boolean,
            default: false
        }
    }
}
</script>