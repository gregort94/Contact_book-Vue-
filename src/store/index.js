import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


import { getContactsData } from "../js/backend";
export const store = new Vuex.Store({
   state: {
      contactsData: false,
   },
   getters: {
      contactsData(state) {
         return state.contactsData
      }
   },
   mutations: {
      setContactsData(state, data) {
         state.contactsData = data;
      }
   },
   actions: {
      getData(store, formData) {
         getContactsData(formData).then(resolve => {
            store.commit('setContactsData', resolve);
         });
      }
   }
})