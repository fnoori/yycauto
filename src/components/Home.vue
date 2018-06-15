<template>
    <div class="home container-fluid">
        <tier-one v-bind:carDetails="items"></tier-one>
        <hr/>
        <tier-two v-bind:carDetails="items"></tier-two>
    </div>
</template>

<script>
    import TierOne from "./TierOne"
    import TierTwo from "./TierTwo"
    import TierThree from "./TierThree"

    export default {
        components: {
            'tier-one': TierOne,
            'tier-two': TierTwo,
            'tier-three': TierThree
        },
        data() {
            return {

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
        methods: {}
    }
</script>

<style scoped>
    .container-fluid {
        padding-right: 0;
        padding-left: 0;
    }

    @media (max-width: 767px) {
    }
</style>