<template>
    <div class="home container-fluid">
        <tier-one></tier-one>
        <tier-two></tier-two>
        <tier-three></tier-three>
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
            return {}
        },

        methods: {}
    }
</script>

<style scoped>
    .home {
        height: 41.2rem;
    }
    .container-fluid {
        padding-right: 0;
        padding-left: 0;
    }
</style>