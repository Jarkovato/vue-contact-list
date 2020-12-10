import Vue from 'vue';
import Vuex from 'vuex';
import contacts from './contacts';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    contacts
  },
  plugins: [createPersistedState()]
})