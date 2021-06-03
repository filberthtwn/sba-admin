<template>
    <div class="absolute top-0 bottom-0 left-0 right-0" style="z-index: 1000">
            <div class="relative flex w-full h-full">
                <div class="absolute top-0 bottom-0 left-0 right-0 flex" style="background:black; z-index: 1001; opacity: 0.5" @click="toggleModal()">
                </div>

                <div class="m-auto bg-white" style="z-index: 1002; width: 500px; border-radius: 10px;">
                    <slot/>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    data() {
        return {
            isShowModal: this.isShow,
        }
    },
    props:{
        isShow: {
            type: Boolean,
            default: false,
        }
    },
    watch:{
        isShow: function (newVal){
            this.isShowModal = newVal;
        }
    },
    methods: {
        toggleModal(){
            this.isShowModal = false;
        }
    },
}
</script>