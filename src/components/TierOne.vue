<template>
    <div class="tier-one">
        <b-card-group class="tier-one-card" v-for="curr in items" v-bind:key="curr.message">
            <b-card
                :title="curr.title"
                :sub-title="curr.price"
                img-src="./static/2017-corolla.jpg"
                img-alt="Image"
                img-top
                tag="article"
                footer-tag="footer"
                style="max-width: 18rem;"
                class="mb-2">

                <div class="card-text">
                    <div class="quick-spec-values">
                        <div>
                            {{curr.kilometres}} 
                            <img class="quick-specs-icon" src="../../static/km-quick-spec.png">
                        </div>
                        <div class="gas-value">
                            {{curr.fuelType}}
                            <img class="quick-specs-icon" src="../../static/gasoline-pump.png">
                        </div>
                        <div>
                            {{curr.transmission}}
                            <img class="quick-specs-icon" src="../../static/quick-spec-transmission.png">
                        </div>
                    </div>
                </div>

                <div class="contact-btns">
                    <b-button href="#" class="card-btn">See Details</b-button>
                    <b-button href="#" class="card-btn">Contact</b-button>
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
                        kilometres: '1,200',
                        fuelType: 'Gas',
                        transmission: 'Auto',
                        locationLink: 'http://maps.google.com/?q=Village Honda',
                        locationName: 'Village Honda'
                    },
                    { 
                        title: 'Toyota Corola', 
                        price: '$22,000',
                        kilometres: '1,100',
                        fuelType: 'Gas',
                        transmission: 'Manual',
                        locationLink: 'http://maps.google.com/?q=Country Hills Toyota',
                        locationName: 'Country Hills Toyota'
                    }
                ]
            }
        },

        methods: {}
    }
</script>

<style scoped>
    /* Bootstrap */
    .card {
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
    }
    .card-body {
        padding: 0.8rem;
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
        margin-bottom: 0.2rem;        
    }
    .quick-spec-values div {
        display: inline-block;
        width: 33%;
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

    @media (max-width: 991px) {
    }
    
    @media (max-width: 414px) {
        .quick-spec-titles {
            font-size: 3vw;
        }
    }
</style>