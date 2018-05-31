export default {
    login(state) {
        state.pending = true;
    },

    loginSuccess(state) {
        state.isLoggedIn = true;
        state.pending = false;
    },

    logout(state) {
        state.isLoggedIn = false;
    }
};