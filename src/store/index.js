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
    hideContext({commit, state}, { e }) {
      if ( !hasClass(e.path, "context-menu") ) {
        commit('toggleContextNote', {Hide: true})
        commit('toggleContextListNotes', {Hide: true})
      }
    },
    showContex({commit, dispatch, state}, {Top, Left, Show, Hide, e, id, Type = 'Note'}) {
      let isNote = getClassList(e.path).indexOf("card") > -1
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

function getClassList(path) {
  return path.slice(0, 3).map(p => p.classList.value)
}

function hasClass(path, className) {
  return path.slice(0, 3).map(p => p.classList.value).reduce((result, item) => item.indexOf(className) == -1 ? result : true, false)
}

export default vuex;