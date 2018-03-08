import Vue from 'vue'
import Vuex from 'vuex'

import Panel from "./Panel"
import ContextNote from "./ContextNote"
import ContextListNotes from "./ContextListNotes"
import Notes from "./Notes"

Vue.use(Vuex)

var vuex = new Vuex.Store({
  modules: { Panel, ContextNote, ContextListNotes, Notes },
  state: {
  },
  mutations: {
  },
  getters: {
  },
  actions: {
    hideContext({commit, state}) {
      commit('toggleContextNote', {Hide: true})
      commit('toggleContextListNotes', {Hide: true})
    },
    showContex({commit, dispatch, state}, {Top, Left, Show, Hide, e, id, Type = 'List'}) {
      dispatch('hideContext');
      if (e.path.slice(0, 3).map(p => p.classList.value).indexOf("card") > -1) {
        commit('toggleContextNote', {Top, Left, Show, Hide, id})
      } else {
        commit('toggleContextListNotes', {Top, Left, Show, Hide})
      }
    }
  }
})


export default vuex;