<template>
    <div class="details-page">
        <div v-bind="vehicle" class="page-body">
            <div class="car-title">{{ vehicle.BasicInfo.Year }} {{ vehicle.BasicInfo.Make }} {{ vehicle.BasicInfo.Model }}</div>
            <div class="top-section">
                <div class="gallery">
                    <img v-for="vehicleImage in vehicle.VehiclePictures" 
                        :src="vehicleImage" @click="chosenImage=vehicleImage"/>
                </div>

                <div class="chosen-image">
                    <img :src="chosenImage" />
                </div>

                <div class="contact-details">
                    <div class="dealership-logo">
                        <img src="http://www.clker.com/cliparts/O/v/c/b/i/6/generic-logo-hi.png" />
                    </div>

                    <div class="contact-info-price">
                        <div class="price">
                            <i class="material-icons">attach_money</i>
                            {{ vehicle.BasicInfo.Price }}
                        </div>
                        <div class="phone">
                            <i class="material-icons">phone</i>
                            <a :href="'tel:' + vehicle.DealershipInfo.DealershipPhone">
                                {{ vehicle.DealershipInfo.DealershipPhone }}
                            </a>
                        </div>
                        <div class="email">
                            <i class="material-icons">email</i>
                            <a :href="'mailto:' + vehicle.DealershipInfo.DealershipEmail" target="_top">Send Email</a>
                        </div>
                        <div class="location">
                            <i class="material-icons">home</i>
                            <a :href="'https://maps.google.com/?q=' + vehicle.DealershipInfo.Dealership" target="_blank">{{ vehicle.DealershipInfo.DealershipCity }}</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="description">
                <label>
                    Description
                </label>
                {{ vehicle.DescriptionOfVehicle }}
            </div>

            <div class="specs">
                <label>Specs.</label>
                <b-tabs>
                    <b-tab title="Mechanical" active>
                        <table class="table table-striped">
                            <tbody>
                                <tr v-for="(value, key) in vehicle.MechanicalSpecs">
                                    <td v-if="key == 'CarProof'">
                                        <img src="../assets/images/car-proof.png" />
                                    </td>
                                    <td v-else>{{ key }}</td>
                                    <td>{{ value }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </b-tab>
                    <b-tab title="Fuel Economy">
                        <table class="table table-striped">
                            <tbody>
                                <tr v-for="(value, key) in vehicle.FuelEconomy">
                                    <td>{{ key }}</td>
                                    <td>{{ value }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </b-tab>
                    <b-tab title="Features">
                        <table class="table table-striped">
                            <tbody>
                                <tr v-for="feature in vehicle.ExtraFeatures">
                                    <td>{{ feature }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </b-tab>
                </b-tabs>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'VehicleDetails',
        data() {
            return {
                chosenImage: '',
                vehicle: null,
                activeImage: false
            }
        },
        created() {
            this.pageInitialization()
        },
        methods: {
            pageInitialization: function () {
                var tmp_vehicle = this.$route.params.vehicle

                for (var key in tmp_vehicle) {
                    if (tmp_vehicle.hasOwnProperty(key)) {
                        this.vehicle = tmp_vehicle[key]
                        break
                    }
                }
                this.chosenImage = this.vehicle.VehiclePictures[0]
            },
            imageClicked: function (image) {
                this.chosenImage = image
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .details-page {}

    .details-page .page-body {
        width: 80vw;
        height: 100%;
        margin: auto;
        -webkit-overflow-scrolling: touch;
    }

    .car-title {
        font-size: 1.5vw;
    }

    .top-section {
        margin-bottom: 1vw;
        height: 26vw;
    }

    .gallery {
        width: 14vw;
        height: 25.9vw;
        border-right: none;
        float: left;
        overflow-y: scroll;
        box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
    }

    .gallery img {
        width: 100%;
        padding: 0.5vw;
    }

    .chosen-image {
        width: 46.1vw;
        margin-left: 0.5vw;
        float: left;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    }

    .chosen-image img {
        width: 100%;
    }

    .contact-details {
        width: 19vw;
        height: 25.9vw;
        float: right;
        position: relative;
        box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
        border-bottom: none;
    }

    .dealership-logo {
        width: 100%;
        height: 100%;
    }

    .contact-details a {
        text-decoration: none;
        color: black;
    }

    .contact-details img {
        width: 15vw;
        position: absolute;
        top: 4.6vw;
        margin-left: 1.8vw;
    }

    .contact-info-price {
        position: absolute;
        bottom: 0;
        width: 100%;
        font-weight: bold;
    }

    .contact-info-price div {
        background-color: rgba(0, 0, 0, 0.10);
        height: 2.8vw;
        position: relative;
        padding-left: 4vw;
        text-overflow: ellipsis;
    }

    .contact-info-price div i {
        position: absolute;
        left: 0;
        background-color: rgba(0, 0, 0, 0.1);
        padding-top: 0.5vw;
        padding-left: 0.4vw;
        width: 2.7vw;
        height: 2.8vw;
        bottom: 0;
        font-size: 1.8vw;
    }

    .price {
        font-size: 1.3vw;
        padding-top: 0.6vw;
        font-weight: 800;
        letter-spacing: 0.1rem;
    }

    .phone {
        font-size: 1.2vw;
        padding-top: 0.5vw;
        margin-top: 0.4vw;
    }

    .email {
        font-size: 1.2vw;
        padding-top: 0.5vw;
        margin-top: 0.4vw;
    }

    .location {
        font-size: 1.2vw;
        height: 3vw;
        padding-top: 0.5vw;
        margin-top: 0.4vw;
    }

    .description {
        width: 80vw;
        overflow-y: visible;
        padding: 0vw 0.5vw;
        font-size: 0.9em;
        margin-bottom: 1vw;
    }

    .description label {
        display: block;
        font-size: 1.4em;
        font-weight: bold;
        margin-bottom: 0;
    }

    .specs {
        padding: 0vw 0.5vw;
        width: 80vw;
    }

    .specs label {
        display: block;
        font-size: 1.2em;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    .specs thead {
        display: none;
    }

    .specs .tabs {
        margin-bottom: 2rem;
    }

    .specs ul li a {
        text-decoration: none !important;
        color: black !important;
    }

    .specs .tabs .tab-content .tab-pane {
        border-right: 1px solid #e9ecef;
        border-left: 1px solid #e9ecef;
        border-bottom: 1px solid #e9ecef;
    }

    .specs .tabs .tab-content .table {
        width: 100.1% !important;
        max-width: 100.1% !important;
    }

    .specs .tabs ul {
        outline: none;
        border: none;
    }

    .table {
        margin-bottom: 0;
    }

    .specs table td {
        width: 50%;
    }

    .specs .table td img {
        width: 4rem;
    }

    .tst-chosen-image {
        background-color: #F44336;
    }

    @media (max-width: 800px) {
        .details-page .page-body {
            position: relative;
        }
        .car-title {
            font-size: 2.5vw;
        }
        .top-section {
            margin-bottom: 1vw;
            height: 78vw;
        }
        .gallery {
            float: none;
            position: absolute;
            top: 51vw;
            width: 100%;
            height: 18.9vw;
            overflow-y: hidden;
            overflow-x: scroll;
            display: inline-block;
            white-space: nowrap;
            z-index: 20;
        }
        .gallery img {
            width: 37%;
            padding: 0;
        }
        .chosen-image {
            float: none;
            position: absolute;
            top: 5vw;
            margin-left: 0;
            width: 100%;
        }
        .chosen-image img {
            width: 100%;
        }
        .contact-details {
            float: none;
            position: absolute;
            top: 71vw;
            width: 100%;
            height: 12.4vw;
        }
        .contact-details img {
            width: 22vw;
            top: 3vw;
            left: -2vw;
            margin-left: 3vw;
        }
        .contact-info-price {
            position: absolute;
            top: 0vw;
            right: 0;
            width: 55.5vw;
        }
        .contact-info-price div {
            padding-left: 4vw;
            text-align: center;
        }
        .contact-info-price div i {
            padding-top: 0.2vw;
            padding-left: 0.1vw;
            font-size: 2.5vw;
            width: 8vw;
        }
        .price {
            font-size: 2vw !important;
            padding-top: 0vw;
        }
        .phone {
            font-size: 1.8vw !important;
            padding-top: 0.1vw;
        }
        .email {
            font-size: 1.8vw !important;
            padding-top: 0vw;
        }
        .location {
            font-size: 1.8vw !important;
            padding-top: 0vw;
        }
        .specs .tabs ul {
            font-size: 0.9em;
        }
        .tab-content {
            font-size: 0.9em;
        }
    }

    @media (max-width: 576px) {
        .details-page .page-body {
            width: 98%;
            margin-top: 1vw;
        }
        .car-title {
            font-size: 3.5vw;
            margin-top: -5px;
        }
        .top-section {
            margin-bottom: 1vw;
            height: 87.3vw;
        }
        .gallery {
            float: none;
            position: absolute;
            top: 54vw;
            width: 100%;
            height: 17.7vw;
            overflow-y: hidden;
            overflow-x: scroll;
            display: inline-block;
            white-space: nowrap;
        }
        .gallery img {
            width: 27.5%;
        }
        .contact-details {
            float: none;
            position: absolute;
            top: 74.5vw;
            width: 100%;
            height: 12.7vw;
        }
        .contact-details img {
            margin-left: 12vw;
        }
        .description {
            width: 100%;
        }
        .specs {
            width: 100%;
        }
    }

    @media (max-width: 414px) {
        .gallery {
            height: 17vw;
            top: 56vw;
            padding-bottom: 66px;
        }
        .car-title {
            font-size: 5vw;
        }
        .top-section {
            margin-bottom: 1vw;
            height: 114.4vw;
        }
        .gallery {
            top: 64vw;
        }
        .chosen-image {
            top: 8vw;
        }
        .contact-details {
            border: none;
            height: 38.1vw;
            top: 83vw;
        }
        .contact-details img {
            width: 34vw;
            top: 14vw;
            left: -1vw;
            margin-left: 3vw;
        }
        .contact-info-price div {
            height: 8.4vw;
            padding-left: 8vw;
            padding-top: 1.3vw;
        }
        .contact-info-price div i {
            padding-top: 1.5vw;
            padding-left: 0.1vw;
            font-size: 5.5vw;
            width: 8vw;
            height: 8.4vw;
        }
        .price {
            font-size: 4vw !important;
            padding-top: 0vw;
        }
        .phone {
            font-size: 4vw !important;
            padding-top: 0vw;
            margin-top: 1.5vw;
        }
        .email {
            font-size: 4vw !important;
            padding-top: 0vw;
            margin-top: 1.5vw;
        }
        .location {
            font-size: 4vw !important;
            padding-top: 0vw;
            margin-top: 1.5vw;
        }
        .description {}
        .description label {}
    }

    @media (max-width: 320px) {
        .top-section {
            margin-bottom: 1vw;
            height: 116vw;
        }
        .gallery {
            height: 17vw;
            top: 64vw;
            padding-bottom: 58px;
        }
        .chosen-image {
            top: 8vw;
        }
        .contact-details {
            top: 84vw;
        }
        .description {
            top: 120vw;
        }
        .specs .tabs ul {
            font-size: 0.8em;
        }
        .tab-content {
            font-size: 0.8em;
        }
        .specs {
            width: 100%;
        }
    }
</style>