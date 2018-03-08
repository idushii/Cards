import Vue from 'vue'
import Vuex from 'vuex'

import Panel from "./Panel"
import ContextNote from "./ContextMenu/ContextNote"
import ContextListNotes from "./ContextMenu/ContextListNotes"
import Notes from "./Notes"

Vue.use(Vuex)

var vuex = new Vuex.Store({
  modules: { Panel, ContextNote, ContextListNotes, Notes },
  state: {
  },
  mutations: {
    save(state) {
      localStorage['Notes.ListNotes'] = JSON.stringify(state.Notes.List)
    }
  },
  getters: {
  },
  actions: {
    hideContext({commit, state}) {
      commit('toggleContextNote', {Hide: true})
      commit('toggleContextListNotes', {Hide: true})
    },
    showContex({commit, dispatch, state}, {Top, Left, Show, Hide, e, id, Type = 'Note'}) {
      let isNote = e.path.slice(0, 3).map(p => p.classList.value).indexOf("card") > -1
      if (isNote && Type == 'Note') {
        commit('toggleContextListNotes', {Hide: true})
        commit('toggleContextNote', {Top, Left, Show, Hide, id})
      } 
      if( !isNote && Type == 'List' ) {
        commit('toggleContextNote', {Hide: true})
        commit('toggleContextListNotes', {Top, Left, Show, Hide})
      }
    }
  }
})


export default vuex;