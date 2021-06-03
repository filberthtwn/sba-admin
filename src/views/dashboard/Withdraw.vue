<template>
    <custom-loader :isShow="true" v-if="isSubmit"/>
    <base-modal :isShow="isModalShow" v-if="isModalShow">
        <div class="p-12">
            <div class="flex jusitfy-content-between w-100">
                <div>&nbsp;</div>
                <p class="font-bold text-2xl block text-center mb-8 w-full">Update Withdraw</p>
                <button @click="toggleModal" style="height: 21px; width: 21px">
                    <img class="mx-auto" src="@/assets/img/ic_times.svg" alt="">
                </button>
            </div>
            <div class="space-y-5">
                <div class="space-y-2">
                    <p>Date</p>
                    <input type="text" v-model="this.selectedWithdraw.created_at" disabled>
                </div>
                <div class="space-y-2">
                    <p>Bank Name</p>
                    <input type="text" v-model="this.selectedWithdraw.bank_name" disabled>
                </div>
                <div class="space-y-2">
                    <p>Bank Account Name</p>
                    <input type="text" v-model="this.selectedWithdraw.account_name" disabled>
                </div>
                <div class="space-y-2">
                    <p disabled>Bank Account Number</p>
                    <input type="text" v-model="this.selectedWithdraw.account_number" disabled>
                </div>
                <div class="flex flex-column space-x-8">
                    <button class="btn btn-danger" @click="updateStatus('REJECT')">REJECT</button>
                    <button class="btn btn-success" @click="updateStatus('ACCEPT')">ACCEPT</button>
                </div>
            </div>
        </div>
    </base-modal>

    <base-card>
        <table class="table-fixed w-full">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Username</th>
                    <th>Role</th>
                    <th>Amount</th>
                     <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <shimmer-cell :column="6" :row="5" v-if="!isDataLoaded" />
            <tbody v-else>
                <tr v-for="withdraw in withdraws" :key="withdraw" class="pr-10">
                    <td>{{ $filters.formatDate(withdraw.created_at) }}</td>
                    <td>{{ withdraw.user.name }}</td>
                    <td>{{ withdraw.user.role }}</td>
                    <td>Rp{{ $filters.formatCurrency(withdraw.amount)}}</td>
                    <td>{{ withdraw.status }}</td>
                    <td class="flex flex-row space-x-3">
                        <button class="btn btn-primary block rounded-full w-28" @click="didSelectWithdraw(withdraw)">Details</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </base-card>
</template>

<script>
    import BaseModal from "../../components/BaseModal.vue"
    import ShimmerCell from "../../components/ShimmerCell.vue"
    import CustomLoader from '../../components/CustomLoader.vue'

    export default {
        data() {
            return {
                isModalShow: false,
                selectedWithdraw: null,
            }
        },
        components: {
            'shimmer-cell': ShimmerCell,
            'base-modal': BaseModal,
            'custom-loader': CustomLoader
        },

        computed: {
            withdraws() {
                return this.$store.getters['withdraws/withdraws'];
            },
            isDataLoaded() {
                return this.$store.getters['withdraws/isDataLoaded'];
            },
            isSubmit() {
                return this.$store.getters['withdraws/isSubmit'];
            }
        },
        watch: {
            isSubmit(val){
                if(!val){
                    this.isModalShow = false;
                    this.getAllWithdraw();
                }
            }
        },
        methods: {
            getAllWithdraw() {
                this.$store.dispatch('withdraws/getAllWithdraw');
            },

            updateStatus(status){
                this.$store.dispatch('withdraws/updateStatus', {
                    id: this.selectedWithdraw._id,
                    status: status
                });
            },

            didSelectWithdraw(withdraw){
                this.selectedWithdraw = withdraw;
                this.toggleModal();
            },

            toggleModal(){
                this.isModalShow = !this.isModalShow;
            },
        },

        created() {
            this.getAllWithdraw();
        },

        beforeUnmount() {
            this.$store.dispatch('withdraws/reset');
        }
    }
</script>