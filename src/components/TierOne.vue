<template>
    <div class="tier-one">
        <b-card-group class="tier-one-card" v-for="curr in items" v-bind:key="curr.message">
            <b-card
                no-body
                display-none
                :title="curr.title"
                :sub-title="curr.price"
                :img-src="curr.image"
                img-alt="Image"
                img-top
                tag="article"
                footer-tag="footer"
                class="mb-2">

                <div class="card-body">
                    <div class="card-title">
                        <div class="card-name">{{curr.title}}</div>
                        <div class="card-price">{{curr.price}}</div>
                    </div>
                    <div class="card-text">
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

                    <div class="contact-btns">
                        <b-button href="#" class="card-btn">See Details</b-button>
                        <b-button href="#" class="card-btn">Contact</b-button>
                    </div>
                </div>
                <div slot="footer" class="card-footer-content">
                    <a :href="curr.locationLink" target="_blank">
                        {{ curr.locationName }}
                        <i class="material-icons">
                            location_on
                        </i>
                    </a>
                </div>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
                dealershipLocation: '123 ABC St. NW',

                items: [
                    { 
                        title: 'Honda Civic', 
                        price: '$23,000',
                        kilometres: '100,219',
                        fuelType: 'Gas',
                        transmission: 'Auto',
                        locationLink: 'http://maps.google.com/?q=Village Honda',
                        locationName: 'Village Honda',
                        image: 'https://fitzdecarts.com/wp-content/uploads/2018/04/honda-civic-456.jpg'
                    },
                    { 
                        title: 'Toyota Corola', 
                        price: '$22,000',
                        kilometres: '0',
                        fuelType: 'Gas',
                        transmission: 'Manual',
                        locationLink: 'http://maps.google.com/?q=Country Hills Toyota',
                        locationName: 'Country Hills Toyota',
                        image: 'http://autowpaper.com/images/toyota-corolla-2015-sport-2.jpg'
                    },
                    { 
                        title: 'Volkwagon Golf GTI', 
                        price: '$35,000',
                        kilometres: '2,000',
                        fuelType: 'Gas',
                        transmission: 'Auto',
                        locationLink: 'http://maps.google.com/?q=Northland Volkswagon',
                        locationName: 'Northland Volkswagon',
                        image: 'https://www.conceptcarz.com/images/Volkswagen/2011-Volkswagen-Golf-GTi-Edition-35-01.jpg'
                    },
                    { 
                        title: 'Ford Focus RS', 
                        price: '$30,000',
                        kilometres: '0',
                        fuelType: 'Gas',
                        transmission: 'Manual',
                        locationLink: 'http://maps.google.com/?q=Northstar Ford',
                        locationName: 'Northstar Ford',
                        image: 'https://icdn-3.motor1.com/images/mgl/J2jkJ/s1/2016-ford-focus-rs.jpg'
                    },
                    { 
                        title: 'Dodge Ram', 
                        price: '$30,000',
                        kilometres: '12,000',
                        fuelType: 'Diesel',
                        transmission: 'Auto',
                        locationLink: 'http://maps.google.com/?q=Calgary Ford',
                        locationName: 'Calgary Ford',
                        image: 'https://images5.alphacoders.com/892/892407.jpg'
                    },
                    { 
                        title: 'Nissan Sentra Spec-V', 
                        price: '$40,000',
                        kilometres: '0',
                        fuelType: 'Gas',
                        transmission: 'Manual',
                        locationLink: 'http://maps.google.com/?q=Cochrane Nissan',
                        locationName: 'Cochrane Nissan',
                        image: 'https://i.pinimg.com/originals/c2/57/b8/c257b847e55fd0572fb035ec04bb3a1e.jpg'
                    }
                ]
            }
        },

        beforeMount() {
            this.items.sort(function(a, b){return 0.5 - Math.random()})
        },

        methods: {}
    }
</script>

<style scoped>
    /* Bootstrap */
    .card {
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
        max-width: 18rem;
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
    .contact-btns {
        float: right;
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
        float: right;
    }
    .card-footer-content i {
        font-size: inherit;
    }
    .card-footer-content a,
    .card-footer-content a:hover {
        text-decoration: none;
        color: black;
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
        .contact-btns a {
            font-size: 0.8rem !important;
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
</style>