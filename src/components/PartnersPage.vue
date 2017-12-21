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

            <div class="table-modifier-btns">
                <b-button class="new-btn" variant="success">New</b-button>
                <b-button class="del-btn" variant="danger">Delete</b-button>
            </div>

        </div>
        <div class="vehicles-list">
            <b-table :fields="fields" :items="myProvider" :current-page="currentPage" :filter="filter" :per-page="perPage" :busy.sync="isBusy"
                v-model="tableValues">

                <template slot="HEAD_actions" slot-scope="head">
                    <input type="checkbox" @click.stop="toggleSelected" v-model="allSelected">
                </template>

                <template slot="actions" slot-scope="row">
                    <input type="checkbox" name="checked" :key="row.index" :value="row.item" @click.stop v-model="checkedItems">

                    <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
                    <b-button size="sm" class="mr-1 edit-btn" variant="warning" @click="showModal=true">
                        Edit
                    </b-button>
                </template>

                <template slot="BasicInfo.Make" slot-scope="data">
                    {{ data.value.Make }} {{ data.value.Model }}
                </template>


                <template slot="id" slot-scope="data">

                </template>

            </b-table>
        </div>

        <!-- Modal Component -->
        <b-modal id="modal-center" size="lg" v-model="showModal" centered>

            <header slot="modal-header" class="modal-header advance-search-header w-100">
                <h5 class="modal-title">{{ modalTitle }}</h5>

                <button type="button" class="close" @click="showModal=false">
                    ×
                </button>
            </header>

        </b-modal>

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
                    { key: 'actions', label: ' ' },
                    { key: 'BasicInfo.Make', label: 'Make & Model', sortable: true },
                    { key: 'BasicInfo.Year', label: 'Year', sortable: true },
                    { key: 'BasicInfo.Kilometers', label: 'Kilometers', sortable: true },
                    { key: 'id', label: ' ' }
                ],
                totalRows: 0,
                perPage: 5,
                currentPage: 1,
                pageOptions: [5, 10, 15],
                filter: null,
                isBusy: false,
                spinnerColor: 'lightgrey',
                spinnerHeight: '5px',
                spinnerWidth: '5px',

                checkedItems: [],
                tableValues: [],
                allSelected: false,

                /* Modal */
                modalTitle: 'Some car',
                showModal: false
            }
        },
        created: function () {
        },
        watch: {
            checkedItems(a, b) {
                this.allSelected = (this.tableValues.length == a.length) ? true : false
            },
            perPage(a, b) {
                if (a !== b) {
                    this.clearSelected()
                }
            },
            currentPage(a, b) {
                if (a !== b) {
                    this.clearSelected()
                }
            },
            filter(a, b) {
                if (a !== b) {
                    this.clearSelected()
                }
            }
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
                                'id': response.data[key]._id,
                                'BasicInfo.Make': {
                                    'Make': response.data[key].BasicInfo.Make,
                                    'Model': response.data[key].BasicInfo.Model
                                },
                                'BasicInfo.Kilometers': response.data[key].BasicInfo.Kilometers,
                                'BasicInfo.Year': response.data[key].BasicInfo.Year
                            }
                        }
                    }
                    this.isBusy = false
                    return (items)
                }).catch(error => {
                    console.log('there was an error', error)
                    return []
                })
            },
            toggleSelected: function () {
                if (this.checkedItems == this.allSelected) {
                    this.checkedItems = this.tableValues
                } else {
                    this.checkedItems = []
                }
            },
            clearSelected() {
                this.allSelected = false
                this.checkedItems = []
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

    .list-controls button {
        background-color: white;
        color: black;
    }

    select:focus {
        box-shadow: none !important;
    }

    .custom-control-input:focus~.custom-control-indicator {
        box-shadow: none;
    }

    th {
        outline: none !important;
    }

    th:focus {
        outline: none !important;
    }

    .list-controls {}

    .vehicles-list {}

    .edit-btn {
        float: right;
    }

    .vehicles-list button:hover {
        cursor: pointer;
    }

    .table-navigation {
        width: 100%;
        display: inline-block;
        margin-top: 2rem;
    }

    .table-navigation-pagination {
        float: right;
    }

    .table-modifier-btns {
        float: right;
        margin-bottom: 0.5rem;
    }

    .table-modifier-btns button:hover {
        cursor: pointer;
    }

    .table-modifier-btns .new-btn {}

    .table-modifier-btns .del-btn {}

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

    /* Modal */

    @media(max-width: 980px) {
        .partner {
            height: 200rem;
            margin: 0 5rem;
        }
    }

    @media(max-width: 800px) {
        .partner {
            margin: -2rem 5rem;
        }
    }

    @media(max-width: 655px) {
        .partner {
            height: 200rem;
            margin: -2rem 1rem;
        }
    }

    @media(max-width: 450px) {
        .partner {
            font-size: 3vw;
        }

        .table-navigation-per-page {
            float: none;
            margin-left: 0;
        }
        .table-navigation-pagination {
            float: none;
            margin-left: 4.5rem;
            margin-top: 1rem;
            font-size: 1.2em !important;
        }
    }
</style>