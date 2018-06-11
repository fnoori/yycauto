<template>
    <div class="tier-one">
        <b-card-group class="tier-one-card" v-for="curr in items" v-bind:key="curr.message">
            <b-card
                title="Card Title"
                sub-title="$42,000"
                img-src="./static/2017-corolla.jpg"
                img-alt="Image"
                img-top
                tag="article"
                footer-tag="footer"
                style="max-width: 20rem;"
                class="mb-2">
            <div class="card-text">
                <div class="trans">
                    {{curr.message}}
                </div>
                <div class="kilometres">

                </div>
                <div class="fuel-type">

                </div>
            </div>
                <b-button href="#" class="card-btn">See Details</b-button>
                <b-button href="#" class="card-btn">Contact</b-button>
                <div slot="footer" class="card-footer-content">
                    {{ dealershipLocation }}
                    <i class="material-icons">
                        location_on
                    </i>
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
                    { message: 'Foo' },
                    { message: 'Bar' }
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
</style>