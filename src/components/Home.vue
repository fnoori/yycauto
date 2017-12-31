<template>
    <div id="home" class="home">
        <div id="tierOneSec" v-bind:class="[{ 'hide-tier': shouldHideTierOne}, 'tier-one']">
            <div v-for="tierOne in tierOneVehicles" class="card tier-one-card">
                <div class="card-price">${{ tierOne.BasicInfo.Price }}</div>
                <img class="card-img-top" :src="tierOne.VehiclePictures[0]">
                <div class="card-body">
                    <h4 class="card-title">
                        <div>{{ tierOne.BasicInfo.Year }}</div>
                        <div>{{ tierOne.BasicInfo.Make }} {{tierOne.BasicInfo.Model}}</div>
                    </h4>
                    <div class="quick-specs">
                        <div class="trans">
                            <div class="quick-specs-title">
                                Transmission
                            </div>
                            <div class="quick-specs-value">
                                {{ tierOne.MechanicalSpecs.Transmission }}
                            </div>
                        </div>
                        <div class="kilometers">
                            <div class="quick-specs-title">
                                Kilometers
                            </div>
                            <div class="quick-specs-value">
                                {{ tierOne.BasicInfo.Kilometers }}
                            </div>
                        </div>
                        <div class="fuel-type">
                            <div class="quick-specs-title">
                                Fuel Type
                            </div>
                            <div class="quick-specs-value">
                                {{ tierOne.BasicInfo.FuelType }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="custom-card-footer">
                    <div class="btn btn-primary card-phone">
                        <a :href="tierOne.DealershipPhone">
                            {{ tierOne.DealershipInfo.DealershipPhone }}
                        </a>
                    </div>
                    <div class="btn btn-primary">
                        <router-link :to="{name:'DetailsPage', params:{vehicle:{tierOne}}}">Details</router-link>
                    </div>
                </div>
            </div>
            <div v-bind:class="[{'tier-one-grey-load-more': !tierOneCanLoadMore}, 'load-more']" @click="loadMore(1)">
                <i class="material-icons">keyboard_arrow_right</i>
            </div>
        </div>
        <div id="tierTwoSec" v-bind:class="[{ 'hide-tier': shouldHideTierTwo }, 'tier-two']">
            <div v-for="tierTwo in tierTwoVehicles" class="card tier-two-card">
                <div class="tier-two-card-price">${{ tierTwo.BasicInfo.Price }}</div>
                <img class="card-img-top" :src="tierTwo.VehiclePictures[0]">
                <div class="card-body">
                    <h4 class="card-title">
                        <div>{{ tierTwo.BasicInfo.Year }}</div>
                        <div>{{ tierTwo.BasicInfo.Make }} {{ tierTwo.BasicInfo.Model }}</div>
                    </h4>
                    <div class="quick-specs">
                        <div class="trans">
                            <div class="quick-specs-title">
                                Transmission
                            </div>
                            <div class="quick-specs-value">
                                {{ tierTwo.MechanicalSpecs.Transmission }}
                            </div>
                        </div>
                        <div class="kilometers">
                            <div class="quick-specs-title">
                                Kilometers
                            </div>
                            <div class="quick-specs-value">
                                {{ tierTwo.BasicInfo.Kilometers }}
                            </div>
                        </div>
                        <div class="fuel-type">
                            <div class="quick-specs-title">
                                Fuel Type
                            </div>
                            <div class="quick-specs-value">
                                {{ tierTwo.BasicInfo.FuelType }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="custom-card-footer">
                    <div class="btn btn-primary tier-two-card-phone">
                        <a :href="tierTwo.DealershipPhone">
                            {{ tierTwo.DealershipInfo.DealershipPhone }}
                        </a>
                    </div>
                    <div class="btn btn-primary">
                        <a href="#">Details</a>
                    </div>
                </div>
            </div>
            <div class="tier-two-load-more" @click="loadMore(2)">
                <i class="material-icons">keyboard_arrow_right</i>
            </div>
        </div>

        <div id="tierThreeSec" v-bind:class="[{ 'hide-tier':  shouldHideTierThree }, 'tier-three']">
            <div v-for="tierThree in tierThreeVehicles" class="card tier-three-card">
                <div class="tier-three-card-price">${{ tierThree.BasicInfo.Price }}</div>
                <img class="card-img-top" :src="tierThree.VehiclePictures[0]">
                <div class="card-body">
                    <h4 class="tier-three-card-title">
                        <div>{{ tierThree.BasicInfo.Year }}</div>
                        <div>{{ tierThree.BasicInfo.Make }} {{ tierThree.BasicInfo.Model }}</div>
                    </h4>
                    <div class="tier-three-quick-specs">
                        <div class="trans">
                            <div class="quick-specs-title">
                                Transmission
                            </div>
                            <div class="quick-specs-value">
                                {{ tierThree.MechanicalSpecs.Transmission }}
                            </div>
                        </div>
                        <div class="kilometers">
                            <div class="quick-specs-title">
                                Kilometers
                            </div>
                            <div class="quick-specs-value">
                                {{ tierThree.BasicInfo.Kilometers }}
                            </div>
                        </div>
                        <div class="fuel-type">
                            <div class="quick-specs-title">
                                Fuel Type
                            </div>
                            <div class="quick-specs-value">
                                {{ tierThree.BasicInfo.FuelType }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="custom-card-footer tier-three-card-footer">
                    <div class="btn btn-primary tier-three-card-phone">
                        <a :href="tierThree.DealershipPhone">
                            {{ tierThree.DealershipInfo.DealershipPhone }}
                        </a>
                    </div>
                    <div class="btn btn-primary">
                        <a href="#">Details</a>
                    </div>
                </div>
            </div>
            <div class="tier-three-load-more" @click="loadMore(3)">
                <i class="material-icons">keyboard_arrow_right</i>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import config from '../../config/config.js'

    export default {
        name: 'Home',
        data() {
            return {
                msg: 'Welcome To The Home Page!',
                getVehicleRoute: 'vehicles',

                allVehicles: [],

                tierOneVehicles: [],
                tierTwoVehicles: [],
                tierThreeVehicles: [],

                shouldHideTierOne: false,
                shouldHideTierTwo: false,
                shouldHideTierThree: false,

                tierOneCanLoadMore: true,

                tierOneLazyLoadSkipBy: 0,
                tierTwoLazyLoadSkipBy: 0,
                tierThreeLazyLoadSkipBy: 0,

                vehicleToPassToDetails: JSON
            }
        },
        watch: {
            '$route'(from, to) {
                if (this.$route.query.loggedOut) {
                    this.pageInit()
                    return
                }

                if (this.$route.query.searchIs != null) {
                    this.resetTiers()
                    this.getVehicleRoute = 'basicSearch/' + this.$route.query.searchIs

                    axios.get('http://' + config.api_address + '/basicSearch/' + this.$route.query.searchIs + '/1/' + this.tierOneLazyLoadSkipBy).then((response) => {
                        this.tierOneVehicles = response.data
                        if (this.tierOneVehicles.length <= 0) {
                            this.shouldHideTierOne = true
                        } else {
                            this.tierOneLazyLoadSkipBy += 10
                        }
                    }).catch(error => {
                        console.log('An error ocurred while trying to parse your search', error)
                    })

                    axios.get('http://' + config.api_address + '/basicSearch/' + this.$route.query.searchIs + '/2/' + this.tierTwoLazyLoadSkipBy).then((response) => {
                        this.tierTwoVehicles = response.data
                        if (this.tierTwoVehicles.length <= 0) {
                            this.shouldHideTierTwo = true
                        } else {
                            this.tierTwoLazyLoadSkipBy += 10
                        }
                    }).catch(error => {
                        console.log('An error ocurred while trying to parse your search', error)
                    })

                    axios.get('http://' + config.api_address + '/basicSearch/' + this.$route.query.searchIs + '/3/' + this.tierThreeLazyLoadSkipBy).then((response) => {
                        this.tierThreeVehicles = response.data
                        if (this.tierThreeVehicles <= 0) {
                            this.shouldHideTierThree = true
                        } else {
                            this.tierThreeLazyLoadSkipBy += 10
                        }
                    }).catch(error => {
                        console.log('An error ocurred while trying to parse your search', error)
                    })
                } else if (this.$route.query.advancedSearchQuery != null) {
                    var incomingAdvancedSearch = JSON.parse(this.$route.query.advancedSearchQuery)
                    this.resetTiers()

                    this.getVehicleRoute = 'advancedSearch/' +
                        incomingAdvancedSearch.make + '/' + incomingAdvancedSearch.model + '/' + incomingAdvancedSearch.type + '/' +
                        incomingAdvancedSearch.extColor + '/' + incomingAdvancedSearch.intColor + '/' + incomingAdvancedSearch.fuelType + '/' +
                        incomingAdvancedSearch.transmission + '/' + incomingAdvancedSearch.minPrice + '/' + incomingAdvancedSearch.maxPrice

                    axios.get('http://' + config.api_address + '/advancedSearch/' +
                        incomingAdvancedSearch.make + '/' + incomingAdvancedSearch.model + '/' + incomingAdvancedSearch.type + '/' +
                        incomingAdvancedSearch.extColor + '/' + incomingAdvancedSearch.intColor + '/' + incomingAdvancedSearch.fuelType + '/' +
                        incomingAdvancedSearch.transmission + '/' + incomingAdvancedSearch.minPrice + '/' + incomingAdvancedSearch.maxPrice + '/1/' +
                        this.tierOneLazyLoadSkipBy
                    ).then((response) => {
                        this.tierOneVehicles = response.data
                        if (this.tierOneVehicles.length <= 0) {
                            this.shouldHideTierOne = true
                        } else {
                            this.tierOneLazyLoadSkipBy += 10
                        }
                    }).catch(error => {
                        console.log('An error ocurred while trying to parse your search', error)
                    })

                    axios.get('http://' + config.api_address + '/advancedSearch/' +
                        incomingAdvancedSearch.make + '/' + incomingAdvancedSearch.model + '/' + incomingAdvancedSearch.type + '/' +
                        incomingAdvancedSearch.extColor + '/' + incomingAdvancedSearch.intColor + '/' + incomingAdvancedSearch.fuelType + '/' +
                        incomingAdvancedSearch.transmission + '/' + incomingAdvancedSearch.minPrice + '/' + incomingAdvancedSearch.maxPrice + '/2/' +
                        this.tierTwoLazyLoadSkipBy
                    ).then((response) => {
                        this.tierTwoVehicles = response.data
                        if (this.tierTwoVehicles.length <= 0) {
                            this.shouldHideTierTwo = true
                        } else {
                            this.tierTwoLazyLoadSkipBy += 10
                        }
                    }).catch(error => {
                        console.log('An error ocurred while trying to parse your search', error)
                    })

                    axios.get('http://' + config.api_address + '/advancedSearch/' +
                        incomingAdvancedSearch.make + '/' + incomingAdvancedSearch.model + '/' + incomingAdvancedSearch.type + '/' +
                        incomingAdvancedSearch.extColor + '/' + incomingAdvancedSearch.intColor + '/' + incomingAdvancedSearch.fuelType + '/' +
                        incomingAdvancedSearch.transmission + '/' + incomingAdvancedSearch.minPrice + '/' + incomingAdvancedSearch.maxPrice + '/3/' +
                        this.tierThreeLazyLoadSkipBy
                    ).then((response) => {

                        this.tierThreeVehicles = response.data
                        if (this.tierThreeVehicles <= 0) {
                            this.shouldHideTierThree = true
                        } else {
                            this.tierThreeLazyLoadSkipBy += 10
                        }
                    }).catch(error => {
                        console.log('An error ocurred while trying to parse your search', error)
                    })
                }
            }
        },
        created: function () {
            this.pageInit()
        },
        methods: {
            pageInit: function () {
                axios.get('http://' + config.api_address + '/' + this.getVehicleRoute + '/1/' + this.tierOneLazyLoadSkipBy)
                    .then((response) => {
                        this.tierOneVehicles = response.data
                        if (this.tierOneVehicles.length <= 0) {
                            this.shouldHideTierOne = true
                        } else {
                            this.tierOneLazyLoadSkipBy += 10
                        }
                    })
                    .catch(error => {
                        console.log('An error ocurred while trying to retreive tier 1 data', error)
                    })

                axios.get('http://' + config.api_address + '/' + this.getVehicleRoute + '/2/' + this.tierTwoLazyLoadSkipBy)
                    .then((response) => {
                        this.tierTwoVehicles = response.data
                        if (this.tierTwoVehicles.length <= 0) {
                            this.shouldHideTierTwo = true
                        } else {
                            this.tierTwoLazyLoadSkipBy += 10
                        }
                    })
                    .catch(error => {
                        console.log('An error ocurred while trying to retreive tier 1 data', error)
                    })

                axios.get('http://' + config.api_address + '/' + this.getVehicleRoute + '/3/' + this.tierThreeLazyLoadSkipBy)
                    .then((response) => {
                        this.tierThreeVehicles = response.data
                        if (this.tierThreeVehicles <= 0) {
                            this.shouldHideTierThree = true
                        } else {
                            this.tierThreeLazyLoadSkipBy += 10
                        }
                    })
                    .catch(error => {
                        console.log('An error ocurred while trying to retreive tier 1 data', error)
                    })
            },

            loadMore: function (tier) {
                if (tier == 1) {
                    axios.get('http://' + config.api_address + '/' + this.getVehicleRoute + '/1/' + this.tierOneLazyLoadSkipBy)
                        .then((response) => {
                            if (response.data.length <= 0) {
                                console.log('no more !')
                                this.tierOneCanLoadMore = false
                                return
                            }

                            var newTierOne = response.data
                            for (var key in newTierOne) {
                                if (newTierOne.hasOwnProperty(key)) {
                                    if (newTierOne[key].AdTier == 1) {
                                        this.tierOneVehicles.push(newTierOne[key])
                                    }
                                }
                            }
                            this.tierOneLazyLoadSkipBy += 10
                            console.log('tierone length: ', this.tierOneVehicles.length)
                        })
                        .catch(error => {
                            console.log('An error ocurred while trying to retreive tier 1 data', error)
                        })
                } else if (tier == 2) {
                    axios.get('http://' + config.api_address + '/' + this.getVehicleRoute + '/2/' + this.tierTwoLazyLoadSkipBy)
                        .then((response) => {
                            var newTierTwo = response.data
                            for (var key in newTierTwo) {
                                if (newTierTwo.hasOwnProperty(key)) {
                                    if (newTierTwo[key].AdTier == 2) {
                                        this.tierTwoVehicles.push(newTierTwo[key])
                                    }
                                }
                            }
                            this.tierTwoLazyLoadSkipBy += 10
                            console.log('tiertwo length: ', this.tierTwoVehicles.length)
                        })
                        .catch(error => {
                            console.log('An error ocurred while trying to retreive tier two cars', error)
                        })
                } else {
                    axios.get('http://' + config.api_address + '/' + this.getVehicleRoute + '/3/' + this.tierThreeLazyLoadSkipBy)
                        .then((response) => {
                            var newTierThree = response.data
                            for (var key in newTierThree) {
                                if (newTierThree.hasOwnProperty(key)) {
                                    if (newTierThree[key].AdTier == 3) {
                                        this.tierThreeVehicles.push(newTierThree[key])
                                    }
                                }
                            }
                            this.tierThreeLazyLoadSkipBy += 10
                            console.log('tierthree length: ', this.tierThreeVehicles.length)
                        })
                        .catch(error => {
                            console.log('An error ocurred while trying to retreive tier three cars', error)
                        })
                }
            },

            resetTiers: function () {
                this.tierOneLazyLoadSkipBy = 0
                this.tierTwoLazyLoadSkipBy = 0
                this.tierThreeLazyLoadSkipBy = 0
                this.tierOneVehicles = []
                this.tierTwoVehicles = []
                this.tierThreeVehicles = []
            }
        }
    }
</script>

<style scoped>
    .home {}

    .card {
        display: inline-block;
        border: 0;
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
        border-radius: 0;
    }

    .card-img-top {
        border-radius: 0;
    }

    /* tier 1 */

    .tier-one {
        width: 100%;
        padding-top: 10px;
        overflow-x: scroll;
        padding-bottom: 5px;
        white-space: nowrap;
    }

    .tier-one-card {
        width: 25rem;
        height: 22.8rem;
        overflow: hidden;
        margin: 0 0.3rem;
    }

    .card-title {
        font-size: 1em;
        padding: 0.4rem 0.4rem 0rem 0.4rem;
        margin-bottom: 0.2rem;
    }

    .card-title div {
        display: inline-block;
    }

    .card-price {
        position: absolute;
        font-size: 0.9em;
        font-weight: bold;
        top: 0.5rem;
        left: 0.5rem;
        border-radius: 0.2rem;
        padding: 0.3rem;
        background-color: rgba(244, 67, 54, 1);
        color: rgba(255, 255, 255, 0.9);
        box-shadow: 0rem 0.1rem 0.5rem rgba(0, 0, 0, 0.5);
        letter-spacing: 0.15rem;
    }

    .card-body {
        padding: 0rem;
        height: 100%;
    }

    .quick-specs {
        text-align: center;
        background-color: rgba(0, 0, 0, 0.10);
        padding: 1rem;
        font-size: 0.9em;
    }

    .quick-specs-title {
        color: rgba(0, 0, 0, 0.7);
    }

    .quick-specs-value {
        font-weight: bold;
    }

    .trans {
        display: inline-block;
        width: 33.33%;
    }

    .kilometers {
        display: inline-block;
        width: 33.33%;
        border-right: 1px solid rgba(0, 0, 0, 0.2);
        border-left: 1px solid rgba(0, 0, 0, 0.2);
    }

    .fuel-type {
        display: inline-block;
        width: 33.33%;
    }

    .card-phone:hover {
        cursor: default;
    }

    .card-phone:after {
        content: '';
        border-right: 1px solid rgba(250, 250, 250, 0.5);
        right: 47%;
        bottom: 0.6rem;
        position: absolute;
        height: 20px;
    }

    .custom-card-footer {
        position: absolute;
        background-color: #F44336;
        bottom: 0;
        width: 100%;
        text-align: center;
    }

    .custom-card-footer div {
        width: 50%;
        background-color: #F44336;
        border-radius: 0px;
        color: rgba(255, 255, 255, 0.9);
        border-color: #F44336;
    }

    .custom-card-footer div:hover {
        background-color: rgba(244, 67, 54, 1);
        border-color: rgba(244, 67, 54, 1);
        color: rgba(255, 255, 255, 0.9);
    }

    .custom-card-footer div:active,
    .custom-card-footer div:focus {
        background-color: rgba(244, 67, 54, 1) !important;
        border-color: rgba(244, 67, 54, 1) !important;
        color: rgba(255, 255, 255, 0.9) !important;
        box-shadow: none !important;
    }

    .custom-card-footer div a {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.9);
    }

    .load-more {
        width: 3rem;
        height: 22.8rem;
        overflow: hidden;
        padding-top: 11rem;
        margin: 0 0.3rem;
        background-color: rgba(244, 67, 54, 1) !important;
        color: white;
        display: inline-block;
        text-align: center;
        cursor: pointer;
    }

    .tier-one-grey-load-more {
        width: 3rem;
        height: 22.8rem;
        overflow: hidden;
        padding-top: 11rem;
        margin: 0 0.3rem;
        background-color: lightgray !important;
        color: black;
        display: inline-block;
        text-align: center;
        cursor: pointer;
    }

    /* tier 2 */

    .tier-two {
        width: 100%;
        padding-top: 10px;
        overflow-x: scroll;
        padding-bottom: 5px;
        white-space: nowrap;
    }

    .tier-two-card {
        width: 20rem;
        height: 20rem;
        overflow: hidden;
        margin: 0 0.3rem;
    }

    .tier-two-card-phone:hover {
        cursor: default;
    }

    .tier-two-card-phone:after {
        content: '';
        border-right: 1px solid rgba(250, 250, 250, 0.5);
        right: 46%;
        bottom: 0.6rem;
        position: absolute;
        height: 20px;
    }

    .tier-two-card-price {
        padding: 0.2rem;
        line-height: 1rem;
        position: absolute;
        font-size: 0.9em;
        font-weight: bold;
        top: 0.5rem;
        left: 0.5rem;
        border-radius: 0.2rem;
        background-color: rgba(244, 67, 54, 1);
        color: rgba(255, 255, 255, 0.9);
        box-shadow: 0rem 0.1rem 0.5rem rgba(0, 0, 0, 0.5);
        letter-spacing: 0.15rem;
    }

    .tier-two-load-more {
        width: 3rem;
        height: 20rem;
        overflow: hidden;
        padding-top: 9rem;
        margin: 0 0.3rem;
        background-color: rgba(244, 67, 54, 1) !important;
        color: white;
        display: inline-block;
        text-align: center;
        cursor: pointer;
    }

    .tier-two-grey-load-more {
        width: 3rem;
        height: 20rem;
        overflow: hidden;
        padding-top: 9rem;
        margin: 0 0.3rem;
        background-color: lightgray !important;
        color: black;
        display: inline-block;
        text-align: center;
        cursor: pointer;
    }

    /* tier 3 */

    .tier-three {
        width: 100%;
        padding-top: 10px;
        overflow-x: scroll;
        padding-bottom: 5px;
        white-space: nowrap;
    }

    .tier-three-card {
        width: 15rem;
        height: 14.7rem;
        overflow: hidden;
        margin: 0 0.3rem;
    }

    .tier-three-card-title {
        font-size: 0.9em;
        padding: 0.4rem 0.4rem 0rem 0.4rem;
        margin-bottom: 0.2rem;
    }

    .tier-three-card-title div {
        display: inline-block;
    }

    .tier-three-card-price {
        padding: 0.2rem;
        line-height: 0.8rem;
        position: absolute;
        font-size: 0.8em;
        font-weight: bold;
        top: 0.5rem;
        left: 0.5rem;
        border-radius: 0.2rem;
        background-color: rgba(244, 67, 54, 1);
        color: rgba(255, 255, 255, 0.9);
        box-shadow: 0rem 0.1rem 0.5rem rgba(0, 0, 0, 0.5);
        letter-spacing: 0.15rem;
    }

    .tier-three-quick-specs {
        text-align: center;
        background-color: rgba(0, 0, 0, 0.10);
        padding: 0.3rem;
        font-size: 0.7em;
    }

    .tier-three-card-footer {
        position: absolute;
        background-color: #F44336;
        bottom: 0;
        width: 100%;
        text-align: center;
    }

    .tier-three-card-footer div {
        width: 50%;
        background-color: #F44336;
        border-radius: 0px;
        color: rgba(255, 255, 255, 0.9);
        border-color: #F44336;
        font-size: 0.8rem;
    }

    .tier-three-card-phone:hover {
        cursor: default;
    }

    .tier-three-card-phone:after {
        content: '';
        border-right: 1px solid rgba(250, 250, 250, 0.5);
        right: 46%;
        bottom: 0.5rem;
        position: absolute;
        height: 18px;
    }

    .tier-three-load-more {
        width: 3rem;
        height: 14.7rem;
        overflow: hidden;
        padding-top: 7rem;
        margin: 0 0.3rem;
        background-color: rgba(244, 67, 54, 1) !important;
        color: white;
        display: inline-block;
        text-align: center;
        cursor: pointer;
    }

    .tier-two-grey-load-more {
        width: 3rem;
        height: 14.7rem;
        overflow: hidden;
        padding-top: 7rem;
        margin: 0 0.3rem;
        background-color: lightgray !important;
        color: black;
        display: inline-block;
        text-align: center;
        cursor: pointer;
    }

    .footer {
        width: 100%;
        margin-top: 1rem;
        height: 3rem;
        line-height: 3rem;
        padding: 0 1rem;
        color: white;
        background-color: rgba(244, 67, 54, 1);
    }

    .footer div {}

    .footer .copyright {
        float: left;
    }

    .footer .contact-info {
        float: right;
    }

    .hide-tier {
        display: none !important;
    }

    @media (max-width: 800px) {

        .tier-one-card {
            width: 18rem;
            height: 17.5rem;
            overflow: hidden;
            margin: 0 0.3rem;
        }
        .load-more {
            height: 17.5rem;
            padding-top: 8rem;
        }
        .tier-one-grey-load-more {
            height: 17.5rem;
            padding-top: 8rem;
        }



        .card-phone:after {
            content: '';
            border-right: 1px solid rgba(250, 250, 250, 0.5);
            right: 45%;
            bottom: 0.6rem;
            position: absolute;
            height: 20px;
        }
        .card-price {
            padding: 0.2rem;
            line-height: 1rem;
        }
        .quick-specs {
            text-align: center;
            background-color: rgba(0, 0, 0, 0.10);
            padding: 0.4rem;
            font-size: 0.8em;
        }

        .tier-two-card {
            width: 16rem;
            height: 16.3rem;
            overflow: hidden;
            margin: 0 0.3rem;
        }
        .tier-two-load-more {
            height: 16.3rem;
            padding-top: 8rem;
        }
        .tier-two-grey-load-more {
            height: 16.3rem;
            padding-top: 8rem;
        }

        .tier-two-card-phone:hover {
            cursor: default;
        }
        .tier-two-card-phone:after {
            bottom: 0.6rem;
            right: 43%;
        }

        .tier-three-card {
            width: 15rem;
            height: 14.7rem;
            overflow: hidden;
            margin: 0 0.3rem;
        }
    }

    @media (max-width: 470px) {
        .footer {
            font-size: 0.8em;
        }
    }

    @media (max-width: 414px) {
        .tier-one {
            -webkit-overflow-scrolling: touch;
            overflow: auto;
            padding-bottom: 10px;
        }
        .tier-two {
            -webkit-overflow-scrolling: touch;
            overflow: auto;
            padding-bottom: 10px;
        }
        .tier-three {
            -webkit-overflow-scrolling: touch;
            overflow: auto;
            padding-bottom: 10px;
        }
        .tier-one-card {
            height: 17.4rem;
        }
        .tier-three-card {
            width: 15rem;
            height: 14.8rem;
            overflow: hidden;
            margin: 0 0.3rem;
        }
        .tier-three-card-footer div {
            font-size: 0.9rem;
        }
        .tier-three-card-phone:after {
            right: 45%;
        }
    }

    @media (max-width: 320px) {
        .footer {
            font-size: 0.6em;
        }
    }
</style>