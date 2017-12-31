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
                <b-button class="new-btn" variant="success" @click="newVehicle">New</b-button>
                <b-button class="del-btn" variant="danger" @click="deleteVehicle">Delete</b-button>
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

                    <b-button size="sm" class="mr-1 edit-btn" variant="warning" @click="editVehicle">
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
        <b-modal id="modal-center" size="lg" v-model="showModal" centered class="dealer-vehicle-modal">

            <header slot="modal-header" class="modal-header advance-search-header w-100">
                <h5 class="modal-title">{{ modalTitle }}</h5>

                <button type="button" class="close" @click="showModal=false">
                    ×
                </button>
            </header>

            <b-container fluid>

                <b-row class="mb-5">
                    <vue-transmit class="col-12" tag="section" v-bind="options" upload-area-classes="bg-faded" ref="uploader">
                        <div class="d-flex align-items-center justify-content-center w-100" style="height:50vh; border-radius: 1rem;">
                            <button class="btn btn-primary" @click="triggerBrowse">Upload Files</button>
                        </div>
                        <!-- Scoped slot -->
                        <template slot="files" slot-scope="props">
                            <div v-for="(file, i) in props.files" :key="file.id" :class="{'mt-5': i === 0}">
                                <div class="media">
                                    <img :src="file.dataUrl" class="img-fluid d-flex mr-3">
                                    <div class="media-body">
                                        <h3>{{ file.name }}</h3>
                                        <div class="progress" style="width: 50vw;">
                                            <div class="progress-bar bg-success" :style="{width: file.upload.progress + '%'}"></div>
                                        </div>
                                        <pre>{{ file | json }} </pre>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </vue-transmit>
                </b-row>

                <b-row>
                    <label class="col-md-12 justify-content-start">Basic Info.</label>

                    <b-form-group id="make" label="Make" label-for="makeInput" class="col-md-4">
                        <select id="makeInput" class="form-control custom-select" @change="makeChosen" v-model="chosenMake">
                            <option v-if="submitType === 'addNewVehicle'" :value="null">Choose Make ...</option>
                            <option v-for="make in vehicleMakes" v-bind:value="make">{{ make }}</option>
                        </select>
                    </b-form-group>

                    <b-form-group id="model" label="Model" label-for="modelInput" class="col-md-4">
                        <select id="modelInput" class="form-control custom-select">
                            <option v-for="model in vehicleModels" v-bind:value="model">{{ model }}</option>
                        </select>
                    </b-form-group>

                    <b-form-group id="trim" label="Trim" label-for="trimInput" class="col-md-4" description="Optional">
                        <b-form-input id="trimInput"></b-form-input>
                    </b-form-group>
                </b-row>

                <b-row>
                    <b-form-group id="year" label="Year" label-for="yearInput" class="col-md-4">
                        <select id="yearInput" class="form-control custom-select"></select>
                    </b-form-group>

                    <b-form-group id="exteriorColor" label="Exterior Colour" label-for="exteriorColorInput" class="col-md-4">
                        <select id="exteriorColorInput" class="form-control custom-select"></select>
                    </b-form-group>

                    <b-form-group id="interiorColor" label="Interior Colour" label-for="interiorColorInput" class="col-md-4">
                        <select id="interiorColorInput" class="form-control custom-select"></select>
                    </b-form-group>
                </b-row>

                <b-row>
                    <b-form-group id="numberOfDoors" label="No. of Doors" label-for="numberOfDoorsInput" class="col-md-6" description="Optional">
                        <select id="numberOfDoorsInput" class="form-control custom-select"></select>
                    </b-form-group>

                    <b-form-group id="numberOfSeats" label="No. of Seats" label-for="numberOfSeatsInput" class="col-md-6" description="Optional">
                        <select id="numberOfSeatsInput" class="form-control custom-select"></select>
                    </b-form-group>
                </b-row>

                <b-row>
                    <b-form-group id="price" label="Price" label-for="priceInput" class="col-md-6" description="Do not include commas ' , '">
                        <b-input-group left="$">
                            <b-form-input id="priceInput"></b-form-input>
                        </b-input-group>
                    </b-form-group>

                    <b-form-group id="kilometers" label="Kilometers" label-for="kilometersInput" class="col-md-6" description="Use ' 0 ' for new vehicles">
                        <b-form-input id="kilometersInput"></b-form-input>
                    </b-form-group>
                </b-row>

                <b-row class="mb-5">
                    <b-form-group id="fuelType" label="Fuel Type" label-for="fuelTypeInput" class="col-md-6">
                        <b-form-select id="fuelTypeInput"></b-form-select>
                    </b-form-group>

                    <b-form-group id="bodyType" label="Body Type" label-for="bodyTypeInput" class="col-md-6">
                        <b-form-select id="bodyTypeInput"></b-form-select>
                    </b-form-group>
                </b-row>

                <!-- Start mechanical info -->
                <b-row>
                    <label class="col-md-12 justify-content-start">Mechanical Info.</label>

                    <b-form-checkbox id="carProofCheckbox" class="col-md-12 ml-3">
                        <img src="../assets/images/car-proof.png" class="car-proof-img" />
                    </b-form-checkbox>
                </b-row>

                <b-row>
                    <b-form-group id="transmission" label="Transmission" label-for="transmissionInput" class="col-md-4">
                        <b-form-select id="transmissionInput"></b-form-select>
                    </b-form-group>

                    <b-form-group id="engineSize" label="Engine Size" label-for="engineSizeInput" class="col-md-4" description="Optional">
                        <b-form-select id="engineSizeInput"></b-form-select>
                    </b-form-group>

                    <b-form-group id="recommendedFuel" label="Recommended Fuel" label-for="recommendedFuelInput" class="col-md-4" description="Optional">
                        <b-form-select id="recommendedFuelInput"></b-form-select>
                    </b-form-group>
                </b-row>

                <b-row>
                    <b-form-group id="cylinders" label="Cylinders" label-for="cylinderInput" class="col-md-4" description="Optional">
                        <b-form-select id="cylinderInput"></b-form-select>
                    </b-form-group>

                    <b-form-group id="horsepower" label="Horsepower @ RPM" label-for="horsepowerInput" class="col-md-4" description="Optional">
                        <b-form-input id="horsepowerInput"></b-form-input>
                    </b-form-group>

                    <b-form-group id="torque" label="Torque (lb - ft) @ RPM" label-for="torqueInput" class="col-md-4" description="Optional">
                        <b-form-input id="torqueInput"></b-form-input>
                    </b-form-group>
                </b-row>

                <b-row class="mb-5">
                    <b-form-group id="drivetrain" label="Drivetrain" label-for="drivetrainInput" class="col-md-12" description="Optional">
                        <select id="drivetrainInput" class="form-control custom-select"></select>
                    </b-form-group>
                </b-row>

                <!-- Start fuel economy info -->
                <b-row>
                    <label class="col-md-12 justify-content-start">Fuel Economy Info.</label>

                    <b-form-group id="cityFuelEconomy" label="City (L/100Km)" label-for="cityFuelEconomyInput" class="col-md-4" description="Optional">
                        <b-form-input id="cityFuelEconomyInput"></b-form-input>
                    </b-form-group>

                    <b-form-group id="highwayFuelEconomy" label="Highway (L/100Km)" label-for="highwayFuelEconomyInput" class="col-md-4" description="Optional">
                        <b-form-input id="highwayFuelEconomyInput"></b-form-input>
                    </b-form-group>

                    <b-form-group id="combinedFuelEconomy" label="Combined (L/100Km)" label-for="combinedFuelEconomyInput" class="col-md-4" description="Optional">
                        <b-form-input id="combinedFuelEconomyInput"></b-form-input>
                    </b-form-group>
                </b-row>

            </b-container>


            <template slot="modal-footer" class="modal-footer">
                <b-btn size="md" class="float-right advance-search-btn" @click="modalSubmit">
                    {{ modalTitle }}
                </b-btn>
            </template>

        </b-modal>

    </div>
</template>

<script>
    import axios from 'axios'
    import config from '../../config/config.js'
    const ADD_VEHICLE = 'addNewVehicle'
    const EDIT_VEHICLE = 'editExistingVehicle'

    var axios_getVehicleDetails = axios.get('http://' + config.api_address + ':3000/getVehiclesDetails')

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

                rawVehicleDetails: JSON,
                chosenMake: null,
                vehicleMakes: [],
                vehicleModels: [],
                vehicleTypes: [],
                vehicleYears: [],
                colors: [],
                transmissionTypes: [],
                fuelTypes: [],

                /* Modal */
                submitType: 'Add Vehicle',
                modalTitle: 'Some car',
                submitText: 'Button',
                showModal: false,
                options: {
                    acceptedFileTypes: ['image/*'],
                    url: './upload.php',
                    clickable: false
                }
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
                axios.get('http://' + config.api_address + ':3000/countDealershipVehicles/Generic Dealership?token=' + localStorage.getItem('token')).then((response) => {
                    this.totalRows = response.data
                }).catch(error => {
                    console.log('An error occurred when trying to count the dealerships vehicles', error)
                })

                /* Get cars for dealership */
                const items = []
                return axios.get('http://' + config.api_address + ':3000/getAllVehiclesForDealer/' + ctx.sortBy + '/' + ctx.sortDesc + '/' + ctx.perPage + '/' + ctx.currentPage + '/' + ctx.filter + '/Generic Dealership?token=' + localStorage.getItem('token')).then((response) => {
                    for (var key in response.data) {
                        if (response.data.hasOwnProperty(key)) {
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
            makeChosen: function () {
                this.vehicleModels = this.rawVehicleDetails.makeModel[this.chosenMake]
            },
            modalSubmit: function () {
                if (this.submitType == ADD_VEHICLE) {
                    alert('adding new vehicle !')
                } else if (this.submitType == EDIT_VEHICLE) {
                    alert('editing existing vehicle !')
                } else {
                    alert('Neither add nor edit?')
                }
                this.showModal = false
            },
            newVehicle: function () {
                this.submitType = ADD_VEHICLE
                this.modalTitle = 'Add Vehicle'
                this.showModal = true

                axios_getVehicleDetails.then((response) => {
                    this.rawVehicleDetails = response.data[0]
                    this.vehicleMakes = Object.keys(this.rawVehicleDetails.makeModel)
                    this.vehicleTypes = this.rawVehicleDetails.bodyType
                    this.vehicleYears = this.rawVehicleDetails.year
                    this.colors = this.rawVehicleDetails.color
                    this.transmissionTypes = this.rawVehicleDetails.transmission
                    this.fuelTypes = this.rawVehicleDetails.fuelType
                }).catch(error => {
                    console.log('An error ocurred while trying to retreive the data', error)
                })
            },
            editVehicle: function () {
                this.submitType = EDIT_VEHICLE
                this.modalTitle = 'Edit Vehicle'
                this.showModal = true
            },
            deleteVehicle: function () {
                confirm('Are you sure you want to delete the vehicle(s)?')
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
            },
            triggerBrowse() {
                this.$refs.uploader.triggerBrowseFiles()
            },
        },
        filters: {
            json(value) {
                return JSON.stringify(value, null, 2)
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

    .dealer-vehicle-modal select:focus,
    .dealer-vehicle-modal input:focus {
        -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, .25) !important;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, .25) !important;
        outline: inherit !important;
        border-color: 0 0 0 0.2rem rgba(0, 123, 255, .25) !important;
    }

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