<template>
    <base-card>
        <table class="table-auto w-full">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <shimmer-cell :column="4" :row="5" v-if="!isDataLoaded" />
            <tbody v-else>
                <tr v-for="agent in agents" :key="agent">
                    <td>{{ agent.name }}</td>
                    <td>{{ agent.email }}</td>
                    <td>{{ agent.phone_number }}</td>
                    <td>Rp{{ $filters.formatCurrency(agent.balance) }}</td>
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
            agents(){
                return this.$store.getters['agents/agents'];
            },
            isDataLoaded(){
                return this.$store.getters['agents/isDataLoaded'];
            }
        },

        methods: {
            getAllAgents(){
                this.$store.dispatch('agents/getAllAgent');
            }
        },

        created() {
            this.getAllAgents();
        },

        beforeUnmount(){
            this.$store.dispatch('agents/reset');
        }
    }
</script>