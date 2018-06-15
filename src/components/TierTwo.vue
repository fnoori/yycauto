<template>
    <div id="tierTwo" class="tier-two">
        <div class="tier-two-card">
            <img src="https://i.pinimg.com/originals/c2/57/b8/c257b847e55fd0572fb035ec04bb3a1e.jpg" alt="">
            <div class="tier-two-card-body">
                <div class="tier-two-card-title">
                    <div class="tier-two-card-name">Honda Civic</div>
                    <div class="tier-two-card-price">$23,000</div>
                </div>
                <div class="tier-two-card-text">
                    <div class="quick-spec-values">
                        <div class="other-spec-value">
                            <img class="new-vehicle-icon" src="../../static/store-new-badges-red-white-text.png">
                        </div>
                        <div class="gas-value">
                            Gas
                            <img class="quick-specs-icon" src="../../static/gasoline-pump.png">
                        </div>
                        <div class="other-spec-value">
                            auto
                            <img class="quick-specs-icon" src="../../static/quick-spec-transmission.png">
                        </div>
                    </div>
                </div>
                <div class="contact-btns">
                    <b-button href="#" class="card-btn">See Details</b-button>
                    <b-button href="#" class="card-btn">Contact</b-button>
                </div>
            </div>
            <div class="tier-two-card-footer">
                <a href="#">
                    <img src="../../static/dealership_logo.png" alt="" class="card-logo">
                </a>
                <a href="#" target="_blank" class="location-link">
                    <div>Dealership Name</div>
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
        components: {},
        data() {
            return {}
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

    .tier-two-card {
        width: 38rem;
        margin: 1rem auto;
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
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
        margin-top: 0.1rem;
    }
    .quick-spec-values {
        display: flex;
        text-align: center;
        font-size: 0.9rem;
        width: 100%;
        height: 2.8rem;
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
    .contact-btns {
        float: right;
        margin-top: 0.24rem;
    }
    .contact-btns a {
        color: white;
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
</style>