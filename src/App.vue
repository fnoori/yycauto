<template>
    <div id="app">
        <nav v-bind:class="[{'hide-nav': partnerLogin}, 'navbar navbar-light fixed-top bg-light justify-content-between nav-bar-background']">
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
                        v-on:keyup="basicSearchAutoComplete" @keyup.enter="basicSearchClick">

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

        <nav v-bind:class="[{'hide-nav': !partnerLogin}, 'navbar navbar-light fixed-top bg-light justify-content-between nav-bar-background']">
            <div class="navbar-brand">
                <div id="yyc">
                    <a href="/home"> logo </a>
                </div>
                <div id="automotives">
                    <a href="/home"> Automotives </a>
                </div>
                <div class="nav-bar-title">
                    Welcome Genereic Dealership
                </div>
            </div>
        </nav>

        <router-view/>
        <footer class="footer">
            <div class="copyright">
                &#169; Farzam Noori
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
    var axios_getVehicleDetails = axios.get('http://localhost:3000/getVehicleDetails')

    export default {
        name: 'app'
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>