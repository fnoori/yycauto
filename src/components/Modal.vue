<!-- template for the modal component -->
<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header advance-search-header">
                        <slot name="header">
                        </slot>
                    </div>

                    <div class="modal-body advance-search-body">
                        <slot name="body">
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

</script>

<style scoped>
    select {
        background: #fff url("data:image/svg+xml;charset=UTF-8,%3csvg fill='%23000000' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3cpath d='M0 0h24v24H0z' fill='none'/%3e%3c/svg%3e") no-repeat right .4rem center !important;
    }

    select:focus {
        border: 1px solid #ced4da !important;
    }

    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 500px;
        height: 500px;
        margin: 0px auto;
        background-color: #fff;
        border-radius: 0.25rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
    }

    .modal-header {
        background-color: #F44336;
        height: 40px;
        border-radius: 2px;
    }

    .full-width-header {
        width: 100%;
        position: relative;
    }

    .advance-search-title {
        color: white;
        float: left;
        font-size: 18px;
        margin-top: -8px;
    }

    .advance-search-close {
        margin-top: -8px;
        background-color: white;
        color: rgba(0, 0, 0, 1);
        border-radius: 2px;
        border: none;
        width: 25px;
        height: 25px;
        padding: 0px;
        margin-right: -7px;
        position: absolute;
        right: 0;
    }

    .advance-search-close:hover {
        background-color: lightgrey;
    }

    .modal-body {
        margin-top: 0px;
        padding: 10px 15px 15px 15px;
        height: 405px;
        overflow-y: scroll;
    }

    .modal-footer {
        padding: 0 5px;
        height: 54px;
    }

    .modal-footer button {
        background-color: #F44336;
        border: none;
        color: white;
        width: 7rem;
        height: 2.5rem;
        border-radius: 2px;
    }

    .modal-footer button:active {
        background-color: #D81E0F;
    }

    .modal-default-button {
        float: right;
    }

    /*
* The following styles are auto-applied to elements with
* transition="modal" when their visibility is toggled
* by Vue.js.
*
* You can easily play with the modal transition by editing
* these styles.
*/

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    .misc-info {
        margin-bottom: 1rem;
    }

    .new-car {
        margin-right: 5%;
    }

    .used-car {
        margin-right: 1%;
    }

    .car-proof {
        width: 110px;
    }

    .car-proof img {
        width: 50%;
    }

    .basic-info {
        margin-bottom: 1rem;
    }

    .basic-info label {
        justify-content: left;
        margin: 0px -15px 10px -15px;
    }

    .left-component {
        margin-right: 0.1rem;
    }

    .right-component {
        margin-left: 0.1rem;
    }

    .min-price {
        margin-right: 0.1rem;
    }

    .max-price {
        margin-left: 0.1rem;
    }

    .aesthetics {
        margin-bottom: 1rem;
    }

    .aesthetics label {
        justify-content: left;
        margin: 0px -15px 10px -15px;
    }

    .mechanical label {
        justify-content: left;
        margin: 0px -15px 10px -15px;
    }

    /* Misc. */

    .border-rounding {
        border-radius: 0.25rem !important;
    }

    .top-margin {
        margin-top: 0.5rem;
    }

    @media (max-width: 800px) {}

    @media (max-width: 767px) {
        .left-component {
            margin-right: 0px;
        }
        .right-component {
            margin-left: 0px;
        }
        .mobile-margin-top {
            margin-top: 0.5rem;
        }
    }

    @media (max-width: 576px) {
        .used-car {
            margin-right: 5%;
        }
    }

    @media (max-width: 550px) {
        .modal-container {
            width: 90vw;
            height: 360px;
        }
        .modal-body {
            margin-top: 0px;
            padding: 10px 15px 15px 15px;
            height: 265px;
            overflow-y: scroll;
        }
    }

    @media (max-width: 414px) {
        .modal-body {
            -webkit-overflow-scrolling: touch;
        }
    }
</style>