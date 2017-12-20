<template>
    <div id="app">
        <nav v-bind:class="[{'hide-nav': partnersPage}, 'navbar navbar-light fixed-top bg-light justify-content-between nav-bar-background']">
            <div class="navbar-brand">
                <div id="yyc">
                    <a href="/home"> logo </a>
                </div>
                <div id="automotives">
                    <a href="/home"> Automotives </a>
                </div>
                <div class="nav-bar-sponser">
                    Sponsor:
                    <router-link :to="{name:'SponsersPage'}">
                        <img src="./assets/images/honda-car-logo.png" />
                    </router-link>
                </div>
            </div>

            <div class="form-inline search-input-and-groups mr-auto">

                <div class="input-group">
                    <input id="basicSearch" v-model="basicSearchValue" class="form-control search-input" placeholder="Search" aria-label="Search"
                        @keyup.enter="basicSearchClick">

                    <div class="input-group-btn advance-search-btn">
                        <button class="btn" type="button" @click="showModal=true">
                            <i class="material-icons">keyboard_arrow_down</i>
                        </button>
                    </div>

                    <div class="input-group-btn search-btn">
                        <button class="btn my-2 my-sm-0" type="button" @click="basicSearchClick">
                            <i class="material-icons">search</i>
                        </button>
                    </div>

                    <!-- Modal Component -->
                    <b-modal id="modal-center" v-model="showModal" centered title="Advanced Search">

                        <header slot="modal-header" class="modal-header advance-search-header w-100">
                            <h5 class="modal-title">Advanced Search</h5>
                            <button type="button" class="close" @click="showModal=false">
                                ×
                            </button>
                        </header>

                        <b-container fluid>

                            <b-row class="mb-3">
                                <b-form-checkbox id="newCarCheckbox" checked="true">New</b-form-checkbox>
                                <b-form-checkbox id="usedCarCheckbox">Used</b-form-checkbox>
                                <b-form-checkbox id="carProofCheckbox">
                                    <img src="./assets/images/car-proof.png" class="car-proof-img" />
                                </b-form-checkbox>
                            </b-row>

                            <b-row class="mb-2">
                                <label class="col-md-12 justify-content-start pl-0">Basic Info.</label>

                                <select class="mr-1 form-control custom-select" @change="makeChosen" v-model="chosenMake">
                                    <option selected :value="null">Make (All)</option>
                                    <option v-for="make in vehicleMakes" v-bind:value="make">{{ make }}</option>
                                </select>

                                <select class="ml-1 form-control custom-select" v-model="chosenModel">
                                    <option selected :value="null">Model (All)</option>
                                    <option v-for="model in vehicleModels" v-bind:value="model">{{ model }}</option>
                                </select>
                            </b-row>

                            <b-row class="mb-2">
                                <b-form-input v-model="chosenMinPrice" class="mr-1" type="number" placeholder="Min. Price"></b-form-input>
                                <b-form-input v-model="chosenMaxPrice" class="ml-1" type="number" placeholder="Max. Price"></b-form-input>
                            </b-row>

                            <b-row class="mb-2">
                                <select class="mr-1 form-control custom-select" v-model="chosenType">
                                    <option selected :value="null">Type (All)</option>
                                    <option v-for="type in vehicleTypes" v-bind:value="type">{{ type }}</option>
                                </select>

                                <select class="ml-1 form-control custom-select" v-model="chosenYear">
                                    <option selected :value="null">Year (All)</option>
                                    <option v-for="year in vehicleYears" v-bind:value="year">{{ year }}</option>
                                </select>
                            </b-row>

                            <b-row class="mb-3">
                                <label class="col-md-12 justify-content-start pl-0">Aesthetics</label>

                                <select class="mr-1 form-control custom-select" v-model="chosenExteriorColor">
                                    <option selected :value="null">Exterior Colour (All)</option>
                                    <option v-for="color in colors" v-bind:value="color">{{ color }}</option>
                                </select>

                                <select class="ml-1 form-control custom-select" v-model="chosenInteriorColor">
                                    <option selected :value="null">Interior Colour (All)</option>
                                    <option v-for="color in colors" v-bind:value="color">{{ color }}</option>
                                </select>
                            </b-row>

                            <b-row class="mb-3">
                                <label class="col-md-12 justify-content-start pl-0">Mechanical</label>

                                <select class="mr-1 form-control custom-select" v-model="chosenFuelType">
                                    <option selected :value="null">Fuel Type (All)</option>
                                    <option v-for="fuelType in fuelTypes" v-bind:value="fuelType">{{ fuelType }}</option>
                                </select>

                                <select class="ml-1 form-control custom-select" v-model="chosenTransmissionType">
                                    <option selected :value="null">Transmission (All)</option>
                                    <option v-for="transmission in transmissionTypes" v-bind:value="transmission">{{ transmission }}</option>
                                </select>
                            </b-row>
                        </b-container>

                        <template slot="modal-footer" class="modal-footer">
                            <b-btn size="md" class="float-right advance-search-btn" @click="submitAdvanceSearch">
                                Search
                            </b-btn>
                        </template>

                    </b-modal>

                </div>

            </div>
        </nav>

        <nav v-bind:class="[{'hide-nav': !partnersPage}, 'navbar navbar-light fixed-top bg-light justify-content-between nav-bar-background']">
            <div class="navbar-brand">
                <div id="yyc">
                    <a href="/home"> logo </a>
                </div>
                <div id="automotives">
                    <a href="/home"> Automotives </a>
                </div>
            </div>
            <b-nav-item-dropdown v-if="!partnerLogin" :text="pageTitle" right>
                <b-dropdown-item @click="logout">Logout</b-dropdown-item>
            </b-nav-item-dropdown>
            <div v-else class="nav-bar-sponser">
                {{ pageTitle }}
            </div>
        </nav>

        <router-view />
        <footer class="footer">
            <div class="copyright">
                &#169; {{ new Date().getFullYear() }} Farzam Noori
            </div>
            <div class="contact-info">
                <a href="mailto:farzamn80@gmail.com">farzamn80@gmail.com</a> |
                <a href="tel:+15878993223">587-899-3223</a>
            </div>
        </footer>
    </div>
</template>

<script>
    import axios from 'axios'
    var axios_getVehicleDetails = axios.get('http://localhost:3000/getVehiclesDetails')

    export default {
        name: 'app',
        data() {
            return {
                showModal: false,
                rawVehicleDetails: JSON,

                vehicleMakes: [],
                vehicleModels: [],
                vehicleTypes: [],
                vehicleYears: [],
                colors: [],
                fuelTypes: [],
                transmissionTypes: [],

                basicSearchValue: null,

                chosenMake: null,
                chosenModel: null,
                chosenType: null,
                chosenYear: null,
                chosenInteriorColor: null,
                chosenExteriorColor: null,
                chosenFuelType: null,
                chosenTransmissionType: null,
                chosenMinPrice: null,
                chosenMaxPrice: null,

                partnersPage: false,
                partnerLogin: false,
                pageTitle: '',

                //Modal
            }
        },
        created: function () {
            if (this.$route.name == 'PartnersPage') {
                this.pageTitle = this.$store.state.dealershipLoggedIn
                this.partnersPage = true
                this.partnerLogin = false
            } else if (this.$route.name == 'PartnerLogin') {
                this.partnersPage = true
                this.partnerLogin = true
                this.pageTitle = 'Login Page'
            } else {
                this.partnersPage = false
                this.pageMount()
            }
        },
        watch: {
            '$route'(from, to) {
                if (this.$route.name == 'PartnersPage') {
                    this.pageTitle = this.$store.state.dealershipLoggedIn
                    this.partnersPage = true
                    this.partnerLogin = false
                } else if (this.$route.name == 'PartnerLogin') {
                    this.partnersPage = true
                    this.partnerLogin = true
                    this.pageTitle = 'Welcome To The Partner Login Page'
                } else {
                    this.partnersPage = false
                    this.pageMount()
                }
            },
        },
        methods: {
            // Load the advance search dropdown data when page loads
            pageMount: function () {
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

            basicSearchClick: function () {
                this.$router.replace({ name: 'Home', query: { searchIs: this.basicSearchValue } })
            },

            // When user chooses a make, populate the appropriate model
            makeChosen: function () {
                console.log('make:', this.chosenMake)
                this.vehicleModels = this.rawVehicleDetails.makeModel[this.chosenMake]
            },

            submitAdvanceSearch: function () {
                var advancedSearchJSON = {
                    'make': (this.chosenMake == null) ? -1 : this.chosenMake,
                    'model': (this.chosenModel == null) ? -1 : this.chosenModel,
                    'type': (this.chosenType == null) ? -1 : this.chosenType,
                    'extColor': (this.chosenExteriorColor == null) ? -1 : this.chosenExteriorColor,
                    'intColor': (this.chosenInteriorColor == null) ? -1 : this.chosenInteriorColor,
                    'fuelType': (this.chosenFuelType == null) ? -1 : this.chosenFuelType,
                    'transmission': (this.chosenTransmissionType == null) ? -1 : this.chosenTransmissionType,
                    'minPrice': (this.chosenMinPrice == null) ? -1 : this.chosenMinPrice,
                    'maxPrice': (this.chosenMaxPric == null) ? -1 : this.chosenMaxPric
                }

                this.$router.replace({ name: 'Home', query: { advancedSearchQuery: JSON.stringify(advancedSearchJSON) } })
                this.showModal = false
            },

            logout: function () {
                this.$store.dispatch('logout').then(
                    console.log('Logged out !')
                ).then(() => {
                    this.$router.replace({ name: 'Home', query: { loggedOut: true } })
                })
            }
        }
    }
</script>

<style>
</style>