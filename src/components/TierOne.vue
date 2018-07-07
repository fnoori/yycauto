<template>
    <div id="tierOne" class="tier-one">
        <b-card-group v-on:click="extractVehicleToSee(curr)" class="tier-one-card" v-for="curr in carDetails" v-bind:key="curr.message">
            <router-link to="/vehicle_detail">
                <b-card
                    no-body
                    :img-src="apiRoute + 'dealerships/' + curr.Dealership.Name.split(' ').join('_') + '/vehicles/' + curr._id + '/' + curr.VehiclePhotos[0]"
                    img-alt="Image"
                    img-top
                    tag="article"
                    footer-tag="footer"
                    class="mb-2">

                    <div class="card-body">
                        <div class="card-title">
                            <div class="card-name">{{curr.BasicInfo.Make}} {{curr.BasicInfo.Model}}</div>
                            <div class="card-price">{{curr.BasicInfo.Price}}</div>
                        </div>
                        <div class="card-text">
                            <div class="quick-spec-values">
                                <div class="other-spec-value">
                                    <div v-if="curr.BasicInfo.Kilometres == 0">
                                        <img class="new-vehicle-icon" src="../../static/store-new-badges-red-white-text.png">
                                    </div>
                                    <div v-else>
                                        {{curr.BasicInfo.Kilometres}} 
                                        <img class="quick-specs-icon" src="../../static/km-quick-spec.png">
                                    </div>
                                </div>
                                <div class="gas-value">
                                    {{curr.BasicInfo['Fuel Type']}}
                                    <img class="quick-specs-icon" src="../../static/gasoline-pump.png">
                                </div>
                                <div class="other-spec-value">
                                    {{curr.MechanicalSpecs.Transmission}}
                                    <img class="quick-specs-icon" src="../../static/quick-spec-transmission.png">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div slot="footer" class="card-footer-content">
                        <a href="#" class="dealership-page">
                            <img :src="apiRoute + 'dealerships/' + curr.Dealership.Name.split(' ').join('_') + '/' + curr.Dealership.Logo" class="card-logo">
                        </a>
                        <a :href="'http://maps.google.com/?q=' + curr.Dealership.Name" target="_blank" class="location-link">
                            {{ curr.Dealership.Name }}
                            <i class="material-icons">
                                location_on
                            </i>
                        </a>
                    </div>
                </b-card>
            </router-link>
        </b-card-group>
    </div>
</template>

<script>
    import router from 'vue-router'
    import {mapActions} from 'vuex'

    export default {
        props: {
            carDetails: {
                type: Array,
                required: true
            }
        },
        components: {},
        data() {
            return {
                apiRoute: process.env.GOOGLE_BUCKET
            }
        },
        created() {
        },
        computed: {
        },
        methods: {
            ...mapActions([
                'extractVehicleToSee'
            ])
        }
    }
</script>

<style scoped>
    a,
    a:focus,
    a:active {
        text-decoration: none !important;
        color: black !important;
    }

    /* Bootstrap */
    .card {
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
        max-width: 18rem;
    }
    .card:hover {
        background-color: #eeeeee;
        cursor: pointer;
    }
    .card-body {
        padding: 0.5rem;
    }
    .card-text {
        margin-bottom: 0.5rem;
        text-align: center;
    }
    .btn {
        border: none;
        border-radius: 0;
    }

    /* Custom */
    .tier-one {
        width: 100%;
        padding-top: 10px;
        overflow-x: scroll;
        padding-bottom: 5px;
        white-space: nowrap;
        position: relative;
    }
    .tier-one-card {
        display: inline-block;
        margin: 0 0.5rem;
    }
    .card-title {
        margin-bottom: 0.5rem;
    }
    .card-name {
        font-size: 1.2rem;
    }
    .card-price {
        color: grey;
    }
    .card-logo {
        width: 3rem;
        float: left;
        box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
    }
    .quick-spec-titles {
        display: flex;
        font-weight: 800;
        text-align: center;
        font-size: 0.9rem;
        width: 100%;
    }
    .quick-spec-titles div {
        display: inline-block;
        width: 33%;
    }
    .quick-spec-values {
        display: flex;
        text-align: center;
        font-size: 0.9rem;
        width: 100%;
        height: 3rem;
        align-items: center;
        background-color: #bdbdbd;
    }
    .quick-specs-icon {
        width: 0.7rem;
        margin-bottom: 0.15rem;   
    }
    .new-vehicle-icon {
        width: 1.8rem;
    }
    .quick-spec-values div {
        display: inline-block;
        width: 33%;
        text-align: center;
    }
    .gas-value {
        position: relative;
    }
    .gas-value:after {
        content: '';
        border-right: 1px solid rgba(0, 0, 0, 1);
        position: absolute;
        height: 20px;
        right: 0;
    }
    .gas-value:before {
        content: '';
        border-right: 1px solid rgba(0, 0, 0, 1);
        position: absolute;
        height: 20px;
        left: 0;
    }
    .other-spec-value div {
        width: 100%;
    }
    .card-btn {
        background-color: #f44336;
    }
    .card-btn:hover {
        background-color: #D81E0F;
    }
    .card-btn:active,
    .card-btn:focus {
        background-color: #D81E0F !important;
        border-color: white !important;
        box-shadow: none !important;
    }
    .location-btn {
        float: right;
    }
    .location-btn i {
        font-size: inherit !important;
    }
    .card-footer {
        padding: 0.4rem 0.8rem;
        font-size: 0.8rem;
    }
    .card-footer-content {
        
    }
    .card-footer-content i {
        font-size: inherit;
    }
    .location-link,
    .location-link:hover {
        float: right;
        font-size: 0.8rem;
    }
    .dealership-page {
        float: left;
        margin-top: 0.1rem;
    }

    @media (max-width: 480px) {
        /* Bootstrap */
        .card {
            box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
            max-width: 14rem;
        }

        /* Custom */
        .card-name {
            font-size: 1rem;
        }
        .card-price {
            font-size: 0.8rem;
        }
        .quick-spec-values {
            font-size: 0.8rem;
            height: 2.7rem;
        }
    }
    
    @media (max-width: 414px) {
        .quick-spec-titles {
            font-size: 3vw;
        }
    }

    @media (max-width: 400px) {
    }
</style>