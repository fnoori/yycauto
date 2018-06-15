<template>
    <div id="tierTwo" class="tier-two">
        <b-form-select v-model="selected" :options="options" class="sort-options">
        </b-form-select>
        <div class="tier-two-card" v-for="curr in carDetails" v-bind:key="curr.message">
            <img :src="curr.image" alt="">
            <div class="tier-two-card-body">
                <div class="tier-two-card-title">
                    <div class="tier-two-card-name">{{curr.title}}</div>
                    <div class="tier-two-card-price">{{curr.price}}</div>
                </div>
                <div class="tier-two-card-text">
                    <div class="quick-spec-values">
                        <div class="other-spec-value">
                            <div v-if="curr.kilometres == 0">
                                <img class="new-vehicle-icon" src="../../static/store-new-badges-red-white-text.png">
                            </div>
                            <div v-else>
                                {{curr.kilometres}} 
                                <img class="quick-specs-icon" src="../../static/km-quick-spec.png">
                            </div>
                        </div>
                        <div class="gas-value">
                            {{curr.fuelType}}
                            <img class="quick-specs-icon" src="../../static/gasoline-pump.png">
                        </div>
                        <div class="other-spec-value">
                            {{curr.transmission}}
                            <img class="quick-specs-icon" src="../../static/quick-spec-transmission.png">
                        </div>
                    </div>
                </div>
            </div>
            <div class="tier-two-card-footer">
                <a href="#">
                    <img src="../../static/dealership_logo.png" alt="" class="card-logo">
                </a>
                <a :href="curr.locationLink" target="_blank" class="location-link">
                    <div>{{ curr.locationName }}</div>
                    <i class="material-icons">
                        location_on
                    </i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
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
                selected: null,
                options: [
                    {value: null, text: 'Sort By'},
                    {value: 'lowHigh', text: 'Price: Low to High'},
                    {value: 'highLow', text: 'Price: High to Low'},
                    {value: 'makeAZ', text: 'Make: A to Z'},
                    {value: 'makeZA', text: 'Make: Z to A'}
                ]
            }
        },
        beforeMount() {
            this.carDetails.sort(function(a, b){return 0.5 - Math.random()})
        },
        methods: {}
    }
</script>

<style scoped>
    a {
        text-decoration: none;
        color: black;
    }

    /* Bootstrap */
    .btn {
        border: none;
        border-radius: 0;
    }
    .custom-select:focus {
        border: 1px solid #ced4da;
    }
    
    /* Custom */
    .sort-options {
        width: 25%;
        margin-left: 28.6rem;
    }
    .tier-two {
        width: 38rem;
        margin: 1rem auto;
    }
    .tier-two-card {
        width: 100%;
        margin: 1rem 0;
        box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
    }
    .tier-two-card:hover {
        background-color: #eeeeee;
        cursor: pointer;
    }
    .tier-two-card img {
        width: 40%;
    }
    .tier-two-card-name {
        font-size: 1.2rem;
    }
    .tier-two-card-price {
        font-size: 0.9rem;
        color: grey;
    }
    .tier-two-card-body {
        width: 60%;
        float: right;
        padding: 0.1rem 0.4rem;
    }
    .tier-two-card-text {
        margin-top: 1rem;
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
        width: 0.7rem !important;
        margin-bottom: 0.15rem;   
    }
    .new-vehicle-icon {
        width: 1.8rem !important;
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
        height: 2rem;
        font-size: 0.9rem;
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
    .tier-two-card-footer {
        background-color: rgba(0, 0, 0, 0.03);
        border-top: 1px solid rgba(0, 0, 0, 0.125);
        padding: 0.13rem 0.4rem;
        height: 2rem;
    }
    .card-logo {
        box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
        width: 4rem !important;
    }
    .location-link {
        float: right;
        font-size: 0.8rem;
        margin-top: 0.2rem;
    }
    .location-link div {
        display: inline-block;
    }
    .location-link i {
        display: inline-block;
        font-size: 1rem;
    }

    @media (max-width: 630px) {
        .btn {
            display: inline;
        }
        .tier-two {
            width: 30rem;
        }
        .tier-two-card {
            width: 100%;
        }
        .sort-options {
            margin-left: 22.6rem;
        }
        .tier-two-card-name {
            font-size: 1rem;
        }
        .tier-two-card-text {
            margin-top: 0.1rem;
        }
        .tier-two-card-price {
            font-size: 0.8rem;
        }
        .quick-spec-values {
            height: 2.5rem;
        }
        .new-vehicle-icon {
            width: 1.1rem !important;
        }
        .quick-spec-values div {
            font-size: 0.7rem;
        }
        .card-btn {
            font-size: 0.6rem;
            height: 1rem;
        }
    }

    @media (max-width: 500px) {
        .tier-two {
            width: 90vw;
        }
        .sort-options {
            margin-left: 68vw;
        }
    }

    @media (max-width: 400px) {
        .sort-options {
            margin-left: 66vw;
            width: 24vw;
        }
        .tier-two-card-name {
            font-size: 4vw;
        }
        .tier-two-card-price {
            font-size: 3vw;
        }
        .quick-spec-values {
            height: 8vw;
        }
        .new-vehicle-icon {
            width: 5vw !important;
        }
        .quick-spec-values div {
            font-size: 3vw;
        }
        .gas-value:before {
            content: '';
            border-right: 1px solid rgba(0, 0, 0, 1);
            position: absolute;
            height: 5vw;
            left: 0;
        }
        .gas-value:after {
            content: '';
            border-right: 1px solid rgba(0, 0, 0, 1);
            position: absolute;
            height: 5vw;
            left: 0;
        }
    }
     @media (max-width: 320px) {
        .tier-two-card-text {
            margin-top: 0.1rem;
        }
     }
</style>