import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        serverstatus: ""
    },
    getters: {
        returnServerStatus(state) {
            return state.serverstatus
        }
    },
    mutations: {
        addServerStatus(state, data) {
            state.serverstatus = data;
        }
    },
    actions: {
        actionServerStatus({ commit }, data) {
            commit("addServerStatus", data)
        }
    }
})
export default store