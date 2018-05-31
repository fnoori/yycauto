import axios from 'axios';

export default {
    login({ commit }, creds) {
        commit('login');
        return new Promise(resolve => {
            setTimeout(() => {
                localStorage.setItem("token", "JWT");
                commit('loginSuccess');
                resolve();
            }, 1000);
        });
    },
    logout({ commit }) {
        localStorage.removeItem("token");
        commit('logout');
    }
};