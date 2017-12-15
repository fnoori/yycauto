<template>
    <div class="partner">
        <fade-loader class="table-spinner" :loading="isBusy" :color="spinnerColor" :height="spinnerHeight" :width="spinnerWidth"></fade-loader>
        <div class="list-controls">
            <div>
                <b-input-group>
                    <b-form-input v-model="filter" placeholder="Search Your Inventory . . ." />
                    <b-input-group-button>
                        <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
                    </b-input-group-button>
                </b-input-group>
            </div>

            <div class="table-navigation">
                <label class="per-page-label">Items Per Page: </label>
                <div class="table-navigation-per-page">
                    <b-form-select :options="pageOptions" v-model="perPage" />
                </div>
                <div class="table-navigation-pagination">
                    <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" />
                </div>
            </div>
        </div>
        <div class="vehicles-list">
            <b-table :fields="fields" :items="myProvider" :current-page="currentPage" :filter="filter" :per-page="perPage" :busy.sync="isBusy">
                <template slot="index" slot-scope="data">
                    {{ data.index + 1 }}
                </template>

                <template slot="BasicInfo.Make" slot-scope="data">
                    {{ data.value.Make }} {{ data.value.Model }}
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'PartnersPage',
        data() {
            return {
                msg: 'Welcome to the partners page',
                fields: [
                    { key: 'index', label: ' ' },
                    { key: 'BasicInfo.IsSold', label: 'Is Sold', sortable: true },
                    { key: 'BasicInfo.Make', label: 'Make & Model', sortable: true },
                    { key: 'BasicInfo.Year', label: 'Year', sortable: true },
                    { key: 'BasicInfo.Kilometers', label: 'Kilometers', sortable: true },
                ],
                totalRows: 0,
                perPage: 5,
                currentPage: 1,
                pageOptions: [5, 10, 15],
                filter: null,
                isBusy: false,
                spinnerColor: 'lightgrey',
                spinnerHeight: '5px',
                spinnerWidth: '5px'
            }
        },
        created: function () {
        },
        methods: {
            pageInit: function () {
                console.log(this.partnerCurrLoggedIn)
            },
            myProvider(ctx) {
                this.isBusy = true

                /* Pass correctly formatted data for sorting */
                if (!ctx.sortBy) {
                    ctx.sortBy = '-2'
                    ctx.sortDesc = -2
                } else {
                    if (ctx.sortDesc == true) {
                        ctx.sortDesc = 1
                    } else {
                        ctx.sortDesc = -1
                    }
                }

                /* Needed to separate these if clauses, were not working when combined */
                if (ctx.filter == null) {
                    ctx.filter = -2
                }
                if (ctx.filter.length == 0) {
                    ctx.filter = -2
                }

                /* Count the number of rows for this dealership */
                axios.get('http://localhost:3000/countDealershipVehicles/Generic Dealership?token=' + localStorage.getItem('token')).then((response) => {
                    this.totalRows = response.data
                }).catch(error => {
                    console.log('An error occurred when trying to count the dealerships vehicles', error)
                })

                /* Get cars for dealership */
                const items = []
                return axios.get('http://localhost:3000/getAllVehiclesForDealer/' + ctx.sortBy + '/' + ctx.sortDesc + '/' + ctx.perPage + '/' + ctx.currentPage + '/' + ctx.filter + '/Generic Dealership?token=' + localStorage.getItem('token')).then((response) => {
                    for (var key in response.data) {
                        if (response.data.hasOwnProperty(key)) {
                            //this.items[key] = response.data[key]
                            items[key] = {
                                'BasicInfo.Make': {
                                    'Make': response.data[key].BasicInfo.Make,
                                    'Model': response.data[key].BasicInfo.Model
                                },
                                'BasicInfo.Kilometers': response.data[key].BasicInfo.Kilometers,
                                'BasicInfo.Year': response.data[key].BasicInfo.Year,
                                'BasicInfo.IsSold': response.data[key].BasicInfo.IsSold
                            }
                        }
                    }
                    this.isBusy = false
                    return (items)
                }).catch(error => {
                    console.log('there was an error', error)
                    return []
                })
            }
        }
    }
</script>

<style scoped>
    .partner {
        height: 200rem;
        margin: 0 15rem;
    }

    select {
        border-radius: 0 !important;
    }

    select:focus {
        box-shadow: none !important;
    }

    .custom-control-input:focus~.custom-control-indicator {
        box-shadow: none;
    }

    th {
        outline: none;
    }

    .list-controls {}

    .vehicles-list {}

    .table-navigation {
        width: 100%;
        display: inline-block;
        margin-top: 2rem;
    }

    .table-navigation-pagination {
        float: right;
    }

    .page-link {
        border-radius: 0 !important;
    }

    .table-navigation-per-page {
        float: left;
        margin-left: 5px;
    }

    .per-page-label {
        margin-top: 0.3rem;
        margin-bottom: 0rem;
        float: left !important;
    }

    .table-spinner {
        position: absolute !important;
        font-size: 0px !important;
        top: 50% !important;
        left: 50% !important;
    }
</style>