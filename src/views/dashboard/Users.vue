<template>
    <base-card>
        <table class="table-auto w-full">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Role</th>
                    <th>Balance</th>
                    <th>Gold Balance</th>
                </tr>
            </thead>
            <shimmer-cell :column="6" :row="5" v-if="!isDataLoaded" />
            <tbody v-else>
                <tr v-for="user in users" :key="user">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone_number }}</td>
                    <td>{{ user.role }}</td>
                    <td>Rp{{ $filters.formatCurrency(user.balance) }}</td>
                    <td>{{ user.gold_balance }}</td>
                </tr>
            </tbody>
        </table>
    </base-card>
</template>

<script>
    import ShimmerCell from "../../components/ShimmerCell.vue"
    export default {
        components: {
            'shimmer-cell': ShimmerCell,
        },
        
        computed: {
            users(){
                return this.$store.getters['users/users'];
            },
            isDataLoaded(){
                return this.$store.getters['users/isDataLoaded'];
            }
        },

        methods: {
            getAllUser(){
                this.$store.dispatch('users/getAllUser');
            }
        },

        created() {
            this.getAllUser();
        },

        beforeUnmount(){
            this.$store.dispatch('users/reset');
        }
    }
</script>