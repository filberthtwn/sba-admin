<template>
    <div class="flex">
        <div class="py-14 px-8 border-r border-gray-300 h-screen fixed" style="width: 350px">
            <p class="text-3xl font-bold mb-6">SUMBER <br> <span class="text-primary">BARUNA</span> ABADI</p>
            <router-link v-for="menu in menus" :key="menu" :to="{name: menu.pathName}">
                <div class="rounded-md py-5 px-4" :class="(currentPathName == menu.pathName) ? 'bg-white' : 'opacity-25'">
                    <span>
                        <p class="font-bold">{{ menu.title }}</p>
                    </span>
                </div>
            </router-link>
        </div>

        <div class="wrapper flex-grow" style="margin-left: 350px">
            <div class="content my-24 mx-12">
                <transition name="route">
                    <slot/>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentPathName: 'Transactons',
            menus: [
                {title: 'Transactions', pathName: 'Transactions'},
                {title: 'Withdraw', pathName: 'Withdraw'},
                {title: 'Users', pathName: 'Users'},
                {title: 'Agents', pathName: 'Agents'},
                {title: 'Logout', pathName: 'Login'},
            ]
        }
    },
    watch: {
        $route(to){
            console.log(to);
            this.currentPathName = to.name;
        }
    }
}
</script>