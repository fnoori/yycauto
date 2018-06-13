<template>
    <div>
        <b-card>
            <img src="https://i.pinimg.com/originals/c2/57/b8/c257b847e55fd0572fb035ec04bb3a1e.jpg" alt="">
            <div class="card-text">
                <div class="card-title">Honda Civic</div>
                div  This is some text within the default card block.
            </div>
        </b-card>
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
    .card {
        flex-direction: row;
        width: 50rem;
        margin: 2rem auto;
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
    }
    .card-body {
        padding: 0;
    }
    .card-body img {
        width: 30%;
        display: inline-block;
    }
    .card-text {
        display: inline-block;
    }
</style>