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
                        <button @click="advanceSearchClick" class="btn" type="button">
                            <i class="material-icons">keyboard_arrow_down</i>
                        </button>
                    </div>

                    <div class="input-group-btn search-btn">
                        <button class="btn my-2 my-sm-0" type="button" @click="basicSearchClick">
                            <i class="material-icons">search</i>
                        </button>
                    </div>

                    <modal v-if="showModal" @close="showModal = false">
                        <div slot="header" class="full-width-header">
                            <div class="advance-search-title">
                                Advanced Search
                            </div>

                            <button class="advance-search-close" @click="showModal = false">
                                <i class="material-icons">close</i>
                            </button>
                        </div>
                        <div slot="body">

                            <div class="container misc-info">
                                <div class="row">
                                    <label class="form-check-label new-checkbox new-car">
                                        <input type="checkbox" class="form-check-input" checked> New
                                    </label>
                                    <label class="form-check-label used-car">
                                        <input type="checkbox" class="form-check-input" checked> Used
                                    </label>
                                    <label class="form-check-label car-proof">
                                        <input type="checkbox" class="form-check-input">
                                        <img src="./assets/images/car-proof.png" />
                                    </label>
                                </div>
                            </div>

                            <div class="container basic-info">

                                <label>Basic Info.</label>
                                <div class="row">
                                    <select class="custom-select col-md left-component" @change="makeChosen" v-model="chosenMake">
                                        <option selected :value="null">Make (All)</option>
                                        <option v-for="make in vehicleMakes" v-bind:value="make">{{ make }}</option>
                                    </select>
                                    <select class="custom-select col-md right-component mobile-margin-top" v-model="chosenModel">
                                        <option selected :value="null">Model (All)</option>
                                        <option v-for="model in vehicleModels" v-bind:value="model">{{ model }}</option>
                                    </select>
                                </div>

                                <div class="row top-margin">
                                    <input type="number" class="form-control col-md min-price border-rounding" placeholder="Min. Price" v-model="chosenMinPrice">
                                    <input type="number" class="form-control col-md max-price border-rounding" placeholder="Max. Price" v-model="chosenMaxPrice">
                                </div>

                                <div class="row">
                                    <select class="custom-select col-md-12 top-margin" v-model="chosenType">
                                        <option selected :value="null">Type (All)</option>
                                        <option v-for="type in vehicleTypes" v-bind:value="type">{{ type }}</option>
                                    </select>
                                </div>

                            </div>

                            <div class="container aesthetics">
                                <label>Aesthetics</label>
                                <div class="row">
                                    <select class="custom-select col-md left-component" v-model="chosenExteriorColor">
                                        <option selected :value="null">Exterior Colour (All)</option>
                                        <option v-for="color in colors" v-bind:value="color">{{ color }}</option>
                                    </select>

                                    <select class="custom-select col-md right-component mobile-margin-top" v-model="chosenInteriorColor">
                                        <option selected :value="null">Interior Colour (All)</option>
                                        <option v-for="color in colors" v-bind:value="color">{{ color }}</option>
                                    </select>
                                </div>
                            </div>

                            <div class="container mechanical">
                                <label>Mechanical</label>
                                <div class="row">
                                    <select class="custom-select col-md left-component" v-model="chosenFuelType">
                                        <option selected :value="null">Fuel Type (All)</option>
                                        <option v-for="fuelType in fuelTypes" v-bind:value="fuelType">{{ fuelType }}</option>
                                    </select>

                                    <select class="custom-select col-md right-component mobile-margin-top" v-model="chosenTransmissionType">
                                        <option selected :value="null">Transmission (All)</option>
                                        <option v-for="transmission in transmissionTypes" v-bind:value="transmission">{{ transmission }}</option>
                                    </select>
                                </div>
                            </div>


                        </div>
                        <div slot="footer">
                            <button class="modal-default-button" @click="submitAdvanceSearch">
                                Search
                            </button>
                        </div>
                    </modal>

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
                colors: [],
                fuelTypes: [],
                transmissionTypes: [],

                basicSearchValue: null,

                chosenMake: null,
                chosenModel: null,
                chosenType: null,
                chosenInteriorColor: null,
                chosenExteriorColor: null,
                chosenFuelType: null,
                chosenTransmissionType: null,
                chosenMinPrice: null,
                chosenMaxPrice: null,

                partnersPage: false,
                partnerLogin: false,
                pageTitle: ''
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

            advanceSearchClick: function () {
                this.showModal = true
            },

            // When user chooses a make, populate the appropriate model
            makeChosen: function () {
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