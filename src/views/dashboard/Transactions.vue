<template>
    <base-card>
        <table class="table-fixed w-full">
            <thead>
                <tr>
                    <th width="20%">Date</th>
                    <th width="25%">User</th>
                    <th width="25%">Agent</th>
                    <th width="15%">Quantity</th>
                    <th width="15%">Price</th>
                </tr>
            </thead>
            <shimmer-cell :column="5" :row="5" v-if="!isDataLoaded" />
            <tbody v-else>
                <tr v-for="transaction in transactions" :key="transaction">
                    <td>{{ $filters.formatDate(transaction.created_at) }}</td>
                    <td>{{ transaction.user.name }}</td>
                    <td>{{ (transaction.agent) ? transaction.agent.name : '-' }}</td>
                    <td>{{ transaction.quantity }}</td>
                    <td>{{ transaction.amount }}</td>
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
            transactions(){
                return this.$store.getters['transactions/transactions'];
            },
            isDataLoaded(){
                return this.$store.getters['transactions/isDataLoaded'];
            }
        },

        methods: {
            getAllTransactions(){
                this.$store.dispatch('transactions/getAllTransaction');
            }
        },

        created() {
            this.getAllTransactions();
        },

        beforeUnmount(){
            this.$store.dispatch('transactions/reset');
        }
    }
</script>