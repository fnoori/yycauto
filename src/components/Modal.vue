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

    .modal-body {
        margin-top: 0px;
        padding: 10px 15px 15px 15px;
        height: 405px;
        overflow-y: scroll;
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

    /* Misc. */

    .border-rounding {
        border-radius: 0.25rem !important;
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